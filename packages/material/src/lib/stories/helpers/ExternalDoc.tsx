import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import React, { FunctionComponent } from "react";

type ExternalDocProps = {
  url: string;
};

export const ExternalDoc: FunctionComponent<ExternalDocProps> = ({
  url,
  children,
}) => {
  return (
    <>
      <Title />
      <a href={url} target="_blank" rel="noreferrer">
        {children ? children : "Documentation"}
      </a>
      {/*<Subtitle />*/}
      {/*<Description />*/}
      {/*<Primary />*/}
      {/*<ArgsTable story={PRIMARY_STORY} />*/}
      {/*<Stories />*/}
    </>
  );
};

export const createExternalDoc = (url: string) => {
  return () => <ExternalDoc url={url} />;
};

export const createExternalMuiComponentDoc = (name: string) => {
  return () => <ExternalDoc url={`https://mui.com/api/${name}`} />;
};
