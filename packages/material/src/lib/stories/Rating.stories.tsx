import { Rating, RatingProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Components/Rating",
  component: Rating,
} as Meta<RatingProps>;

export const Default: Story<RatingProps> = (args: RatingProps) => (
  <Rating {...args} />
);
