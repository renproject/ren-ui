import { Button, ButtonProps } from "@mui/material";
import React, { FunctionComponent } from "react";

import { Story, Meta } from "@storybook/react";
import { TypographyReExported, ButtonExtended } from "./ButtonExtended";

export default {
  title: "Components/Bar",
  component: TypographyReExported,
  // argTypes: ButtonProps,
} as Meta;

export const Primary = () => (
  <TypographyReExported variant="h1">aaa</TypographyReExported>
);
