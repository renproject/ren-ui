import { Button, ButtonProps, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export const ButtonExtended: FunctionComponent<
  ButtonProps & { label: string }
> = ({ label }) => <Button>{label}</Button>;

export const TypographyReExported = Typography;
