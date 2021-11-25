import { CssBaseline } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { backgroundDark, backgroundLight, darkTheme, lightTheme } from "../src";

import { Theme, ThemeProvider } from "@mui/material/styles";

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: backgroundLight,
      },
      {
        name: "dark",
        value: backgroundDark,
      },
    ],
  },
};

const resolveThemeByBackgroundValue = (value: string) => {
  if (value === backgroundLight || value === "light") {
    return lightTheme;
  } else if (value === backgroundDark || value === "dark") {
    return darkTheme;
  } else {
    console.error(
      "Error: Backgrounds not synced with Mui Theme. Defaulting to light"
    );
    return lightTheme;
  }
};

const withThemeProvider = (Story, context) => {
  console.log(context);
  const theme = resolveThemeByBackgroundValue(
    context?.globals?.backgrounds?.value ||
      context?.parameters?.backgrounds?.default
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
