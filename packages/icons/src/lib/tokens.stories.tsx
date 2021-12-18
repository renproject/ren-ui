import { Meta } from "@storybook/react";
import { AllIconsTemplate } from "../../.storybook/Helpers";
// import * as WrappedIcons from "./tokens/wrapped";
import * as NativeIcons from "./tokens/native";

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

// const AllIconsStory: Story<any> = ({ data, ...args }) => {
//   const { size, ...props } = args;
//   return (
//     <div>
//       {data.map(([name, Icon]: [string, any]) => (
//         <IconWrapper key={name}>
//           <Icon title={name} width={size} height={size} {...props} />
//           <IconDescription>{name}</IconDescription>
//         </IconWrapper>
//       ))}
//     </div>
//   );
// };

// export const Wrapped = AllIconsTemplate.bind({});
// Wrapped.args = {
//   size: 64,
//   data: Object.entries(WrappedIcons),
// };

export const Native = AllIconsTemplate.bind({});
Native.args = {
  size: 64,
  data: Object.entries(NativeIcons),
};
