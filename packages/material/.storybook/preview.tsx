import { CssBaseline } from "@mui/material";
import { forceReRender } from "@storybook/react";

import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";

import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { backgroundDark, backgroundLight, darkTheme, lightTheme } from "../src";

export const parameters = {
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
    // matchers: {
    //   color: /(background|color)$/i,
    //   date: /Date$/,
    // },
  },
  docs: {
    inlineStories: false,
  },
};

const resolveThemeByContextValue = (
  context: any,
  { lightTheme, darkTheme }
) => {
  const value =
    context?.globals?.backgrounds?.value ||
    context?.parameters?.backgrounds?.default;
  if (value === backgroundLight || value === "light") {
    return lightTheme;
  } else if (value === backgroundDark || value === "dark") {
    return darkTheme;
  } else {
    console.error(
      "Error: Backgrounds not synced with Mui Theme. Defaulting to light theme."
    );
    return lightTheme;
  }
};

// const rerender = 0;
const WithThemeProvider = (Story, context) => {
  const [theme, setTheme] = useState(
    resolveThemeByContextValue(context, { lightTheme, darkTheme })
  );

  useEffect(() => {
    setTheme(resolveThemeByContextValue(context, { lightTheme, darkTheme }));
  }, [context?.globals?.backgrounds?.value]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const interval = setInterval(() => {
        import("../src/lib/theme/themes").then(({ darkTheme, lightTheme }) => {
          const resolvedTheme = resolveThemeByContextValue(context, {
            lightTheme,
            darkTheme,
          });
          if (theme !== resolvedTheme) {
            console.info("Updating Theme:", resolvedTheme.type);
            setTheme(resolvedTheme);
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [theme, context?.globals?.backgrounds?.value]);

  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

if (module["hot"]) {
  module["hot"].accept();
  module["hot"].dispose(() => {
    return;
  });
}

export const decorators = [WithThemeProvider];
