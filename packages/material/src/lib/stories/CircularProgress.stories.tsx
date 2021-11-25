import { CircularProgress, CircularProgressProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { CircularProgressR } from "./ButtonReExported";

interface Props extends CircularProgressProps {
  foo: 1;
}

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
  args: {
    children: "CircularProgress",
  },
} as Meta<Props>;

export const Default = ({ foo, ...args }: Props) => (
  <CircularProgress {...args} />
);

// export const Primary: Story<CircularProgressProps> = Default.bind({});
// Primary.args = {
//   color: "primary",
// };
