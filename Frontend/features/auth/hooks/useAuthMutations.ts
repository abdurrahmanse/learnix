import { useMutation } from "@tanstack/react-query";
import { authService } from "@/lib/api/auth";
import { handleApiError } from "@/lib/api/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { z } from "zod";
import { loginSchema, registerSchema, emailSchema } from "@/lib/validations/auth";

export function useLoginMutation() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (values: z.infer<typeof loginSchema>) => {
      return await authService.login(values.email, values.password);
    },
    onSuccess: async (data) => {
      toast.success("Successfully logged in! Redirecting...");
      try {
        const userResponse = await authService.getMe();
        setAuth(userResponse, data.access_token);
        setTimeout(() => router.push("/"), 1000);
      } catch {
        setAuth({ id: "temp", email: "", username: "", full_name: "", role: "student", is_active: true }, data.access_token);
        setTimeout(() => router.push("/"), 1000);
      }
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err));
    },
  });
}

export function useRegisterMutation(onSuccessCallback: () => void) {
  return useMutation({
    mutationFn: async (values: z.infer<typeof registerSchema>) => {
      return await authService.register({
        email: values.email,
        username: values.username,
        full_name: values.full_name,
        password: values.password
      });
    },
    onSuccess: () => {
      onSuccessCallback();
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err));
    },
  });
}

export function useVerifyRegistrationMutation(onSuccessCallback: () => void) {
  return useMutation({
    mutationFn: async (data: { email: string; otp_code: string }) => {
      return await authService.verifyRegistration(data);
    },
    onSuccess: () => {
      onSuccessCallback();
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err));
    },
  });
}

export function useForgotPasswordMutation(onSuccessCallback: () => void) {
  return useMutation({
    mutationFn: async (values: z.infer<typeof emailSchema>) => {
      return await authService.forgotPassword({ email: values.email });
    },
    onSuccess: () => {
      onSuccessCallback();
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err));
    },
  });
}

export function useResetPasswordMutation(onSuccessCallback: () => void) {
  return useMutation({
    mutationFn: async (data: { email: string; otp_code: string; new_password: string }) => {
      return await authService.resetPassword(data);
    },
    onSuccess: () => {
      onSuccessCallback();
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err));
    },
  });
}
