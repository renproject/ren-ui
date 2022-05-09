import createPalette from "@mui/material/styles/createPalette";
import {
  dividerDark,
  dividerLight,
  primaryDark,
  primaryLight,
  secondaryDark,
  secondaryLight,
  textPrimaryDark,
  textPrimaryLight,
  textSecondaryDark,
  textSecondaryLight,
} from "./colors";

export const lightPalette = createPalette({
  mode: "light",
  primary: {
    main: primaryLight,
  },
  secondary: {
    main: secondaryLight,
  },
  text: {
    primary: textPrimaryLight,
    secondary: textSecondaryLight,
  },
  divider: dividerLight,
});

export const darkPalette = createPalette({
  mode: "dark",
  primary: {
    main: primaryDark,
  },
  secondary: {
    main: secondaryDark,
  },
  text: {
    primary: textPrimaryDark,
    secondary: textSecondaryDark,
  },
  divider: dividerDark,
});
