import axios from "axios";
import { api } from "../axios";
import imageCompression from "browser-image-compression";

interface SignatureResponse {
  timestamp: number;
  signature: string;
  api_key: string;
  cloud_name: string;
  folder: string;
}

export interface UploadResponse {
  secure_url: string;
  public_id: string;
}

/**
 * Uploads a file to Cloudinary using a signed request from the backend.
 * Automatically compresses images before upload.
 */
export async function uploadMedia(
  file: File,
  folder: string = "learnix_uploads",
  onProgress?: (progress: number) => void
): Promise<UploadResponse> {
  let fileToUpload = file;

  // Compress images
  if (file.type.startsWith("image/")) {
    const options = {
      maxSizeMB: 5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.85,
    };
    try {
      fileToUpload = await imageCompression(file, options);
    } catch (error) {
      console.warn("Image compression failed, uploading original:", error);
    }
  }

  // 1. Get signature from backend
  const { data: signatureData } = await api.get<SignatureResponse>(
    `/media/signature?folder=${folder}`
  );

  // 2. Prepare form data for Cloudinary
  const formData = new FormData();
  formData.append("file", fileToUpload);
  formData.append("api_key", signatureData.api_key);
  formData.append("timestamp", signatureData.timestamp.toString());
  formData.append("signature", signatureData.signature);
  formData.append("folder", signatureData.folder);

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${signatureData.cloud_name}/upload`;

  // 3. Upload directly to Cloudinary
  const response = await axios.post(cloudinaryUrl, formData, {
    onUploadProgress: (progressEvent) => {
      if (onProgress && progressEvent.total) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress(percentCompleted);
      }
    },
  });

  return {
    secure_url: response.data.secure_url,
    public_id: response.data.public_id,
  };
}
