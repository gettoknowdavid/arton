import React from "react";
import { FilterAction, FilterContextType } from "../types";

type Props = {
  children: React.ReactNode;
};

const initialState: FilterContextType = {
  catIndex: undefined,
  filteredProducts: [],
  sortIndex: undefined,
};

const reducer = (state: FilterContextType, action: FilterAction) => {
  switch (action.type) {
    case "SORT_BY_CATEGORY":
      return {
        ...state,
        catIndex: action.payload.catIndex,
        filteredProducts: state.filteredProducts.filter(
          (p) => p.attributes.category?.data.id === action.payload.catIndex
        ),
      };
    case "GET_PRODUCTS":
      return { ...initialState, filteredProducts: action.payload.products };
    case "SORT_PRICE_ASC":
      return {
        ...state,
        sortIndex: action.payload.sortIndex,
        filteredProducts: state.filteredProducts.sort((p, c) => {
          return p.attributes.price - c.attributes.price;
        }),
      };
    case "SORT_PRICE_DESC":
      return {
        ...state,
        sortIndex: action.payload.sortIndex,
        filteredProducts: state.filteredProducts.sort((p, c) => {
          return c.attributes.price - p.attributes.price;
        }),
      };
    default:
      return state;
  }
};

export const FilterContext = React.createContext<{
  state: FilterContextType;
  dispatch: React.Dispatch<FilterAction>;
}>({ state: initialState, dispatch: () => null });

const FilterProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
    reducer,
    initialState
  );

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
