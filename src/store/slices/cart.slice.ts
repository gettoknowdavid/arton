import { CartItemInterface } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export type CartSlice = {
  items: CartItemInterface[];
  isEmpty: boolean;
  totalQuantity: number;
  cartDrawerOpen: boolean;
};

const initialState: CartSlice = {
  items: [],
  isEmpty: true,
  totalQuantity: 0,
  cartDrawerOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemInterface>) => {
      const { id, quantity, size } = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === id && item.size.label === size.label
      );

      state.totalQuantity += quantity;
      state.isEmpty = !!state.totalQuantity;

      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity += quantity;
      }
    },
    clearCart: () => initialState,
    closeCartDrawer: (state) => ({ ...state, cartDrawerOpen: false }),
    decreaseQuantity: (state, action: PayloadAction<CartItemInterface>) => {
      const { id } = action.payload;
      state.totalQuantity--;
      state.isEmpty = !!state.totalQuantity;
      state.items = state.items
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
    increaseQuantity: (state, action: PayloadAction<CartItemInterface>) => {
      const { id } = action.payload;
      state.totalQuantity++;
      state.isEmpty = !!state.totalQuantity;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    removeFromCart: (state, action: PayloadAction<CartItemInterface>) => {
      const { id } = action.payload;
      const newItems = state.items.filter((item) => item.id !== id);
      return {
        ...state,
        items: newItems,
        totalQuantity: newItems
          .map((i) => i.quantity)
          .reduce((p, c) => p + c, 0),
        isEmpty: !!state.totalQuantity,
      };
    },
    selectSize: (state, action: PayloadAction<any>) => {
      const { item, size } = action.payload;

      state.items = state.items.map((i) => {
        if (i.id === item.id && i.size.id === item.size.id) {
          return { ...i, size: size };
        }
        return i;
      });
    },
    toggleCartDrawer: (state) => ({
      ...state,
      cartDrawerOpen: !state.cartDrawerOpen,
    }),
  },
});

export const {
  addToCart,
  clearCart,
  closeCartDrawer,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectSize,
  toggleCartDrawer,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const totalAmount = (state: RootState): number =>
  state.cart.items.reduce(
    (cartTotal: number, currentItem: CartItemInterface) => {
      const { price, quantity } = currentItem;
      cartTotal += price * quantity;
      return cartTotal;
    },
    0
  );
