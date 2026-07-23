import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleApiError } from "@/lib/api/utils";

export function useApiMutation<TData, TError, TVariables, TContext>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
) {
  return useMutation<TData, TError, TVariables, TContext>({
    ...options,
    onError: (...args) => {
      const [error] = args;
      toast.error(handleApiError(error));
      if (options.onError) {
        options.onError(...args);
      }
    },
  });
}
