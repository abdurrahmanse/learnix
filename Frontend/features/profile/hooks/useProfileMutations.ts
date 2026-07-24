import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { userService } from "@/lib/api/users";
import { useAuthStore } from "@/store/authStore";
import { UpdateProfileRequest, ChangePasswordRequest } from "@/types/users";
import { QUERY_KEYS } from "@/lib/react-query";

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
