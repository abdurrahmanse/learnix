import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleApiError } from "./utils";

export const getQueryClient = () => {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const message = handleApiError(error);
        toast.error(message);
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        const message = handleApiError(error);
        toast.error(message);
      },
    }),
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    },
  });
};

export const QUERY_KEYS = {
  users: {
    all: ["users"] as const,
    details: () => ["users", "details"] as const,
    profile: (id: string) => ["users", "profile", id] as const,
  },
  courses: {
    all: ["courses"] as const,
    published: () => ["courses", "published"] as const,
    admin: () => ["courses", "admin"] as const,
    detail: (id: string) => ["courses", "detail", id] as const,
  },
  auth: {
    me: ["auth", "me"] as const,
  },
  system: {
    health: ["system", "health"] as const,
  },
};
