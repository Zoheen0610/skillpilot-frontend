import React from "react";

const Progress = ({ value, max = 100, className = "" }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className="bg-gradient-to-r from-purple-600 to-purple-800 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Progress;
