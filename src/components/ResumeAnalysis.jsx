import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

const CAREER_ROLES = [
  "Software Development and Engineering",
  "Artificial Intelligence",
  "Development",
  "Cybersecurity",
  "Data Science",
  "UI/UX Design",
];

const ResumeAnalysis = () => {
  const [file, setFile] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [analysis, setAnalysis] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [careerInsights, setCareerInsights] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCareerInsights = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/careers`);
        setCareerInsights(response.data);
      } catch (err) {
        console.error("Error fetching career insights:", err);
      }
    };
    fetchCareerInsights();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check if file is PDF
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }

    setFile(file);
    setError(null);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRoleSelect = (role) => {
    setSelectedRoles((prev) => {
      if (prev.includes(role)) {
        return prev.filter((r) => r !== role);
      } else {
        return [...prev, role];
      }
    });
  };

  const handleAnalyze = async () => {
    if (!file || selectedRoles.length === 0) {
      setError("Please upload a resume and select at least one career role");
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysis({});

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const analysisResults = {};

      // Analyze for each selected role
      for (const role of selectedRoles) {
        const roleInsights = careerInsights?.find(
          (insight) => insight.Career === role
        );

        if (!roleInsights) {
          console.error(`Career role not found: ${role}`);
          continue;
        }

        formData.set("required_skills", roleInsights["In-Demand Skills"]);

        const response = await axios.post(
          `${API_BASE_URL}/analyze-resume`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        analysisResults[role] = response.data;
      }

      setAnalysis(analysisResults);
    } catch (err) {
      setError("Error analyzing resume. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getMatchPercentage = (roleAnalysis) => {
    if (!roleAnalysis?.matched_skills || !roleAnalysis?.required_skills)
      return 0;
    return Math.round(
      (roleAnalysis.matched_skills.length /
        roleAnalysis.required_skills.length) *
        100
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Resume Analysis
        </h2>

        {/* Career Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Your Target Career Roles
          </label>
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-700">
                  {selectedRoles.length > 0
                    ? `${selectedRoles.length} role${
                        selectedRoles.length !== 1 ? "s" : ""
                      } selected`
                    : "Select career roles"}
                </span>
                <svg
                  className={`h-5 w-5 text-gray-400 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {CAREER_ROLES.map((role) => (
                  <div
                    key={role}
                    onClick={() => handleRoleSelect(role)}
                    className={`px-4 py-2 cursor-pointer hover:bg-indigo-50 ${
                      selectedRoles.includes(role) ? "bg-indigo-50" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedRoles.includes(role)}
                        onChange={() => {}}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm text-gray-700">{role}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {selectedRoles.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                >
                  {role}
                  <button
                    onClick={() => handleRoleSelect(role)}
                    className="ml-2 text-indigo-600 hover:text-indigo-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload your resume (PDF only)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF up to 10MB</p>
            </div>
          </div>
          {file && (
            <p className="mt-2 text-sm text-gray-500">
              Selected file: {file.name}
            </p>
          )}
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading || !file || selectedRoles.length === 0}
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            "Analyze Resume"
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-red-50 text-red-700 p-4 rounded-lg">
            {error}
          </div>
        )}

        {/* Analysis Results */}
        {Object.keys(analysis).length > 0 && (
          <div className="mt-6 space-y-8">
            {Object.entries(analysis).map(([role, roleAnalysis]) => (
              <div key={role} className="border rounded-lg p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Analysis for {role}
                </h3>

                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-medium text-indigo-800 mb-2">
                    Match Score
                  </h4>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-indigo-600">
                      {getMatchPercentage(roleAnalysis)}%
                    </div>
                    <div className="ml-2 text-gray-600">
                      match with required skills
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Matched Skills */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-green-800 mb-2">
                      Matched Skills
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {roleAnalysis.matched_skills.map((skill, index) => (
                        <li key={index} className="text-green-700">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Missing Skills */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-yellow-800 mb-2">
                      Skills to Develop
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {roleAnalysis.missing_skills.map((skill, index) => (
                        <li key={index} className="text-yellow-700">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-blue-800 mb-2">
                    Recommendations
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {roleAnalysis.recommendations.map((rec, index) => (
                      <li key={index} className="text-blue-700">
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalysis;
