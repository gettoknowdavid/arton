import React, { ReactNode } from "react";
import GlobalProvider from "./global.context";

type Props = {
  children: ReactNode;
};

function ArtonProvider(props: Props) {
  return <GlobalProvider>{props.children}</GlobalProvider>;
}

export default ArtonProvider;
