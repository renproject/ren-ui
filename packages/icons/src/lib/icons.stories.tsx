import styled from "@emotion/styled";
import { Story, Meta } from "@storybook/react";
import * as Icons from "./icons";

export default {
  title: "Token Icons",
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

const Wrapper = styled("div")`
  margin: 8px;
  display: inline-flex;
  flex-direction: column;
  > svg {
    margin: 8px;
  }
`;

const Description = styled("div")`
  text-align: center;
`;

const AllIconsStory: Story<any> = ({ data, ...args }) => {
  return (
    <div>
      {data.map(([name, Icon]: [string, any]) => (
        <Wrapper>
          <Icon key={name} title={name} {...args} />
          <Description>{name}</Description>
        </Wrapper>
      ))}
    </div>
  );
};

export const All = AllIconsStory.bind({});
All.args = {
  width: 64,
  height: 64,
  data: Object.entries(Icons),
};
