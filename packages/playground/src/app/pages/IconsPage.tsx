import { FunctionComponent } from "react";
import { RenBch, RenBtc, RenUni } from "@renproject/icons";

export const IconsPage: FunctionComponent = () => (
  <div>
    <h2>Icons</h2>
    <RenBtc />
    <RenBch width={64} />
    <RenUni />
  </div>
);
