import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

export type GlobalSlice = {
  drawerOpen: boolean;
};

const initialState: GlobalSlice = {
  drawerOpen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    closeDrawer: (state) => ({
      ...state,
      drawerOpen: false,
    }),
    toggleDrawer: (state) => ({
      ...state,
      drawerOpen: !state.drawerOpen,
    }),
  },
});

export const { closeDrawer, toggleDrawer } = globalSlice.actions;

export const selectGlobal = (state: RootState) => state.global;
