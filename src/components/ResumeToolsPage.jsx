import React, { useState } from "react";
import ResumeBuilder from "./ResumeBuilder";
import ResumeAnalysis from "./ResumeAnalysis";

const ResumeToolsPage = () => {
  const [activeTab, setActiveTab] = useState("builder");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Resume Tools
      </h1>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("builder")}
              className={`${
                activeTab === "builder"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Resume Builder
            </button>
            <button
              onClick={() => setActiveTab("analyzer")}
              className={`${
                activeTab === "analyzer"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Resume Analyzer
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === "builder" ? <ResumeBuilder /> : <ResumeAnalysis />}
      </div>
    </div>
  );
};

export default ResumeToolsPage;
