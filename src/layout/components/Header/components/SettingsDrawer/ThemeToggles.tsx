import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { ThemeTypeE, useThemeStore } from "../../../../../store/theme.store";
import { useTranslation } from "react-i18next";
import {
  useLangStyle,
  useThemeStyle,
} from "../../../../../shared/hooks/useStyle";

const ThemeToggles = () => {
  const { setTheme } = useThemeStore();
  const { t } = useTranslation(["layout"]);
  const handleToggleTheme = (nextTheme: ThemeTypeE) => {
    setTheme(nextTheme);
  };

  return (
    <Box className="flex">
      <Button
        sx={{
          borderRadius: useLangStyle("0px 22px 22px 0px", "22px 0px 0px 22px"),
          gap: useLangStyle(1, 0),
        }}
        fullWidth
        onClick={() => handleToggleTheme(ThemeTypeE.DARK)}
        variant={useThemeStyle("outlined", "contained")}
        startIcon={<DarkMode />}
      >
        {t("DARK")}
      </Button>
      <Button
        sx={{
          borderRadius: useLangStyle("22px 0px 0px 22px", "0px 22px 22px 0px"),
          gap: useLangStyle(1, 0),
        }}
        fullWidth
        onClick={() => handleToggleTheme(ThemeTypeE.LIGHT)}
        variant={useThemeStyle("contained", "outlined")}
        startIcon={<LightMode />}
      >
        {t("LIGHT")}
      </Button>
    </Box>
  );
};

export default ThemeToggles;
