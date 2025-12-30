import React from "react";
import { FilterAction, FilterContextType } from "../../types";

export const filterInitialState: FilterContextType = {
  catID: undefined,
  filteredProducts: [],
  loading: false,
  sizeID: undefined,
  sortIndex: undefined,
  filterDrawerOpen: false,
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
    case "CLOSE_FILTERS_DRAWER":
      return { ...state, filterDrawerOpen: false };
    case "OPEN_FILTERS_DRAWER":
      return { ...state, filterDrawerOpen: true };
    case "LOADING_END":
      return { ...state, loading: false };
    case "LOADING_START":
      return { ...state, loading: true };
    case "SORT_BY_CATEGORY":
      return {
        ...state,
        loading: false,
        filterDrawerOpen: false,
        catID: action.payload.catID,
        filteredProducts: action.payload.products,
      };
    case "SORT_BY_SIZE":
      return {
        ...state,
        loading: false,
        filterDrawerOpen: false,
        sizeID: action.payload.sizeID,
        filteredProducts: action.payload.products,
      };
    case "SORT_PRICE_ASC":
      return {
        ...state,
        loading: false,
        filterDrawerOpen: false,
        sortIndex: action.payload.sortIndex,
        filteredProducts: action.payload.products,
      };
    case "SORT_PRICE_DESC":
      return {
        ...state,
        loading: false,
        filterDrawerOpen: false,
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
