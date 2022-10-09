import React, { ReactNode } from "react";
import GlobalProvider from "./global.context";
import CartProvider from "./cart.context";

type Props = {
  children: ReactNode;
};

function ArtonProvider(props: Props) {
  return (
    <GlobalProvider>
      <CartProvider>{props.children}</CartProvider>
    </GlobalProvider>
  );
}

export default ArtonProvider;
