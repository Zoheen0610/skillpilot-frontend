import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";

const Experience = ({
  formData,
  handleChange,
  handleAddExperience,
  handleRemoveExperience,
}) => {
  return (
    <Card variant="gradient" className="mb-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Work Experience
            </h2>
            <p className="text-gray-600">
              Add your professional work experience.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={handleAddExperience}
            className="flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Experience
          </Button>
        </div>

        {formData.experience.map((exp, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-4 bg-white"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800">
                Experience #{index + 1}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveExperience(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name={`experience.${index}.company`}
                value={exp.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="input-field"
              />
              <input
                type="text"
                name={`experience.${index}.position`}
                value={exp.position}
                onChange={handleChange}
                placeholder="Position"
                className="input-field"
              />
              <input
                type="text"
                name={`experience.${index}.start_date`}
                value={exp.start_date}
                onChange={handleChange}
                placeholder="Start Date (e.g., Jan 2020)"
                className="input-field"
              />
              <input
                type="text"
                name={`experience.${index}.end_date`}
                value={exp.end_date}
                onChange={handleChange}
                placeholder="End Date (e.g., Present)"
                className="input-field"
              />
            </div>

            <TextArea
              name={`experience.${index}.description`}
              value={exp.description}
              onChange={handleChange}
              placeholder="Describe your responsibilities and achievements..."
              rows={4}
              className="resize-none"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Experience;
