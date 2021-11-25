import { ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const LightThemeProvider: FunctionComponent = (props) => (
  <ThemeProvider theme={lightTheme} {...props} />
);

export const DarkThemeProvider: FunctionComponent = (props) => (
  <ThemeProvider theme={darkTheme} {...props} />
);
