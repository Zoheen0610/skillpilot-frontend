import React, { useState } from "react";
import axios from "axios";
import PersonalInfo from "./sections/PersonalInfo";
import ProfessionalSummary from "./sections/ProfessionalSummary";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import AdditionalInfo from "./sections/AdditionalInfo";
import Button from "./ui/Button";
import Card from "./ui/Card";
import API_BASE_URL from "../config";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
    experience: [],
    education: [],
    skills: "",
    certifications: "",
    awards: "",
    projects: "",
    publications: "",
    volunteer_work: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [previewContent, setPreviewContent] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, index, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: prev[parent].map((item, i) =>
          i === parseInt(index) ? { ...item, [field]: value } : item
        ),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    }));
  };

  const handleRemoveExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const handleAddEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          school: "",
          degree: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    }));
  };

  const handleRemoveEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const calculateProgress = () => {
    const requiredFields = [
      "name",
      "email",
      "phone",
      "location",
      "summary",
      "skills",
    ];
    const filledFields = requiredFields.filter(
      (field) => formData[field].trim() !== ""
    );
    return Math.round((filledFields.length / requiredFields.length) * 100);
  };

  const handleDownload = () => {
    if (!pdfBlob) return;

    const pdfUrl = window.URL.createObjectURL(pdfBlob);
    const pdfLink = document.createElement("a");
    pdfLink.href = pdfUrl;
    pdfLink.download = "resume.pdf";
    document.body.appendChild(pdfLink);
    pdfLink.click();
    window.URL.revokeObjectURL(pdfUrl);
    document.body.removeChild(pdfLink);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    setPreviewContent(null);
    setPdfBlob(null);

    try {
      // Format the data to match the backend's expected structure
      const formattedData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        summary: formData.summary,
        skills: formData.skills,
        experience: formData.experience.map((exp) => ({
          company: exp.company || "",
          position: exp.position || "",
          dates: `${exp.start_date || ""} - ${exp.end_date || ""}`,
          description: exp.description || "",
        })),
        education: formData.education.map((edu) => ({
          school: edu.school || "",
          degree: edu.degree || "",
          dates: `${edu.start_date || ""} - ${edu.end_date || ""}`,
          description: edu.description || "",
        })),
        linkedin: formData.linkedin || null,
        github: formData.github || null,
        portfolio: formData.portfolio || null,
        certifications: formData.certifications || null,
        awards: formData.awards || null,
        projects: formData.projects || null,
        publications: formData.publications || null,
        volunteer_work: formData.volunteer_work || null,
      };

      // Validate required fields
      const requiredFields = [
        "name",
        "email",
        "phone",
        "location",
        "summary",
        "skills",
      ];
      const missingFields = requiredFields.filter(
        (field) => !formattedData[field] || formattedData[field].trim() === ""
      );

      if (missingFields.length > 0) {
        throw new Error(
          `Please fill in all required fields: ${missingFields.join(", ")}`
        );
      }

      const response = await axios.post(
        `${API_BASE_URL}/generate-resume`,
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.data) {
        throw new Error("No data received from server");
      }

      // Create PDF blob from base64 content
      const binaryString = window.atob(response.data.pdf_content);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const pdfBlob = new Blob([bytes], { type: "application/pdf" });
      setPdfBlob(pdfBlob);

      // Set the preview content
      if (response.data.html_preview) {
        setPreviewContent(response.data.html_preview);
      }

      setSuccess(true);
    } catch (err) {
      console.error("Error generating resume:", err);
      if (err.response) {
        setError(
          err.response.data?.detail ||
            "Failed to generate resume. Please try again."
        );
      } else if (err.request) {
        setError(
          "No response from server. Please check if the backend is running."
        );
      } else {
        setError(
          err.message || "Error setting up the request. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            progress={calculateProgress()}
          />

          <ProfessionalSummary
            formData={formData}
            handleChange={handleChange}
          />

          <Experience
            formData={formData}
            handleChange={handleChange}
            handleAddExperience={handleAddExperience}
            handleRemoveExperience={handleRemoveExperience}
          />

          <Education
            formData={formData}
            handleChange={handleChange}
            handleAddEducation={handleAddEducation}
            handleRemoveEducation={handleRemoveEducation}
          />

          <Skills formData={formData} handleChange={handleChange} />

          <AdditionalInfo formData={formData} handleChange={handleChange} />

          {error && (
            <Card className="bg-red-50 border-red-200">
              <p className="text-red-600">{error}</p>
            </Card>
          )}

          {success && (
            <Card className="bg-green-50 border-green-200">
              <p className="text-green-600">Resume generated successfully!</p>
            </Card>
          )}

          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? "Generating..." : "Generate Resume"}
            </Button>
            {pdfBlob && (
              <Button
                type="button"
                onClick={handleDownload}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
              >
                Download PDF
              </Button>
            )}
          </div>
        </form>

        {/* Preview Section */}
        {previewContent && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Resume Preview
            </h2>
            <Card className="bg-white">
              <div
                className="prose max-w-none p-8"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: "12px",
                  lineHeight: "1.6",
                  color: "#333",
                }}
                dangerouslySetInnerHTML={{ __html: previewContent }}
              />
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
