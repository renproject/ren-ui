import { Story, Meta } from "@storybook/react";
import * as Icons from "./icons";

export default {
  title: "Ren Token Icons",
  argTypes: {
    width: {
      control: { type: "range", min: 4, max: 256, step: 1 },
    },
    data: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const AllIconsStory: Story<any> = ({ data, ...args }) => {
  return (
    <div>
      {data.map(([name, Icon]: [string, any]) => (
        <Icon key={name} title={name} {...args} />
      ))}
    </div>
  );
};

export const AllTokenIcons = AllIconsStory.bind({});
AllTokenIcons.args = {
  width: 64,
  data: Object.entries(Icons),
};
