import { api } from "../axios";
import {
  User,
  RegisterRequest,
  VerifyOTPRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  TokenResponse,
  MessageResponse,
} from "@/types/auth";

// ==========================================
// API Services
// ==========================================

export const authService = {
  /**
   * Login using OAuth2 form data
   */
  login: async (email: string, password: string): Promise<TokenResponse> => {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const response = await api.post<TokenResponse>("/auth/login", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  },

  /**
   * Register a new user
   */
  register: async (data: RegisterRequest): Promise<User> => {
    const response = await api.post<User>("/auth/register", data);
    return response.data;
  },

  /**
   * Verify email OTP for registration
   */
  verifyRegistration: async (data: VerifyOTPRequest): Promise<MessageResponse> => {
    const response = await api.post<MessageResponse>("/auth/verify-registration", data);
    return response.data;
  },

  /**
   * Get current authenticated user
   */
  getMe: async (token?: string): Promise<User> => {
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
    const response = await api.get<User>("/auth/me", config);
    return response.data;
  },

  /**
   * Refresh JWT token using HTTP-only cookie
   */
  refresh: async (): Promise<TokenResponse> => {
    const response = await api.post<TokenResponse>("/auth/refresh");
    return response.data;
  },

  /**
   * Logout user (clears HTTP-only refresh token)
   */
  logout: async (): Promise<MessageResponse> => {
    const response = await api.post<MessageResponse>("/auth/logout");
    return response.data;
  },

  /**
   * Request password reset OTP
   */
  forgotPassword: async (data: ForgotPasswordRequest): Promise<MessageResponse> => {
    const response = await api.post<MessageResponse>("/auth/forgot-password", data);
    return response.data;
  },

  /**
   * Reset password using OTP
   */
  resetPassword: async (data: ResetPasswordRequest): Promise<MessageResponse> => {
    const response = await api.post<MessageResponse>("/auth/reset-password", data);
    return response.data;
  }
};
