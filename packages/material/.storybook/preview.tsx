import { CssBaseline } from "@mui/material";

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

let rerender = 0;
const useThemeProvider = (Story, context) => {
  const [state, setState] = useState(0);

  const [theme, setTheme] = useState(
    resolveThemeByContextValue(context, { lightTheme, darkTheme })
  );
  console.log("Theme Rerender");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(rerender);
      setState(rerender);

      import("../src/lib/theme/themes").then(({ darkTheme, lightTheme }) => {
        console.log(darkTheme.palette.primary.main, lightTheme);
        const resolvedTheme = resolveThemeByContextValue(context, {
          lightTheme,
          darkTheme,
        });
        console.info("updating theme");
        setTheme(resolvedTheme);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [context?.globals?.backgrounds?.value]);

  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <span>
          {state} {rerender}
        </span>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

if (module["hot"]) {
  module["hot"].accept();
  module["hot"].dispose((data) => {
    rerender++;
    console.log(data);
  });
}

/*
Ignored an update to unaccepted module ./packages/material/src/lib/theme/palettes.ts -> ./packages/material/src/lib/theme/themes.ts -> ./packages/material/src/lib/theme.tsx -> ./packages/material/src/index.ts -> ./packages/material/.storybook/preview.tsx -> ./packages/material/.storybook/preview.tsx-generated-config-entry.js
 */

// let hmr = false;
// if (module["hot"] && !hmr) {
//   hmr = true;
//   // module["hot"].accept();
//   module["hot"].accept(["../src"], (deps) => {
//     const conf = import("../src/lib/theme/themes").then(
//       ({ darkTheme, lightTheme }) => {
//         console.log(darkTheme.palette.primary.main, lightTheme);
//       }
//     );
//     console.log("*", deps, conf);
//   });
// }

export const decorators = [useThemeProvider];
