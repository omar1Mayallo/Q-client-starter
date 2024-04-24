import { CameraAlt, Delete } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import FormInput from "../../../../../../../shared/components/Inputs/FormInput";
import i18next from "i18next";

import MUIPhoneNumberInput from "../../../../../../../shared/components/Inputs/MUIPhoneNumberInput";
import { MuiTelInputInfo } from "mui-tel-input";

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    type: "",
    status: "",
    roles: "",
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

  const [phone, setPhone] = React.useState("");
  const handleChangePhone = (_: string, info: MuiTelInputInfo) => {
    setPhone(info.numberValue!);
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
                    <Tooltip
                      title={i18next.t("changeImg", { ns: "labels" })}
                      arrow
                    >
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
                    <Tooltip
                      title={i18next.t("removeImg", { ns: "labels" })}
                      arrow
                    >
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
                    labelKey={i18next.t("email", { ns: "labels" })}
                    placeholder={i18next.t("email", { ns: "labels" })}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    isRequired
                  />
                </Grid>

                {/* Username */}
                <Grid item xs={12} lg={6}>
                  <FormInput
                    fullWidth
                    labelKey={i18next.t("username", { ns: "labels" })}
                    placeholder={i18next.t("username", { ns: "labels" })}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    variant="outlined"
                    isRequired
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12} lg={6}>
                  <FormInput
                    fullWidth
                    labelKey={i18next.t("password", { ns: "labels" })}
                    placeholder={i18next.t("password", { ns: "labels" })}
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="outlined"
                    isRequired
                  />
                </Grid>

                {/* Type */}
                <Grid item xs={12} lg={6}>
                  <FormInput
                    fullWidth
                    labelKey={i18next.t("type", { ns: "labels" })}
                    placeholder={i18next.t("type", { ns: "labels" })}
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    variant="outlined"
                    isRequired
                    select
                  >
                    <MenuItem value="admin">Administritive</MenuItem>
                    <MenuItem value="user">Portal</MenuItem>
                  </FormInput>
                </Grid>

                {/* Roles */}
                <Grid item xs={12} lg={6}>
                  <FormInput
                    fullWidth
                    labelKey={i18next.t("roles", { ns: "labels" })}
                    placeholder={i18next.t("roles", { ns: "labels" })}
                    name="roles"
                    value={formData.roles}
                    onChange={handleChange}
                    variant="outlined"
                    isRequired
                    select
                  >
                    <MenuItem value="admin">Role 1</MenuItem>
                    <MenuItem value="user">Role 2</MenuItem>
                    <MenuItem value="user">Role 3</MenuItem>
                  </FormInput>
                </Grid>

                {/* Phone */}
                <Grid item xs={12} lg={6}>
                  <MUIPhoneNumberInput
                    value={phone}
                    handleChange={handleChangePhone}
                    fullWidth
                    labelKey={i18next.t("phone", { ns: "labels" })}
                    placeholder={i18next.t("phone", { ns: "labels" })}
                    isRequired
                  />
                </Grid>

                {/* Switches */}
                <Grid item xs={12} lg={6} className="flex flex-row gap-2">
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label={i18next.t("status", { ns: "labels" })}
                    color="success"
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label={i18next.t("loginWithOTP", { ns: "labels" })}
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
              {i18next.t("SAVE", { ns: "labels" })}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserForm;
