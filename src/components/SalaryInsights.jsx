import React from "react";

const SalaryInsights = ({ insights }) => {
  if (!insights) return null;

  const formatSalary = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatUSSalary = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getMaxSalary = () => {
    return Math.max(
      insights.Entry_Level_Salary_India,
      insights.Mid_Level_Salary_India,
      insights.High_Level_Salary_India
    );
  };

  const maxSalary = getMaxSalary();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Salary Insights
      </h3>

      {/* Average Salaries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-indigo-800 mb-2">
            US Market
          </h4>
          <div className="text-2xl font-bold text-indigo-600">
            {formatUSSalary(insights.US_Avg_Salary)}
          </div>
          <p className="text-sm text-indigo-600 mt-1">Average Annual Salary</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-purple-800 mb-2">
            Indian Market
          </h4>
          <div className="text-2xl font-bold text-purple-600">
            {formatSalary(insights.India_Avg_Salary)}
          </div>
          <p className="text-sm text-purple-600 mt-1">Average Annual Salary</p>
        </div>
      </div>

      {/* Experience Level Salaries */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-800 mb-4">
          Salary by Experience Level (India)
        </h4>

        {/* Entry Level */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              Entry Level
            </span>
            <span className="text-sm font-medium text-gray-700">
              {formatSalary(insights.Entry_Level_Salary_India)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{
                width: `${
                  (insights.Entry_Level_Salary_India / maxSalary) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Mid Level */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Mid Level</span>
            <span className="text-sm font-medium text-gray-700">
              {formatSalary(insights.Mid_Level_Salary_India)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{
                width: `${
                  (insights.Mid_Level_Salary_India / maxSalary) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* High Level */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              High Level
            </span>
            <span className="text-sm font-medium text-gray-700">
              {formatSalary(insights.High_Level_Salary_India)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{
                width: `${
                  (insights.High_Level_Salary_India / maxSalary) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryInsights;
