import createPalette from "@mui/material/styles/createPalette";
import {
  primaryDark,
  primaryLight,
  secondaryDark,
  secondaryLight,
  textPrimaryDark,
  textPrimaryLight,
  textSecondaryDark,
  textSecondaryLight,
} from "./colors";

const color = primaryDark;
// const color = secondaryDark;

export const lightPalette = createPalette({
  mode: "light",
  primary: {
    main: color,
  },
  secondary: {
    main: secondaryLight,
  },
  text: {
    primary: textPrimaryLight,
    secondary: textSecondaryLight,
  },
});

export const darkPalette = createPalette({
  mode: "dark",
  primary: {
    main: secondaryDark,
  },
  secondary: {
    main: secondaryDark,
  },
  text: {
    primary: textPrimaryDark,
    secondary: textSecondaryDark,
  },
});
