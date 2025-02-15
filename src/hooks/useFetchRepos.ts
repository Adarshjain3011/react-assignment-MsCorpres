import { useQuery } from "@tanstack/react-query";

import { fetchGitHubRepos } from "../api/apiClient";

// Define the response type
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export const useFetchRepos = (username: string) => {
  return useQuery<Repo[], Error>({
    queryKey: ["githubRepos", username], 
    queryFn: () => fetchGitHubRepos(username),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 2, // Retry twice on failure
  });
};


