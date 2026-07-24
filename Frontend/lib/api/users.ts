import { api } from "../axios";
import { User } from "@/types/auth";
import { UpdateProfileRequest, ChangePasswordRequest } from "@/types/users";

export const userService = {
  /**
   * List all users (Admin only)
   */
  listAllUsersAdmin: async (): Promise<User[]> => {
    const response = await api.get<User[]>("/users/");
    return response.data;
  },

  /**
   * Update current user's profile
   */
  updateProfile: async (data: UpdateProfileRequest): Promise<User> => {
    const response = await api.patch<User>("/users/me", data);
    return response.data;
  },

  /**
   * Upload and update user's avatar
   */
  uploadAvatar: async (file: File): Promise<User> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post<User>("/users/me/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  /**
   * Update current user's password
   */
  updatePassword: async (data: ChangePasswordRequest): Promise<User> => {
    const response = await api.post<User>("/users/me/password", data);
    return response.data;
  },
};
