import { CircularProgress, CircularProgressProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
  args: {
    children: "CircularProgress",
  },
} as Meta;

export const Default: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
);

// export const Primary: Story<CircularProgressProps> = Default.bind({});
// Primary.args = {
//   color: "primary",
// };
