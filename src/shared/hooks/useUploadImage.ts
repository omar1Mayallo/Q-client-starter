import { useState, useRef, ChangeEvent, MutableRefObject } from "react";
import { toastError } from "../components/Toasts";
import { Buffer } from "buffer";

export interface useUploadImageResult {
  selectedFile: File | null;
  imagePreviewUrl: string | null;
  fileInputRef: MutableRefObject<HTMLInputElement | null>;
  handleUploadImg: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteSelectedImage: () => void;
  isLoading: boolean;
}

const useUploadImage = (defaultImg: Buffer | null): useUploadImageResult => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(
    defaultImg
      ? `data:image/png;base64,${Buffer.from(defaultImg).toString("base64")}`
      : null,
  );

  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      setIsLoading(true);
      reader.onloadstart = () => {
        // Handle the start of the file read operation
      };

      reader.onload = (event) => {
        setImagePreviewUrl(event.target?.result as string);
        setSelectedFile(file);
        setIsLoading(false);
      };

      reader.onerror = (error) => {
        toastError(`Error reading file: ${error}`);
        setIsLoading(false);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDeleteSelectedImage = () => {
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl(null);
    }
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return {
    isLoading,
    selectedFile,
    imagePreviewUrl,
    fileInputRef,
    handleUploadImg,
    handleDeleteSelectedImage,
  };
};

export default useUploadImage;
