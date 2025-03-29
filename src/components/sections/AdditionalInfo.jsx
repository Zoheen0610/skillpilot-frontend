import React from "react";
import Card from "../ui/Card";
import TextArea from "../ui/TextArea";

const AdditionalInfo = ({ formData, handleChange }) => {
  return (
    <Card variant="gradient" className="mb-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Additional Information
          </h2>
          <p className="text-gray-600">
            Add any additional information that might be relevant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextArea
            label="Certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            placeholder="List your certifications..."
            rows={3}
            className="resize-none"
          />
          <TextArea
            label="Awards"
            name="awards"
            value={formData.awards}
            onChange={handleChange}
            placeholder="List your awards and achievements..."
            rows={3}
            className="resize-none"
          />
          <TextArea
            label="Projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            placeholder="Describe your notable projects..."
            rows={3}
            className="resize-none"
          />
          <TextArea
            label="Publications"
            name="publications"
            value={formData.publications}
            onChange={handleChange}
            placeholder="List your publications..."
            rows={3}
            className="resize-none"
          />
          <TextArea
            label="Volunteer Work"
            name="volunteer_work"
            value={formData.volunteer_work}
            onChange={handleChange}
            placeholder="Describe your volunteer experience..."
            rows={3}
            className="resize-none"
          />
        </div>
      </div>
    </Card>
  );
};

export default AdditionalInfo;
