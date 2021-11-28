import { ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import { darkTheme, lightTheme } from "./themes";

export const LightThemeProvider: FunctionComponent = (props) => (
  <ThemeProvider theme={lightTheme} {...props} />
);

export const DarkThemeProvider: FunctionComponent = (props) => (
  <ThemeProvider theme={darkTheme} {...props} />
);
