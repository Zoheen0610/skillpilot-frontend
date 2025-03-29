import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for hover effects

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-purple-200 transition-colors"
        >
          SkillPilot
        </Link>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <div
          className={`lg:flex lg:space-x-6 absolute lg:static top-16 left-0 w-full bg-purple-700 lg:bg-transparent lg:w-auto flex-col lg:flex-row ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {["Home", "Resume Tools", "Career Compass"].map((text, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={
                  text === "Home"
                    ? "/"
                    : text === "Resume Tools"
                    ? "/resume-tools"
                    : "/career-predictor"
                }
                className="block px-4 py-2 lg:p-0 hover:bg-purple-800 lg:hover:bg-transparent transition-colors"
              >
                {text}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
