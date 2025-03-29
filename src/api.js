import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export const fetchCareerData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/career`);
    return response.data;
  } catch (error) {
    console.error("Error fetching career data:", error);
    return null;
  }
};
