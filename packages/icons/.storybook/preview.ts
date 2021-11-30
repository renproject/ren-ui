// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { backgroundDark, backgroundLight } from "../../material/src";

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
