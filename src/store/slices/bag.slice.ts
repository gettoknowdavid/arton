import { BagItemInterface } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export type BagSlice = {
  items: BagItemInterface[];
  totalQuantity: number;
  bagDrawerOpen: boolean;
  // totalAmount: number;
};

const initialState: BagSlice = {
  items: [],
  totalQuantity: 0,
  bagDrawerOpen: false,
  // totalAmount: 0.0,
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: (state, action: PayloadAction<BagItemInterface>) => {
      const { id, quantity } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity += quantity;

      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity += quantity;
      }
    },
    clearBag: () => initialState,
    toggleBagDrawer: (state) => ({
      // Open and close the bag drawer
      ...state,
      bagDrawerOpen: !state.bagDrawerOpen,
    }),
  },
});

export const { addToBag, toggleBagDrawer } = bagSlice.actions;

export const selectBag = (state: RootState) => state.bag;

export const totalAmount = (state: RootState): number =>
  state.bag.items.reduce((bagTotal: number, currentItem: BagItemInterface) => {
    const { price, quantity } = currentItem;
    bagTotal += price * quantity;
    return bagTotal;
  }, 0);

export const bagItems = (state: RootState) => state.bag.items;
