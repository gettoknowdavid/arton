import React, { ReactNode } from "react";
import GlobalProvider from "./global.context";
import { CartProvider } from "./cart";
import CheckoutProvider from "./checkout.context";
import { FilterProvider } from "./filter";
import { SearchProvider } from "./search";

type Props = {
  children: ReactNode;
};

function ArtonProvider(props: Props) {
  return (
    <GlobalProvider>
      <CartProvider>
        <CheckoutProvider>
          <FilterProvider>
            <SearchProvider>{props.children}</SearchProvider>
          </FilterProvider>
        </CheckoutProvider>
      </CartProvider>
    </GlobalProvider>
  );
}

export default ArtonProvider;
