import React from "react";
import "@fontsource/ibm-plex-sans";
import "@fontsource/lora";
import "@fontsource/roboto";

import {
  MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import BaseRouter from "./pages/BaseRouter";

import styles from "./App.module.scss";

let theme = createTheme({
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
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.AppContent}>
        <BaseRouter />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
