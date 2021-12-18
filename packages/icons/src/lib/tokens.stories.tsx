import { Meta } from "@storybook/react";
import { AllIconsTemplate, iconSizeControl } from "../../.storybook/Helpers";
import * as WrappedTokenIcons from "./tokens/wrapped";
import * as NativeTokenIcons from "./tokens/native";

export default {
  title: "Icons/Token Icons",
  argTypes: {
    size: iconSizeControl,
    data: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Native = AllIconsTemplate.bind({});
Native.args = {
  size: 64,
  data: Object.entries(NativeTokenIcons),
};

export const Wrapped = AllIconsTemplate.bind({});
Wrapped.args = {
  size: 64,
  data: Object.entries(WrappedTokenIcons),
};
