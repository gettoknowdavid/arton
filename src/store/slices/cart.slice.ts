import { CartItem } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export type CartSlice = {
  items: CartItem[];
  totalQuantity: number;
};

const initialState: CartSlice = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity += quantity;

      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity += quantity;
      }
    },
    clearCart: () => initialState,
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const cartItems = (state: RootState) => state.cart.items;
