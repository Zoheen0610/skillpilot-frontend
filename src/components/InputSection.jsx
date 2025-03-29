import React, { useState } from "react";

const commonSkills = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "Machine Learning",
  "Data Analysis",
  "Web Development",
  "Mobile Development",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Project Management",
  "Agile",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "React",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "GraphQL",
  "REST APIs",
  "Data Structures",
  "Algorithms",
  "System Design",
  "Network Security",
  "Cybersecurity",
  "Blockchain",
  "IoT",
  "AR/VR",
  "Game Development",
];

const interestAreas = [
  "Engineering",
  "Computer Science",
  "Data Science",
  "Business",
  "Healthcare",
  "Arts & Design",
  "Education",
  "Finance",
  "Marketing",
  "Law",
  "Medicine",
  "Research",
  "Environmental Science",
  "Social Sciences",
  "Humanities",
  "Architecture",
  "Agriculture",
  "Manufacturing",
  "Transportation",
  "Energy & Utilities",
];

const InputSection = ({ onPredict, loading }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setNewSkill("");
  };

  const handleInterestChange = (e) => {
    const interest = e.target.value;
    if (interest && !selectedInterests.includes(interest)) {
      setSelectedInterests([...selectedInterests, interest]);
    }
    setNewInterest("");
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const removeInterest = (interestToRemove) => {
    setSelectedInterests(
      selectedInterests.filter((interest) => interest !== interestToRemove)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSkills.length > 0 || selectedInterests.length > 0) {
      const combinedInput = [...selectedSkills, ...selectedInterests].join(
        ", "
      );
      onPredict(combinedInput);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Skills Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Skills
          </label>
          <div className="flex gap-2">
            <select
              value={newSkill}
              onChange={handleSkillChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={loading}
            >
              <option value="">Select a skill...</option>
              {commonSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          {selectedSkills.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-purple-600 hover:text-purple-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Interests Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Interest Areas
          </label>
          <div className="flex gap-2">
            <select
              value={newInterest}
              onChange={handleInterestChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={loading}
            >
              <option value="">Select an interest area...</option>
              {interestAreas.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </div>
          {selectedInterests.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedInterests.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                >
                  {interest}
                  <button
                    type="button"
                    onClick={() => removeInterest(interest)}
                    className="ml-2 text-purple-600 hover:text-purple-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={
              loading ||
              (selectedSkills.length === 0 && selectedInterests.length === 0)
            }
            className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-md shadow-sm hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
              loading ||
              (selectedSkills.length === 0 && selectedInterests.length === 0)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {loading ? "Analyzing..." : "Get Career Recommendation"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSection;
