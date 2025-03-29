import React from "react";
import Card from "../ui/Card";
import TextArea from "../ui/TextArea";

const Skills = ({ formData, handleChange }) => {
  return (
    <Card variant="gradient" className="mb-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Skills</h2>
          <p className="text-gray-600">List your key skills and expertise.</p>
        </div>

        <TextArea
          label="Skills *"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Enter your skills, separated by commas (e.g., JavaScript, Python, React, Node.js)"
          required
          rows={4}
          className="resize-none"
        />

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-800 mb-2">
            Tips for Skills Section
          </h3>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>• Include both technical and soft skills</li>
            <li>• Use industry-standard terminology</li>
            <li>• Order skills by relevance to the job</li>
            <li>• Be specific about your expertise level</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Skills;
