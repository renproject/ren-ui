import { createTheme } from "@mui/material/styles";
import { primaryLight, secondaryLight } from "./colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryLight,
    },
    secondary: {
      main: secondaryLight,
    },
  },
});
