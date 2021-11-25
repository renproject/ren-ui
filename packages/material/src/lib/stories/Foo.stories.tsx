import { Button, ButtonProps } from "@mui/material";
import React, { FunctionComponent } from "react";

import { Story, Meta } from "@storybook/react";
import { ButtonExtended } from "./ButtonExtended";

export default {
  title: "Components/ButtonExtended",
  component: ButtonExtended,
  argTypes: {
    color: ["primary", "secondary"],
  },
} as Meta;

export const Primary = () => <ButtonExtended label="foo" />;
