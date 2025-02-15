import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with your API URL

// Get token from localStorage or Redux store
const getToken = () => localStorage.getItem("accessToken") || "";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios Interceptor to Attach Token Automatically
apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 Unauthorized (Token Expiry)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.log("Token expired! Refreshing...");
      const newToken = await refreshToken();
      if (newToken) {
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return apiClient.request(error.config); // Retry request
      }
    }
    return Promise.reject(error);
  }
);

// Function to Refresh Token (Example)
const refreshToken = async (): Promise<string | null> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/refresh-token`, {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    const newToken = response.data.accessToken;
    localStorage.setItem("accessToken", newToken);
    return newToken;
  } catch (error) {
    console.error("Failed to refresh token", error);
    return null;
  }
};


