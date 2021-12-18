import { Meta } from "@storybook/react";
import { AllIconsTemplate, iconSizeControl } from "../../.storybook/Helpers";
import * as Icons from "./wallets";

export default {
  title: "Icons/Wallet Icons",
  argTypes: {
    size: iconSizeControl,
    data: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const All = AllIconsTemplate.bind({});
All.args = {
  size: 64,
  data: Object.entries(Icons),
};
