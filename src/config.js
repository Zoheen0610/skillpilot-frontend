const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000"; // Default to localhost if env is missing
console.log("API Base URL:", process.env.REACT_APP_API_BASE_URL);
export default API_BASE_URL;
