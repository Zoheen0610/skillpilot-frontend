import React from "react";

const CareerRoadmap = ({ insights }) => {
  if (!insights) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Career Development Roadmap
      </h2>

      {/* Degree Requirements */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-purple-800 mb-3">
          Required Education
        </h3>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-gray-700">{insights.Typical_Degrees}</p>
        </div>
      </div>

      {/* Required Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-purple-800 mb-3">
          Essential Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {insights.In_Demand_Skills.split(", ").map((skill, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* AI Tools */}
      <div>
        <h3 className="text-lg font-medium text-purple-800 mb-3">
          AI Tools in Use
        </h3>
        <div className="flex flex-wrap gap-2">
          {insights.AI_Tools.split(", ").map((tool, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;
