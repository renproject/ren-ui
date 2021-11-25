import { Button, ButtonProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Dynamic = Template.bind({});

Dynamic.args = {
  children: "Content",
  fullWidth: true,
};

// Dynamic.

// // @ts-ignore not working
// Dynamic.args = Button.defaultProps;

console.log(Button);
