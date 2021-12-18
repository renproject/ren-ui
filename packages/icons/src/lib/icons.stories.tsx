import { Story, Meta } from "@storybook/react";
import { IconDescription, IconWrapper } from "../../.storybook/Helpers";
import * as Icons from "./icons";

export default {
  title: "Token Icons",
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
      <div>
        {data
          .filter(([name]: [string]) => !name.startsWith("Ren"))
          .map(([name, Icon]: [string, any]) => (
            <IconWrapper key={name}>
              <Icon title={name} width={size} height={size} {...props} />
              <IconDescription>{name}</IconDescription>
            </IconWrapper>
          ))}
      </div>
      <div>
        {data
          .filter(([name]: [string]) => name.startsWith("Ren"))
          .map(([name, Icon]: [string, any]) => (
            <IconWrapper key={name}>
              <Icon title={name} width={size} height={size} {...props} />
              <IconDescription>{name}</IconDescription>
            </IconWrapper>
          ))}
      </div>
    </div>
  );
};

export const All = AllIconsStory.bind({});
All.args = {
  size: 64,
  // width: 64,
  // height: 64,
  data: Object.entries(Icons),
};
