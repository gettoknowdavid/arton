import React, { ReactNode } from "react";
import GlobalProvider from "./global.context";
import CartProvider from "./cart.context";
import CheckoutProvider from "./checkout.context";
import FilterProvider from "./filter.context";

type Props = {
  children: ReactNode;
};

function ArtonProvider(props: Props) {
  return (
    <GlobalProvider>
      <CartProvider>
        <CheckoutProvider>
          <FilterProvider>{props.children}</FilterProvider>
        </CheckoutProvider>
      </CartProvider>
    </GlobalProvider>
  );
}

export default ArtonProvider;
