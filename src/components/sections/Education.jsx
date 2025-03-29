import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";

const Education = ({
  formData,
  handleChange,
  handleAddEducation,
  handleRemoveEducation,
}) => {
  return (
    <Card variant="gradient" className="mb-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Education</h2>
            <p className="text-gray-600">Add your educational background.</p>
          </div>
          <Button
            variant="outline"
            onClick={handleAddEducation}
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
            Add Education
          </Button>
        </div>

        {formData.education.map((edu, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-4"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800">
                Education #{index + 1}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveEducation(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name={`education.${index}.school`}
                value={edu.school}
                onChange={handleChange}
                placeholder="School/University Name"
                className="input-field"
              />
              <input
                type="text"
                name={`education.${index}.degree`}
                value={edu.degree}
                onChange={handleChange}
                placeholder="Degree/Certificate"
                className="input-field"
              />
              <input
                type="text"
                name={`education.${index}.start_date`}
                value={edu.start_date}
                onChange={handleChange}
                placeholder="Start Date (e.g., 2018)"
                className="input-field"
              />
              <input
                type="text"
                name={`education.${index}.end_date`}
                value={edu.end_date}
                onChange={handleChange}
                placeholder="End Date (e.g., 2022)"
                className="input-field"
              />
            </div>

            <TextArea
              name={`education.${index}.description`}
              value={edu.description}
              onChange={handleChange}
              placeholder="Add any relevant details about your education..."
              rows={3}
              className="resize-none"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Education;
