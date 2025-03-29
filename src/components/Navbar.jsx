import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold hover:text-purple-200 transition-colors"
        >
          SkillPilot
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-purple-200 transition-colors">
            Home
          </Link>
          <Link
            to="/resume-tools"
            className="hover:text-purple-200 transition-colors"
          >
            Resume Tools
          </Link>
          <Link
            to="/career-predictor"
            className="hover:text-purple-200 transition-colors"
          >
            Career Compass
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
