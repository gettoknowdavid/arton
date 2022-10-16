import React, { ReactNode } from "react";
import GlobalProvider from "./global.context";
import CartProvider from "./cart.context";
import CheckoutProvider from "./checkout.context";

type Props = {
  children: ReactNode;
};

function ArtonProvider(props: Props) {
  return (
    <GlobalProvider>
      <CartProvider>
        <CheckoutProvider>{props.children}</CheckoutProvider>
      </CartProvider>
    </GlobalProvider>
  );
}

export default ArtonProvider;
