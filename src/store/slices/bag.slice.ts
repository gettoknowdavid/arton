import { BagItem } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export type BagSlice = {
  items: BagItem[];
  totalQuantity: number;
};

const initialState: BagSlice = {
  items: [],
  totalQuantity: 0,
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: (state, action: PayloadAction<BagItem>) => {
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
  },
});

export const { addToBag } = bagSlice.actions;

export const selectBag = (state: RootState) => state.bag;

export const bagItems = (state: RootState) => state.bag.items;
