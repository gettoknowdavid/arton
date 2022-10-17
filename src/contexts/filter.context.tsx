import React from "react";
import { FilterAction, FilterContextType } from "../types";

type Props = {
  children: React.ReactNode;
};

const initialState: FilterContextType = {
  filteredProducts: [],
};

const reducer = (state: FilterContextType, action: FilterAction) => {
  switch (action.type) {
    case "SORT_PRICE_ASC":
      return {
        ...state,
        filteredProducts: state.filteredProducts
          .map((i) => i.attributes.price)
          .sort((p, c) => {
            return p - c;
          }),
      };
    case "SORT_PRICE_DESC":
      return {
        ...state,
        filteredProducts: state.filteredProducts
          .map((i) => i.attributes.price)
          .sort((p, c) => {
            return c - p;
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
