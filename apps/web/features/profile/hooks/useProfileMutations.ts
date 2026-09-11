import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { userService } from "@learnix/api-client";
import { useAuthStore } from "@learnix/auth";
import { UpdateProfileRequest, ChangePasswordRequest } from "@learnix/types";
import { QUERY_KEYS } from "@learnix/api-client";

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const { updateUser } = useAuthStore();

  return useMutation({
    mutationFn: (data: UpdateProfileRequest) => userService.updateProfile(data),
    onSuccess: (data) => {
      updateUser(data);
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.auth.me });
      toast.success("Profile updated successfully");
    },
  });
}

export function useUploadAvatar() {
  const queryClient = useQueryClient();
  const { updateUser } = useAuthStore();

  return useMutation({
    mutationFn: (file: File) => userService.uploadAvatar(file),
    onSuccess: (data) => {
      updateUser(data);
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.auth.me });
      toast.success("Avatar updated successfully");
    },
  });
}

export function useUpdatePassword() {
  return useMutation({
    mutationFn: (data: ChangePasswordRequest) => userService.updatePassword(data),
    onSuccess: () => {
      toast.success("Password updated successfully");
    },
  });
}
