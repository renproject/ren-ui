import { Story, Meta } from "@storybook/react";
import { AllIconsTemplate, iconSizeControl } from "../../.storybook/Helpers";
import * as Icons from "./chains";

export default {
  title: "Icons/Chain Icons",
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
