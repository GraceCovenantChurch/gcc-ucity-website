import React from "react";
import "@fontsource/ibm-plex-sans";
import "@fontsource/lora";
import "@fontsource/roboto";

import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  responsiveFontSizes,
  adaptV4Theme,
} from "@mui/material/styles";

import BaseRouter from "./pages/BaseRouter";

import styles from "./App.module.scss";

let theme = createTheme(adaptV4Theme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "IBM Plex Sans",
      "Lora",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={styles.AppContent}>
          <BaseRouter />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
