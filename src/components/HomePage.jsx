import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Welcome Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to SkillPilot
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Discover your perfect career path with AI-powered insights
          </p>
          <Link
            to="/career-predictor"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Career Prediction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-16 mb-32"
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-pink-500 mb-6">
                Career Compass
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Get personalized career recommendations based on your skills and
                interests. Our AI-powered system analyzes your profile to
                suggest the best career path.
              </p>
              <Link
                to="/career-predictor"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Unlock Career
              </Link>
            </div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src="/career-prediction.svg"
                alt="Career Prediction"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Resume Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col md:flex-row-reverse items-center gap-16 mb-32"
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-pink-500 mb-6">
                Resume Tools
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Resume Builder
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Create professional ATS-friendly resumes quickly with our
                    easy-to-use builder.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Resume Analyzer
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Our analyzer matches your skills with your preferred role to
                    determine job suitability.
                  </p>
                </div>
              </div>
              <Link
                to="/resume-tools"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Explore Tools
              </Link>
            </div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src="/resume-builder.svg"
                alt="Resume Tools"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Career Insights Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-pink-500 mb-6">
                Career Insights
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Get detailed insights about salary ranges and job market trends.
                Make informed decisions about your career path with real-world
                data.
              </p>
              <Link
                to="/career-predictor"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                View Insights
              </Link>
            </div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src="/career-insights.svg"
                alt="Career Insights"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get personalized career recommendations and create a professional
              resume in minutes
            </p>
            <Link
              to="/career-predictor"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300"
            >
              Start Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
