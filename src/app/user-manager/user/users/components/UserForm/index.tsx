import { CameraAlt, Delete } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import FormInput from "../../../../../../shared/components/Inputs/FormInput";
import i18next from "i18next";

import MUIPhoneNumberInput from "../../../../../../shared/components/Inputs/MUIPhoneNumberInput";
import { MuiTelInputInfo } from "mui-tel-input";
import SelectInput, {
  OptionType,
} from "../../../../../../shared/components/Inputs/SelectInput";

interface FormDataT {
  email: string;
  username: string;
  password: string;
  type: string;
  status: boolean;
  roles: string[];
  phone: string;
}

const UserForm = () => {
  const [formData, setFormData] = useState<FormDataT>({
    email: "",
    username: "",
    password: "",
    type: "",
    status: false,
    roles: [],
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    // console.log(formData);
  };

  const [selectedFile, setSelectedFile] = useState<string | undefined>();
  const handleUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setSelectedFile(e.target?.result as string);
    };
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleDeleteSelectedImage = () => {
    setSelectedFile(undefined);
    // !DESC: This Fixing Problem of when delete image can select the same img again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChangePhone = (_: string, info: MuiTelInputInfo) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: info.numberValue!,
    }));
  };

  const typeOptions = [
    { label: "Administrative", value: "ADMINISTRATIVE" },
    { label: "Portal", value: "PORTAL" },
    { label: "Service Provider", value: "SERVICE_PROVIDER" },
  ];
  const handleSelectTypes = (
    _: React.SyntheticEvent<Element, Event>,
    selectedItem: OptionType<string> | null,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      type: selectedItem ? selectedItem.value : "",
    }));
  };

  const roleOptions = [
    { label: "User", value: "USER" },
    { label: "Admin", value: "ADMIN" },
    { label: "Editor", value: "EDITOR" },
    { label: "عرض فقط", value: "VIEWER" },
    { label: "Custom Role", value: "CUSTOM" },
  ];
  const handleSelectRoles = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: OptionType<string>[] | null,
  ) => {
    const selectedRoles = newValue ? newValue.map((item) => item.value) : [];
    setFormData((prevData) => ({
      ...prevData,
      roles: selectedRoles,
    }));
  };

  return (
    <Box mt={5}>
      <Paper sx={{ width: "100%" }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container p={2.5}>
            {/* AVATAR */}
            <Grid item xs={12} lg={3}>
              <Box className="flex_center flex-col gap-1">
                <Box className="relative w-fit">
                  {selectedFile ? (
                    <PhotoProvider maskOpacity={0.9}>
                      <PhotoView src={selectedFile as string}>
                        <Avatar
                          alt="Avatar"
                          sx={{
                            cursor: "pointer",
                            width: 170,
                            height: 170,
                            border: (theme) =>
                              `4px solid ${
                                theme.palette.mode === "dark"
                                  ? theme.palette.grey[800]
                                  : "#fff"
                              }`,
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
                          }}
                          src={selectedFile}
                        />
                      </PhotoView>
                    </PhotoProvider>
                  ) : (
                    <Avatar
                      alt="Avatar"
                      sx={{
                        cursor: "pointer",
                        width: 170,
                        height: 170,
                        border: (theme) =>
                          `4px solid ${
                            theme.palette.mode === "dark"
                              ? theme.palette.grey[800]
                              : "#fff"
                          }`,
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
                      }}
                    />
                  )}

                  {/* UPLOAD_BUTTON */}
                  <label htmlFor="upload-image-input">
                    <Tooltip title={i18next.t("changeImg")} arrow>
                      <Button
                        variant="text"
                        component="span"
                        sx={{
                          minWidth: "45px",
                          borderRadius: "100%",
                          position: "absolute",
                          width: "45px",
                          height: "45px",
                          bottom: 5,
                          left: 0,
                          transition: "all 0.3s",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 1)",
                          },
                        }}
                      >
                        <CameraAlt sx={{ fontSize: "20px", color: "#fff" }} />
                      </Button>
                    </Tooltip>
                  </label>
                  <input
                    ref={fileInputRef}
                    accept="image/*"
                    className={"hidden"}
                    id="upload-image-input"
                    type="file"
                    onChange={handleUploadClick}
                  />

                  {/* REMOVE_BUTTON */}
                  {selectedFile && (
                    <Tooltip title={i18next.t("removeImg")} arrow>
                      <Button
                        onClick={handleDeleteSelectedImage}
                        variant="text"
                        component="span"
                        sx={{
                          minWidth: "45px",
                          borderRadius: "100%",
                          position: "absolute",
                          width: "45px",
                          height: "45px",
                          bottom: 5,
                          right: 0,
                          transition: "all 0.3s",
                          backgroundColor: (theme) =>
                            theme.palette.error.main + "B3",
                          "&:hover": {
                            backgroundColor: (theme) =>
                              theme.palette.error.main,
                          },
                        }}
                      >
                        <Delete sx={{ fontSize: "20px", color: "#fff" }} />
                      </Button>
                    </Tooltip>
                  )}
                </Box>

                <Typography
                  mb={0}
                  component={"h3"}
                  variant="subtitle1"
                  textAlign={"center"}
                >
                  Omar Mayallo
                </Typography>
                <Typography
                  mb={0}
                  variant="caption"
                  textAlign={"center"}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "dark"
                        ? theme.palette.grey[400]
                        : theme.palette.grey[600],
                  }}
                >
                  super-admin@gmail.com
                </Typography>
              </Box>
            </Grid>

            {/* FORM_INPUTS */}
            <Grid item xs={12} lg={9}>
              <Grid container columnSpacing={3} rowSpacing={2}>
                {/* Email */}
                <Grid item xs={12} lg={6}>
                  <FormInput
                    fullWidth
                    labelKey={i18next.t("email")}
                    placeholder={i18next.t("email")}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Username */}
                <Grid item xs={12} lg={6}>
                  <FormInput
                    fullWidth
                    labelKey={i18next.t("username")}
                    placeholder={i18next.t("username")}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12} lg={6}>
                  <FormInput
                    fullWidth
                    labelKey={i18next.t("password")}
                    placeholder={i18next.t("password")}
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Type */}
                <Grid item xs={12} lg={6}>
                  <SelectInput<string>
                    options={typeOptions}
                    labelKey={i18next.t("type")}
                    placeholder={i18next.t("type")}
                    required
                    value={formData.type}
                    onChange={handleSelectTypes}
                  />
                </Grid>

                {/* Roles */}
                <Grid item xs={12} lg={6}>
                  <SelectInput<string>
                    options={roleOptions}
                    labelKey={i18next.t("roles")}
                    placeholder={i18next.t("roles")}
                    required
                    value={formData.roles}
                    onChange={handleSelectRoles}
                    multiple
                  />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} lg={6}>
                  <MUIPhoneNumberInput
                    value={formData.phone}
                    handleChange={handleChangePhone}
                    fullWidth
                    labelKey={i18next.t("phone")}
                    placeholder={i18next.t("phone")}
                    required
                  />
                </Grid>

                {/* Switches */}
                <Grid item xs={12} lg={6} className="flex flex-row gap-2">
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label={i18next.t("status")}
                    color="success"
                    required
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label={i18next.t("loginWithOTP")}
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box textAlign={"center"} pb={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: "10px", width: 250 }}
            >
              {i18next.t("SAVE")}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserForm;
