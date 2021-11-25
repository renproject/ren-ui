import { CssBaseline } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { backgroundDark, backgroundLight, darkTheme, lightTheme } from "../src";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";

import { Theme, ThemeProvider } from "@mui/material/styles";

export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  // layout: "centered",
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  // docs: {
  //   inlineStories: false,
  //   iframeHeight: "700px",
  // },
  actions: { argTypesRegex: "^on[A-Z].*" },
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
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
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
  const theme = resolveThemeByBackgroundValue(
    context?.globals?.backgrounds?.value ||
      context?.parameters?.backgrounds?.default
  );
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
