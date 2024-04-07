import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { ThemeTypeE, useThemeStore } from "../../../../store/theme.store";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ThemeIcon() {
  const { toggleTheme, themeType } = useThemeStore();
  const { t } = useTranslation(["layout"]);
  return (
    <Tooltip
      title={
        themeType === ThemeTypeE.DARK
          ? t("SWITCH_TO_LIGHT_THEME")
          : t("SWITCH_TO_DARK_THEME")
      }
    >
      <IconButton onClick={toggleTheme} color="inherit">
        {themeType === ThemeTypeE.DARK ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
}
