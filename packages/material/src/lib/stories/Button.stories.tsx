import { Button, ButtonProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";
// import "./All";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    color: "primary",
    size: "medium",
    variant: "text",
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    color: {
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary: Story<ButtonProps> = Default.bind({});
// Primary.args = {
//   color: "primary",
// };
