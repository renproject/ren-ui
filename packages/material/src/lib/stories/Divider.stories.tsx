import { Divider, DividerProps, Typography } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { createExternalMuiComponentDoc } from "./helpers/ExternalDoc";

export default {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    docs: {
      page: createExternalMuiComponentDoc("divider"),
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Default: Story<DividerProps> = (args) => (
  <div>
    <Typography variant="body1">Upper content</Typography>
    <Divider {...args} />
    <Typography variant="body2">Lower content</Typography>
  </div>
);
