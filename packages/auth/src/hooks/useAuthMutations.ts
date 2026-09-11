// Barrel re-export — individual hooks are co-located in their own files.
// All existing imports from "@/hooks/useAuthMutations" continue to work.
export { useLoginMutation } from "./useLoginMutation";
export { useRegisterMutation, useVerifyRegistrationMutation } from "./useRegisterMutation";
export { useForgotPasswordMutation, useResetPasswordMutation } from "./useForgotPasswordMutation";
