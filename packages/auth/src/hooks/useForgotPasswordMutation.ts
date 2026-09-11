import { useMutation } from "@tanstack/react-query";
import { authService } from "@learnix/api-client";
import { z } from "zod";
import { emailSchema } from "@learnix/utils";

export function useForgotPasswordMutation(onSuccessCallback: () => void) {
  return useMutation({
    mutationFn: async (values: z.infer<typeof emailSchema>) => {
      return await authService.forgotPassword({ email: values.email });
    },
    onSuccess: () => {
      onSuccessCallback();
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
  });
}
