import React from "react";

const TextArea = ({ label, error, helperText, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-2 border rounded-lg transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        rows={4}
        {...props}
      />
      {helperText && (
        <p
          className={`mt-1 text-sm ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextArea;
