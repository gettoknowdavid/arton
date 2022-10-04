import { BagItemInterface } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export type BagSlice = {
  items: BagItemInterface[];
  totalQuantity: number;
  bagDrawerOpen: boolean;
};

const initialState: BagSlice = {
  items: [],
  totalQuantity: 0,
  bagDrawerOpen: false,
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: (state, action: PayloadAction<BagItemInterface>) => {
      const { id, quantity, size } = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === id && item.size.label === size.label
      );

      state.totalQuantity += quantity;

      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity += quantity;
      }
    },
    clearBag: () => initialState,
    decreaseQuantity: (state, action: PayloadAction<BagItemInterface>) => {
      const { id } = action.payload;
      state.totalQuantity--;
      state.items = state.items
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
    increaseQuantity: (state, action: PayloadAction<BagItemInterface>) => {
      const { id } = action.payload;
      state.totalQuantity++;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    removeFromBag: (state, action: PayloadAction<BagItemInterface>) => {
      const { id } = action.payload;
      const newItems = state.items.filter((item) => item.id !== id);
      return {
        ...state,
        items: newItems,
        totalQuantity: newItems
          .map((i) => i.quantity)
          .reduce((p, c) => p + c, 0),
      };
    },

    toggleBagDrawer: (state) => ({
      ...state,
      bagDrawerOpen: !state.bagDrawerOpen,
    }),
  },
});

export const {
  addToBag,
  clearBag,
  decreaseQuantity,
  increaseQuantity,
  removeFromBag,
  toggleBagDrawer,
} = bagSlice.actions;

export const selectBag = (state: RootState) => state.bag;

export const totalAmount = (state: RootState): number =>
  state.bag.items.reduce((bagTotal: number, currentItem: BagItemInterface) => {
    const { price, quantity } = currentItem;
    bagTotal += price * quantity;
    return bagTotal;
  }, 0);

export const bagItems = (state: RootState) => state.bag.items;
