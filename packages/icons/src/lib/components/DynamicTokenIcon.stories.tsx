import { Meta, Story } from "@storybook/react";
import { DynamicTokenIcon } from "./DynamicTokenIcon";

export default {
  title: "Components/DynamicTokenIcon",
  component: DynamicTokenIcon,
} as Meta;

export const Default: Story = ({ args }) => <DynamicTokenIcon {...args} />;
