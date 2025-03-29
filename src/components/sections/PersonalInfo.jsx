import React from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Progress from "../ui/Progress";

const PersonalInfo = ({ formData, handleChange, progress }) => {
  return (
    <Card variant="gradient" className="mb-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Personal Information
          </h2>
          <p className="text-gray-600">
            Fill in your basic information to get started.
          </p>
        </div>

        <Progress value={progress} className="mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name *"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
          <Input
            label="Email *"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
          />
          <Input
            label="Phone *"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            required
          />
          <Input
            label="Location *"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, Country"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="LinkedIn Profile"
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
          />
          <Input
            label="GitHub Profile"
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
          />
          <Input
            label="Portfolio Website"
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="https://your-portfolio.com"
          />
        </div>
      </div>
    </Card>
  );
};

export default PersonalInfo;
