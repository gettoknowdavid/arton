import { CartAction, CartContextType, CartItemInterface } from "../../types";
import React from "react";

type CartT = {
  dispatch: React.Dispatch<CartAction>;
  query?: string;
};

export const totalAmount = (state: CartContextType): number =>
  state.items.reduce((cartTotal: number, currentItem: CartItemInterface) => {
    const { price, quantity } = currentItem;
    cartTotal += price * quantity;
    return cartTotal;
  }, 0);
