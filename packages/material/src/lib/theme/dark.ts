import { createTheme } from "@mui/material/styles";
import {
  primaryDark,
  secondaryDark,
  textPrimaryDark,
  textPrimaryLight,
  textSecondaryDark,
  textSecondaryLight,
} from "./colors";

export const darkTheme = createTheme({
  palette: {
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
  },
});
