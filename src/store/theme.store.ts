import { create } from "zustand";
import Cookies from "js-cookie";

export enum ThemeTypeE {
  DARK = "dark",
  LIGHT = "light",
}

interface ThemeStateI {
  themeType: ThemeTypeE;
  toggleTheme: () => void;
  setTheme: (theme: ThemeTypeE) => void;
}

const getStoredThemeType = () => Cookies.get("themeType") as ThemeTypeE;

export const useThemeStore = create<ThemeStateI>((set) => ({
  themeType: getStoredThemeType() || ThemeTypeE.LIGHT,
  setTheme: (theme: ThemeTypeE) => {
    set({ themeType: theme });
    Cookies.set("themeType", theme);
  },
  toggleTheme: () => {
    set((state) => {
      const newThemeType =
        state.themeType === ThemeTypeE.LIGHT
          ? ThemeTypeE.DARK
          : ThemeTypeE.LIGHT;
      Cookies.set("themeType", newThemeType);
      return { themeType: newThemeType };
    });
  },
}));
