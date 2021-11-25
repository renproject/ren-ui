import { createTheme } from "@mui/material/styles";
import {
  primaryLight,
  secondaryLight,
  textPrimaryLight,
  textSecondaryLight,
} from "./colors";

export const lightTheme = createTheme({
  palette: {
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
  },
});
