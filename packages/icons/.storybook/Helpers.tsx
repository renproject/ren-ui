import styled from "@emotion/styled";
import { Story } from "@storybook/react";

export const IconDescription = styled("div")`
  text-align: center;
  color: #555;
`;

export const IconWrapper = styled("div")`
  margin: 8px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > svg {
    margin: 8px;
  }
`;

export const AllIconsTemplate: Story<any> = ({ data, ...args }) => {
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

export const iconSizeControl = {
  control: { type: "range", min: 4, max: 256, step: 1 },
};
