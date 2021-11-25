import { CircularProgress, CircularProgressProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { CircularProgressR } from "./ButtonReExported";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
  args: {
    children: "CircularProgress",
  },
} as Meta<CircularProgressProps>;

export const Default = (args: CircularProgressProps) => (
  <CircularProgress {...args} />
);

// export const Primary: Story<CircularProgressProps> = Default.bind({});
// Primary.args = {
//   color: "primary",
// };
