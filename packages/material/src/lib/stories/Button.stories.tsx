import { Box, Button, ButtonProps } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { createExternalDoc } from "./helpers/ExternalDoc";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      page: createExternalDoc("https://example.com"),
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;
Default.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  variant: "text",
  disabled: false,
  fullWidth: false,
};
Default.argTypes = {
  variant: {
    options: ["contained", "outlined", "text"],
    control: {
      type: "radio",
    },
  },
  size: {
    options: ["small", "medium", "large"],
    control: {
      type: "radio",
    },
  },
  color: {
    options: [
      "inherit",
      "primary",
      "secondary",
      "success",
      "error",
      "info",
      "warning",
    ],
    control: {
      type: "select",
    },
  },
};

export const VariantsAndSizes: Story = () => (
  <Box sx={{ "& button": { m: 1 } }}>
    <div>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
    <div>
      <Button variant="outlined" size="small">
        Small
      </Button>
      <Button variant="outlined" size="medium">
        Medium
      </Button>
      <Button variant="outlined" size="large">
        Large
      </Button>
    </div>
    <div>
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        Medium
      </Button>
      <Button variant="contained" size="large">
        Large
      </Button>
    </div>
  </Box>
);
