/** @format */
import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4caf50",
  info: "#00a2ff",
  danger: "#ffc107",
  warning: "#ffc107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "dddfe1",
  inverse: "#2f3d4a",
  shaft: "#333",
  //////////
  // Grays
  /////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gary: "rgb(230, 230, 230)",
  ///////////////////////
  // Solid Colors
  //////////////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});
export default theme;
