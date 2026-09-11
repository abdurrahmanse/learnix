import { useMutation } from "@tanstack/react-query";
import { authService } from "@learnix/api-client";
import { toast } from "sonner";
import { useAuthStore } from "@/features/auth/store/authStore";
import { z } from "zod";
import { loginSchema } from "@learnix/utils";

export function useLoginMutation() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (values: z.infer<typeof loginSchema>) => {
      return await authService.login(values.email, values.password);
    },
    onSuccess: async (data) => {
      toast.success("Successfully logged in! Redirecting...");
      try {
        const userResponse = await authService.getMe(data.access_token);
        // Delay state update to allow toast to render.
        // GuestGuard will automatically handle the role-based redirect once setAuth completes.
        setTimeout(() => {
          setAuth(userResponse, data.access_token);
        }, 1000);
      } catch {
        setAuth(
          { id: "temp", email: "", username: "", full_name: "", role: "student", is_active: true },
          data.access_token
        );
      }
    },
  });
}
