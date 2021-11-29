const rootMain = require("../../../.storybook/main");
const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

// StorybookConfig
module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: "webpack5" },
  stories: [
    ...rootMain.stories,
    "../src/lib/**/*.stories.mdx",
    "../src/lib/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [...rootMain.addons, "@nrwl/react/plugins/storybook"],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    return config;
    // add your own webpack tweaks if needed
    // return {
    //   ...config,
    //   resolve: {
    //     ...config.resolve,
    //     alias: {
    //       ...config.resolve.alias,
    //       "@emotion/core": toPath("node_modules/@emotion/react"),
    //       "emotion-theming": toPath("node_modules/@emotion/react"),
    //     },
    //   },
    // };
  },
  // logLevel: "debug",
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // shouldExtractLiteralValuesFromEnum: true,
      // shouldRemoveUndefinedFromOptional: true,
      // savePropValueAsString: true,
      // propFilter: (prop) => {
      //   // console.log(prop.name, prop);
      //   return prop.parent
      //     ? /@material-ui/.test(prop.parent.fileName) ||
      //         !/node_modules/.test(prop.parent.fileName)
      //     : true;
      // },
    },
  },
};
