import { createTheme } from "@mui/material";

export const themes = {
  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#bb86fc', dark: '#ab55ec', light: '#cba6fe' },
      secondary: { main: '#03dac6', dark: '#03caa6', light: '#33ede6' },
      error: { main: '#cf6679', dark: '#b53f54', light: '#db8ca1' },
      warning: { main: '#ffab00', dark: '#c87c00', light: '#ffc247' },
      info: { main: '#03a9f4', dark: '#0276aa', light: '#35baf6' },
      success: { main: '#4caf50', dark: '#357a38', light: '#6fbf73' },
      background: { default: '#121212', paper: '#1e1e1e' },
      text: { primary: '#ffffff', secondary: '#a0a0a0' },
    },
  }),
  luxury: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#9b27af', dark: '#7b1fa2', light: '#e1bee7' },
      secondary: { main: '#ede7f6', dark: '#d1c4e9', light: '#b39ddb' },
      error: { main: '#e57373', dark: '#af4448', light: '#ffa4a2' },
      warning: { main: '#ffb74d', dark: '#c88719', light: '#ffe97d' },
      info: { main: '#64b5f6', dark: '#2286c3', light: '#9be7ff' },
      success: { main: '#81c784', dark: '#519657', light: '#b2fab4' },
      background: { default: '#2d283e', paper: '#443f56' },
      text: { primary: '#ffffff', secondary: '#dcd0ff' },
    },
  }),
  halloween: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ff5722', dark: '#e6410d', light: '#ff784e' },
      secondary: { main: '#795548', dark: '#5d4037', light: '#9e786c' },
      error: { main: '#f44336', dark: '#d32f2f', light: '#ef5350' },
      warning: { main: '#ffa726', dark: '#f57c00', light: '#ffb74d' },
      info: { main: '#29b6f6', dark: '#0086c3', light: '#73e8ff' },
      success: { main: '#66bb6a', dark: '#388e3c', light: '#98ee99' },
      background: { default: '#333333', paper: '#424242' },
      text: { primary: '#ffffff', secondary: '#ffe0b2' },
    },
  }),
  light: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#4fc3f7', dark: '#2ab6f3', light: '#73d5fc' },
      secondary: { main: '#f06292', dark: '#d0567c', light: '#f381a6' },
      error: { main: '#e57373', dark: '#af4448', light: '#ffa4a2' },
      warning: { main: '#ffb74d', dark: '#c88719', light: '#ffe97d' },
      info: { main: '#29b6f6', dark: '#0288d1', light: '#58d3f7' },
      success: { main: '#81c784', dark: '#519657', light: '#b2fab4' },
      background: { default: '#ffffff', paper: '#f3f4f6' },
      text: { primary: '#575757', secondary: '#747474' },
    },
  }),
  cupcake: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#f48fb1', dark: '#d07a95', light: '#f6a9bc' },
      secondary: { main: '#ffccbc', dark: '#cba79e', light: '#ffe5d5' },
      error: { main: '#ef9a9a', dark: '#ba6b6c', light: '#ffcccb' },
      warning: { main: '#ffb74d', dark: '#ff8c00', light: '#ffa726' },
      info: { main: '#4fc3f7', dark: '#039be5', light: '#81d4fa' },
      success: { main: '#a5d6a7', dark: '#75a478', light: '#d7ffd9' },
      background: { default: '#fdf1f4', paper: '#ffebee' },
      text: { primary: '#5d4037', secondary: '#757575' },
    },
  }),
  valentine: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#ec407a', dark: '#b71c5e', light: '#f06292' },
      secondary: { main: '#f48fb1', dark: '#bf5f82', light: '#f7a9c4' },
      error: { main: '#f06292', dark: '#d81b60', light: '#ff6090' },
      warning: { main: '#ffab91', dark: '#ff8a65', light: '#ffccbc' },
      info: { main: '#64b5f6', dark: '#2286c3', light: '#90caf9' },
      success: { main: '#aed581', dark: '#7da453', light: '#dce775' },
      background: { default: '#fce4ec', paper: '#fff1f8' },
      text: { primary: '#6a1b9a', secondary: '#ad1457' },
    },
  }),
};
