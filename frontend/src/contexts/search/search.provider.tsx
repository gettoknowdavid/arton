import React from "react";
import {
  SearchContext,
  searchInitialState,
  searchReducer,
} from "./search.context";

type Props = {
  children: React.ReactNode;
};

export const SearchProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
    searchReducer,
    searchInitialState
  );

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SearchContext.Provider>
  );
};
