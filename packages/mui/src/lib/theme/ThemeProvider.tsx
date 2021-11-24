import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const LightThemeProvider = () => <ThemeProvider theme={lightTheme} />;

export const DarkThemeProvider = () => <ThemeProvider theme={darkTheme} />;
