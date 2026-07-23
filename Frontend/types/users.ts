export interface UpdateProfileRequest {
  full_name?: string;
  bio?: string;
  location?: string;
  phone_number?: string;
}

export interface ChangePasswordRequest {
  current_password: string;
  new_password: string;
}
