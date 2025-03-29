import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 focus:ring-purple-500',
    secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 focus:ring-purple-500',
    outline: 'bg-transparent text-purple-600 border-2 border-purple-600 hover:bg-purple-50 focus:ring-purple-500',
    ghost: 'bg-transparent text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 