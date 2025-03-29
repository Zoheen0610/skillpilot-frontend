import React from "react";

const Card = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "bg-transparent shadow-md",
    elevated: "bg-white shadow-lg",
    outlined: "bg-white border-2 border-gray-200",
    gradient: "bg-gradient-to-r from-purple-50 to-pink-50 shadow-md",
  };

  return (
    <div
      className={`
        rounded-lg p-6 transition-all duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
