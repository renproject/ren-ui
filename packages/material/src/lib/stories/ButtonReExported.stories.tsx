import { Button, ButtonProps } from "@mui/material";
import React, { FunctionComponent } from "react";

import { Story, Meta } from "@storybook/react";
import { TypographyReExported, ButtonExtended } from "./ButtonExtended";
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
