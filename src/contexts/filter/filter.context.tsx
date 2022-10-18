import React from "react";
import { FilterAction, FilterContextType } from "../../types";

export const filterInitialState: FilterContextType = {
  catIndex: undefined,
  filteredProducts: [],
  loading: false,
  sizeIndex: undefined,
  sortIndex: undefined,
};

export const filterReducer = (
  state: FilterContextType,
  action: FilterAction
) => {
  switch (action.type) {
    case "CLEAR_CATEGORY_FILTER":
      return {};
    case "GET_PRODUCTS":
      return {
        ...filterInitialState,
        loading: false,
        filteredProducts: action.payload.products,
      };
    case "LOADING_END":
      return { ...state, loading: false };
    case "LOADING_START":
      return { ...state, loading: true };
    case "SORT_BY_CATEGORY":
      return {
        ...state,
        loading: false,
        catIndex: action.payload.catIndex,
        filteredProducts: action.payload.products,
      };
    case "SORT_BY_SIZE":
      return {
        ...state,
        loading: false,
        sizeIndex: action.payload.sizeIndex,
        filteredProducts: action.payload.products,
      };
    case "SORT_PRICE_ASC":
      return {
        ...state,
        loading: false,
        sortIndex: action.payload.sortIndex,
        filteredProducts: action.payload.products,
      };
    case "SORT_PRICE_DESC":
      return {
        ...state,
        loading: false,
        sortIndex: action.payload.sortIndex,
        filteredProducts: action.payload.products,
      };
    default:
      return state;
  }
};

export const FilterContext = React.createContext<{
  state: FilterContextType;
  dispatch: React.Dispatch<FilterAction>;
}>({ state: filterInitialState, dispatch: () => null });
