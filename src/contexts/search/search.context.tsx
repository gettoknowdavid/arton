import { SearchAction, SearchContextType } from "../../types";
import React from "react";

export const searchInitialState: SearchContextType = {
  loading: false,
  searchBoxOpen: false,
  result: [],
};

export const searchReducer = (
  state: SearchContextType,
  action: SearchAction
) => {
  switch (action.type) {
    case "CLOSE_SEARCH":
      return { ...state, loading: false, searchBoxOpen: false };
    case "LOADING_END":
      return { ...state, loading: false };
    case "LOADING_START":
      return { ...state, loading: true };
    case "OPEN_SEARCH":
      return { ...state, loading: false, searchBoxOpen: true };
    case "SEARCH_SUBMITTED":
      return { ...state, loading: false, result: action.payload.result };
    case "TOGGLE_SEARCH_BOX":
      return { ...state, loading: false, searchBoxOpen: !state.searchBoxOpen };
    default:
      return state;
  }
};

type ContextT = {
  state: SearchContextType;
  dispatch: React.Dispatch<SearchAction>;
};

export const SearchContext = React.createContext<ContextT>({
  state: searchInitialState,
  dispatch: () => null,
});
