import { Button, ButtonProps } from "@mui/material";
import React from "react";

import { Story, Meta } from "@storybook/react";

export default {
  component: Button,
  title: "Components/Button",
  // argTypes: ButtonProps,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
};
