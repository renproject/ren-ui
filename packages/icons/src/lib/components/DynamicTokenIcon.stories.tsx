import styled from "@emotion/styled";
import { Meta, Story } from "@storybook/react";
import { Busd, Dai, Eurt, Usdc, Usdt } from "../icons";
import { DynamicTokenIcon, DynamicTokenIconProps } from "./DynamicTokenIcon";

export default {
  title: "Components/DynamicTokenIcon",
  component: DynamicTokenIcon,
  argTypes: {
    size: {
      defaultValue: 64,
      control: { type: "range", min: 4, max: 256, step: 1 },
    },
  },
} as Meta;

export const Default: Story<DynamicTokenIconProps> = (args) => (
  <DynamicTokenIcon {...args} />
);

export const WithIcon = Default.bind({});
WithIcon.args = {
  Icon: Usdt,
};

const Wrapper = styled("div")`
  > * {
    margin: 8px;
  }
`;

export const AllChains: Story<DynamicTokenIconProps> = (args) => {
  return (
    <Wrapper>
      {[Usdc, Usdt, Busd, Dai, Eurt].map((Icon, index) => (
        <DynamicTokenIcon key={index} Icon={Icon} {...args} />
      ))}
    </Wrapper>
  );
};

AllChains.argTypes = {
  Icon: {
    table: {
      disable: true,
    },
  },
};
