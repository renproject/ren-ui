import { Story, Meta } from "@storybook/react";
import { IconDescription, IconWrapper } from "../../.storybook/Helpers";
import * as Icons from "./chains";

export default {
  title: "Chain Icons",
  argTypes: {
    size: {
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
  const { size, ...props } = args;
  return (
    <div>
      {data.map(([name, Icon]: [string, any]) => (
        <IconWrapper key={name}>
          <Icon title={name} width={size} height={size} {...props} />
          <IconDescription>{name}</IconDescription>
        </IconWrapper>
      ))}
    </div>
  );
};

export const All = AllIconsStory.bind({});
All.args = {
  size: 64,
  data: Object.entries(Icons),
};
