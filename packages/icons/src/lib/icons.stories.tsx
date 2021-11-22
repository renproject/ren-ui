import { Story, Meta } from "@storybook/react";
import { RenBtc } from "./icons";

export default {
  component: RenBtc,
  title: "RenBtc",
} as Meta;

const Template: Story<any> = (args) => <RenBtc {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Ren Icon",
};
