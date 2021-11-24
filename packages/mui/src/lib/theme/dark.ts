import { createTheme } from "@mui/material/styles";
import { primaryDark, secondaryDark } from "./colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: primaryDark,
    },
    secondary: {
      main: secondaryDark,
    },
  },
});
