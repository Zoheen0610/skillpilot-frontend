import React from "react";
import Card from "../ui/Card";
import TextArea from "../ui/TextArea";

const ProfessionalSummary = ({ formData, handleChange }) => {
  return (
    <Card variant="gradient" className="mb-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-600">
            Write a compelling summary of your professional background and
            career objectives.
          </p>
        </div>

        <TextArea
          label="Summary *"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Experienced software developer with expertise in full-stack development..."
          required
          rows={6}
          className="resize-none"
        />
      </div>
    </Card>
  );
};

export default ProfessionalSummary;
