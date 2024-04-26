import { Box } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLangStyle } from "../../hooks/useStyle";

type FormInputProps = {
  labelKey: string;
} & TextFieldProps;

const FormInput: React.FC<FormInputProps> = ({
  labelKey,
  ...textFieldProps
}) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography
        component={"label"}
        color={"text.secondary"}
        display={"block"}
        mb={0.5}
      >
        <Typography component={"span"} variant="subtitle2">
          {t(labelKey)}
        </Typography>
        {(textFieldProps.required || false) && <sup>*</sup>}
      </Typography>
      <TextField
        inputProps={{ dir: useLangStyle("rtl", "ltr") }}
        FormHelperTextProps={{
          style: { textAlign: "start" },
        }}
        {...textFieldProps}
        // sx={{
        //   "& .MuiSelect-nativeInput": {
        //     top: 0,
        //     opacity: textFieldProps.select && textFieldProps.value ? 0 : 1,
        //     px: 2,
        //     bgcolor: "transparent",
        //   },
        // }}
      />
    </Box>
  );
};

export default FormInput;
