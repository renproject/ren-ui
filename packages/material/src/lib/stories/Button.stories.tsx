import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";

const Button = MuiButton;
type ButtonProps = MuiButtonProps;

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta<ButtonProps>;

export const Default = (args: ButtonProps) => <Button {...args} />;

// export const Primary: Story<ButtonProps> = Default.bind({});
// Primary.args = {
//   color: "primary",
// };
