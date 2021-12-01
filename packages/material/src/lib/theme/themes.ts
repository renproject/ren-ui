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
  fontFamily: `"SuisseIntl", "Roboto", "Helvetica", "Arial", sans-serif`,
  h1: {
    fontWeight: 900,
    size: 119,
    lineHeight: 130.9 / 119,
  },
  h2: {
    fontWeight: 900,
    size: 95,
    lineHeight: 104.5 / 95,
  },
  h3: {
    fontWeight: 900,
    size: 84,
    lineHeight: 83.6 / 84,
  },
  h4: {
    fontWeight: 900,
    size: 62,
    lineHeight: 68.2 / 62,
  },
  h5: {
    fontWeight: 900,
    size: 49,
    lineHeight: 53.9 / 49,
  },
  h6: {
    fontWeight: 900,
    size: 39,
    lineHeight: 42.9 / 39,
  },
  subtitle1: {
    fontWeight: 400,
    size: 20,
    lineHeight: 24 / 20,
  },
  body1: {
    fontWeight: 400,
    size: 16,
    lineHeight: 22.4 / 16,
  },
  body2: {
    fontWeight: 400,
    size: 14,
    lineHeight: 19.6 / 14,
  },
  button: {
    fontWeight: 700,
    size: 16,
    lineHeight: 17.6 / 16,
  },
  // TODO: missing
  subtitle2: {
    fontWeight: 400,
    size: 18,
    lineHeight: 22 / 18,
  },
  // TODO: missing
  caption: {
    fontWeight: 400,
    size: 18,
    lineHeight: 22 / 18,
  },
  // TODO: missing
  overline: {
    fontWeight: 400,
    size: 18,
    lineHeight: 22 / 18,
  },
};

const shape: ThemeOptions["shape"] = {
  borderRadius: 0,
};

const shared = {
  components,
  typography,
  shape,
};

export const lightTheme = createTheme({
  palette: lightPalette,
  ...shared,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  ...shared,
});
