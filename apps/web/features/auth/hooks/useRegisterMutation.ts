import { useMutation } from "@tanstack/react-query";
import { authService } from "@learnix/api-client";
import { z } from "zod";
import { registerSchema } from "@learnix/utils";

export function useRegisterMutation(onSuccessCallback: () => void) {
  return useMutation({
    mutationFn: async (values: z.infer<typeof registerSchema>) => {
      return await authService.register({
        email: values.email,
        username: values.username,
        full_name: values.full_name,
        password: values.password,
      });
    },
    onSuccess: () => {
      onSuccessCallback();
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
  });
}
