import { Button, ButtonProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";
import "./All";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary: Story<ButtonProps> = Default.bind({});
// Primary.args = {
//   color: "primary",
// };
