import { useMemo } from "react";
import {
  createTheme,
  ThemeProvider as ColorThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeStore } from "../store/theme.store";

const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const mode = useThemeStore((s) => s.themeType);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#3498db",
            dark: "#2980b9",
            light: "#85c1e9",
          },
          secondary: {
            main: "#e74c3c",
            dark: "#c0392b",
            light: "#f1948a",
          },
          error: {
            main: "#e74c3c",
            dark: "#c0392b",
            light: "#f1948a",
          },
          warning: {
            main: "#f39c12",
            dark: "#d35400",
            light: "#f5d76e",
          },
          info: {
            main: "#3498db",
            dark: "#2980b9",
            light: "#85c1e9",
          },
          success: {
            main: "#2ecc71",
            dark: "#27ae60",
            light: "#82e0aa",
          },
          background: {
            default: mode === "light" ? "#ecf0f1" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1E1E1E",
          },
          text: {
            primary: mode === "light" ? "#34495e" : "#ffffff",
            secondary: mode === "light" ? "#7f8c8d" : "#a0a0a0",
          },
        },
      }),
    [mode],
  );

  return (
    <ColorThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ColorThemeProvider>
  );
};

export default ThemeProvider;
