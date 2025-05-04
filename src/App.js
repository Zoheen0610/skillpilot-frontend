import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CareerPredictionPage from "./components/CareerPredictionPage";
import ResumeToolsPage from "./components/ResumeToolsPage";
import Navbar from "./components/Navbar";
import ChatBot from "./components/chatbot"; // Make sure the file name matches exactly
import API_BASE_URL from "./config";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [careerData, setCareerData] = useState(null);

  const handlePredict = async (skills, interests) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skills: `${skills} ${interests}` }),
      });

      if (!response.ok) {
        throw new Error("Failed to get prediction");
      }

      const data = await response.json();
      setCareerData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/career-predictor"
            element={
              <CareerPredictionPage
                onPredict={handlePredict}
                loading={loading}
                error={error}
                careerData={careerData}
              />
            }
          />
          <Route path="/resume-tools" element={<ResumeToolsPage />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
