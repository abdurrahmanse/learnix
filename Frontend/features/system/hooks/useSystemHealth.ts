import { useQuery } from "@tanstack/react-query";
import { systemService } from "@/lib/api/system";
import { QUERY_KEYS } from "@/lib/react-query";

export function useSystemHealth() {
  return useQuery({
    queryKey: QUERY_KEYS.system.health,
    queryFn: () => systemService.checkHealth(),
    retry: 2,
    refetchInterval: 30000,
  });
}
