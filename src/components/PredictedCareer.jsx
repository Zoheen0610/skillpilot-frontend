import React from "react";

const PredictedCareer = ({ career }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Predicted Career Path
      </h2>
      <div className="bg-purple-50 rounded-lg p-4">
        <h3 className="text-xl font-semibold text-purple-800 mb-2">{career}</h3>
        <p className="text-gray-600">
          Based on your skills, interests, education, and experience, we predict
          this career path would be an excellent fit for you.
        </p>
      </div>
    </div>
  );
};

export default PredictedCareer;
