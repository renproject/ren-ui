import { Meta, Story } from "@storybook/react";
import { useCallback, useState } from "react";
import {
  ChainType,
  DynamicTokenIcon,
  DynamicTokenIconProps,
} from "./DynamicTokenIcon";

export default {
  title: "Components/DynamicTokenIcon",
  component: DynamicTokenIcon,
  argTypes: {
    size: {
      control: { type: "range", min: 4, max: 256, step: 1 },
    },
  },
} as Meta;

export const Default: Story<DynamicTokenIconProps> = (args) => (
  <DynamicTokenIcon {...args} />
);

export const ToggleChain: Story = () => {
  const [chain, setChain] = useState<ChainType>("None");
  const toggleChain = useCallback(() => {
    setChain(chain === "None" ? "Ethereum" : "None");
  }, [chain]);
  return (
    <div>
      <div>
        <DynamicTokenIcon chain={chain} />
      </div>
      <br />
      <button onClick={toggleChain}>Toggle Chain</button>
    </div>
  );
};
