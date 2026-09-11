import { api } from "../instance";

export interface HealthCheckResponse {
  success: boolean;
  message: string;
  version: string;
}

export const systemService = {
  checkHealth: async (): Promise<HealthCheckResponse> => {
    const response = await api.get<HealthCheckResponse>("/health");
    return response.data;
  },
};
