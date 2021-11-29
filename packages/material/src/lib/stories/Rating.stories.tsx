import { Rating, RatingProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Components/Rating",
  component: Rating,
} as Meta;

export const Default: Story<RatingProps> = (args) => <Rating {...args} />;
