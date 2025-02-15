import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";

// Define TypeScript Type for API Response
interface UserData {
  id: number;
  name: string;
  email: string;
}

const fetchUserData = async (): Promise<UserData> => {
  const response = await apiClient.get<UserData>("/user");
  return response.data;
};

export const useFetchData = () => {
  return useQuery(["user"], fetchUserData, {
    staleTime: 1000 * 60 * 5, /
  });
};


