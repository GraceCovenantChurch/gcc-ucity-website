import "@fontsource/ibm-plex-sans";
import "@fontsource/lora";
import "@fontsource/roboto";

import { responsiveFontSizes, createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = responsiveFontSizes(
  createTheme({
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
  })
);

export default theme;
