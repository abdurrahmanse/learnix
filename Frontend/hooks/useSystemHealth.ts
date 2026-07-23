import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export interface HealthCheckResponse {
  success: boolean;
  message: string;
  version: string;
}

export function useSystemHealth() {
  return useQuery({
    queryKey: ["health"],
    queryFn: async () => {
      const response = await api.get<HealthCheckResponse>("/health");
      return response.data;
    },
    retry: 2,
    refetchInterval: 30000,
  });
}
