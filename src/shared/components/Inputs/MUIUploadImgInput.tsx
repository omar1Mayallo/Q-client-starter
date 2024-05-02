import { CloudUpload, Delete } from "@mui/icons-material";
import {
  Avatar,
  CircularProgress,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useUploadImageResult } from "../../hooks/useUploadImage";
import FormInput, { FormInputProps } from "./FormInput";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type MUIUploadImgInputProps = Omit<useUploadImageResult, "selectedFile"> &
  FormInputProps;
const MUIUploadImgInput = ({
  fileInputRef,
  handleUploadImg,
  handleDeleteSelectedImage,
  imagePreviewUrl,
  isLoading,
  ...formInputProps
}: MUIUploadImgInputProps) => {
  return (
    <FormInput
      disabled
      placeholder={
        isLoading
          ? "Uploading..."
          : !imagePreviewUrl
            ? "\u00A0\u00A0Allowed: jpg, png, jpeg"
            : undefined
      }
      sx={{ fontSize: "smaller" }}
      InputProps={{
        endAdornment: (
          <Stack direction={"row"} gap={0.5}>
            <IconButton
              color="primary"
              component="label"
              role={undefined}
              tabIndex={-1}
            >
              <CloudUpload />
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleUploadImg}
              />
            </IconButton>
            {imagePreviewUrl && (
              <IconButton color="error" onClick={handleDeleteSelectedImage}>
                <Delete />
              </IconButton>
            )}
          </Stack>
        ),
        startAdornment: (
          <>
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : imagePreviewUrl ? (
              <PhotoProvider maskOpacity={0.9}>
                <PhotoView src={imagePreviewUrl}>
                  <Avatar
                    variant="rounded"
                    sx={{ width: 30, height: 30, cursor: "pointer" }}
                    src={imagePreviewUrl}
                  />
                </PhotoView>
              </PhotoProvider>
            ) : (
              <Avatar variant="rounded" sx={{ width: 30, height: 30 }} />
            )}
          </>
        ),
      }}
      {...formInputProps}
    />
  );
};

export default MUIUploadImgInput;
