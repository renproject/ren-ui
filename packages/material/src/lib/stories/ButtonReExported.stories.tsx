import { Button, ButtonProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { ButtonReExported } from "./ButtonReExported";

export default {
  title: "Components/ButtonReExported",
  component: ButtonReExported,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Dynamic = Template.bind({});

Dynamic.args = {
  children: "Content",
};
