import axios from "axios";

const API_BASE_URL:any = import.meta.env.VITE_API_BASE_URL as string;
const accessToken:any = import.meta.env.VITE_API_ACCESS_TOKEN as string;

console.log("base api url ", API_BASE_URL);
console.log("access token", accessToken);

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/vnd.github.v3+json",
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

export default apiClient;