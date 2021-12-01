import { createTheme, ThemeOptions } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palettes";

const components: ThemeOptions["components"] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableFocusRipple: true,
    },
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily: `"SuisseIntl", "Roboto","Helvetica","Arial",sans-serif;`,
};

const shared = {
  components,
  typography,
};

export const lightTheme = createTheme({
  palette: lightPalette,
  ...shared,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  ...shared,
});
