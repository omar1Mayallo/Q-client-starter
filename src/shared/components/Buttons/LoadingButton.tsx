import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";

interface LoadingButtonProps extends ButtonProps {
  label: string;
  isLoading: boolean;
  loadingText?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  label,
  isLoading,
  loadingText: loadingTextProp,
  ...buttonProps
}) => {
  const { t } = useTranslation();
  const loadingText = loadingTextProp || t("loading", { ns: "labels" });

  return (
    <Button
      variant="contained"
      fullWidth
      disabled={isLoading}
      endIcon={isLoading && <CircularProgress size={15} color="inherit" />}
      {...buttonProps}
    >
      {isLoading ? loadingText : label}
    </Button>
  );
};

export default LoadingButton;
