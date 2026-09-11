export interface UpdateProfileRequest {
  full_name?: string;
  bio?: string;
  location?: string;
  phone_number?: string;
  avatar_url?: string;
  avatar_public_id?: string;
}

export interface ChangePasswordRequest {
  current_password: string;
  new_password: string;
}
