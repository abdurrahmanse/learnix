"use client";

import React, { useCallback, useState } from "react";
import { UploadCloud, File, X, Image as ImageIcon, Video, CheckCircle, AlertCircle } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { uploadMedia } from "@/lib/api/media";
import { cn } from "@/lib/utils";

interface MediaUploaderProps {
  onUploadSuccess: (url: string, publicId: string) => void;
  onUploadError?: (error: Error) => void;
  folder?: string;
  accept?: "image/*" | "video/*" | "image/*,video/*";
  maxSizeMB?: number;
  className?: string;
  defaultPreviewUrl?: string;
}

export function MediaUploader({
  onUploadSuccess,
  onUploadError,
  folder = "learnix_uploads",
  accept = "image/*",
  maxSizeMB = 5,
  className,
  defaultPreviewUrl,
}: MediaUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultPreviewUrl || null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];

      // Validate size
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`File size must be less than ${maxSizeMB}MB`);
        return;
      }

      setError(null);
      setIsUploading(true);
      setProgress(0);
      setSuccess(false);

      // Set local preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      try {
        const { secure_url, public_id } = await uploadMedia(file, folder, (p) => {
          setProgress(p);
        });
        
        setSuccess(true);
        onUploadSuccess(secure_url, public_id);
      } catch (err: any) {
        console.error("Upload failed:", err);
        setError(err.message || "Upload failed. Please try again.");
        if (onUploadError) onUploadError(err);
        setPreviewUrl(defaultPreviewUrl || null); // revert on error
      } finally {
        setIsUploading(false);
      }
    },
    [folder, maxSizeMB, onUploadSuccess, onUploadError, defaultPreviewUrl]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.split(",").reduce((acc, curr) => {
      acc[curr.trim()] = [];
      return acc;
    }, {} as Record<string, string[]>),
    maxFiles: 1,
    disabled: isUploading,
  });

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent opening file dialog
    setPreviewUrl(null);
    setSuccess(false);
    setProgress(0);
    setError(null);
    onUploadSuccess("", ""); // emit empty to clear parent state
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors overflow-hidden",
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 bg-muted/20 hover:bg-muted/50",
          isUploading && "cursor-not-allowed opacity-80",
          error && "border-destructive/50 bg-destructive/5"
        )}
      >
        <input {...getInputProps()} />

        {previewUrl ? (
          <div className="relative w-full h-full">
            {accept.includes("video") && previewUrl.match(/\.(mp4|webm|ogg)$/i) ? (
              <video src={previewUrl} className="w-full h-full object-cover" controls />
            ) : (
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
            )}
            
            {/* Overlay for uploading state */}
            {isUploading && (
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-xs space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Uploading...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Remove button (only show when not uploading) */}
            {!isUploading && (
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-md z-10"
                onClick={handleRemove}
                type="button"
              >
                <X className="h-4 w-4" />
              </Button>
            )}

            {/* Success indicator */}
            {success && !isUploading && (
              <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-md rounded-full p-1.5 text-green-500 shadow-sm">
                <CheckCircle className="h-5 w-5" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-muted-foreground">
            {accept.includes("video") ? (
              <Video className="w-10 h-10 mb-3 text-muted-foreground/60" />
            ) : accept.includes("image") ? (
              <ImageIcon className="w-10 h-10 mb-3 text-muted-foreground/60" />
            ) : (
              <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground/60" />
            )}
            <p className="mb-2 text-sm font-semibold">
              <span className="text-primary">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-muted-foreground/80">
              {accept.replace(/\/\*/g, "").toUpperCase().replace(/,/g, " or ")} (MAX. {maxSizeMB}MB)
            </p>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center text-sm text-destructive mt-2">
          <AlertCircle className="w-4 h-4 mr-1.5" />
          {error}
        </div>
      )}
    </div>
  );
}
