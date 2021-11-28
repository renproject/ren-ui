import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palettes";

const components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
  },
};

export const lightTheme = createTheme({
  palette: lightPalette,
  components,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  components,
});
