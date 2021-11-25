import { Button, ButtonProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";

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
