import { CartContextType, CartItemInterface } from "../../types";

export const totalAmount = (state: CartContextType): number =>
  state.items.reduce((cartTotal: number, currentItem: CartItemInterface) => {
    const { price, quantity } = currentItem;
    cartTotal += price * quantity;
    return cartTotal;
  }, 0);
