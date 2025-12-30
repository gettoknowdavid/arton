import React from "react";
import {
  FilterContext,
  filterInitialState,
  filterReducer,
} from "./filter.context";

type Props = {
  children: React.ReactNode;
};

export const FilterProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
    filterReducer,
    filterInitialState
  );

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FilterContext.Provider>
  );
};
