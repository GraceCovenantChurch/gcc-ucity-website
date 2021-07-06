import React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import BaseRouter from "./pages/BaseRouter";

import styles from "./App.module.scss";

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "IBM Plex Sans",
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

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.App}>
        <div className={styles.AppContent}>
          <BaseRouter />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
