import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
let accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

// Token Expiry Handling (401)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.error("Token expired. Refreshing token...");
      // Handle token refresh logic here (OAuth/Refresh Token)
    }
    return Promise.reject(error);
  }
);

// Fetch GitHub Repos (Example API)
export const fetchGitHubRepos = async (username: string): Promise<any> => {
  const response = await apiClient.get(`/users/${username}/repos`);
  return response.data;
};


