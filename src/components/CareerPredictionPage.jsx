import React from "react";
import InputSection from "./InputSection";
import PredictedCareer from "./PredictedCareer";
import CareerRoadmap from "./CareerRoadmap";
import SalaryInsights from "./SalaryInsights";
import JobInsights from "./JobInsights";

const CareerPredictionPage = ({ onPredict, loading, error, careerData }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Career Compass
      </h1>

      {/* Input Section */}
      <InputSection onPredict={onPredict} loading={loading} />

      {/* Error Message */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Career Insights */}
      {careerData && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Predicted Career */}
          <PredictedCareer career={careerData.prediction} />

          {/* Career Roadmap */}
          {careerData.insights && (
            <CareerRoadmap insights={careerData.insights} />
          )}

          {/* Salary Insights */}
          {careerData.insights && (
            <SalaryInsights insights={careerData.insights} />
          )}

          {/* Job Insights */}
          {careerData.insights && (
            <JobInsights insights={careerData.insights} />
          )}
        </div>
      )}
    </div>
  );
};

export default CareerPredictionPage;
