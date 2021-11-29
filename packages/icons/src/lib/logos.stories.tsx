import { Story, Meta } from "@storybook/react";
import { RenLogoIconLight, RenLogoTextDark } from "./logos";

const argTypes = {
  width: {
    control: { type: "range", min: 10, max: 115, step: 1 },
  },
};

export default {
  title: "Logos",
  argTypes: argTypes,
} as Meta;

export const LogoTextStory: Story = (args) => <RenLogoTextDark {...args} />;
LogoTextStory.args = {
  width: 115,
};

export const LogoWhiteStory: Story = (args) => <RenLogoIconLight {...args} />;
LogoWhiteStory.args = {
  width: 115,
};
