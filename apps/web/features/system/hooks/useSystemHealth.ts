import { useQuery } from "@tanstack/react-query";
import { systemService } from "@learnix/api-client";
import { QUERY_KEYS } from "@learnix/api-client";

export function useSystemHealth() {
  return useQuery({
    queryKey: QUERY_KEYS.system.health,
    queryFn: () => systemService.checkHealth(),
    retry: 2,
    refetchInterval: 30000,
  });
}
