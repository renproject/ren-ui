import { Button, Paper, Typography } from "@mui/material";
import { Story, Meta } from "@storybook/react";
import { FunctionComponent } from "react";
import { DarkThemeProvider, LightThemeProvider } from "./ThemeProvider";

export default {
  title: "Theme/Providers",
} as Meta;

const Content: FunctionComponent<{ title?: string }> = ({
  title,
  children,
}) => (
  <Paper variant="outlined" sx={{ p: 2, m: 2 }}>
    {title ? <Typography variant="h3">{title}</Typography> : null}
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Typography variant="body1">Text</Typography>
    {children}
  </Paper>
);

export const NestedThemes: Story = () => (
  <div>
    <Content title="Inherited from storybook background">
      <LightThemeProvider>
        <Content title="Nested light">
          <DarkThemeProvider>
            <Content title="Nested dark" />
          </DarkThemeProvider>
        </Content>
      </LightThemeProvider>
    </Content>
  </div>
);

export const Example: Story = () => (
  <Button variant="contained" color="primary">
    Test
  </Button>
);
