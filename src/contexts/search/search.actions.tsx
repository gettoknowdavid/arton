import React from "react";
import { SearchAction, SearchActionType } from "../../types";
import { fetchAPI } from "../../lib/api";
import { SearchQuery } from "../../graphql/queries/search.query";

type SearchT = {
  dispatch: React.Dispatch<SearchAction>;
  query?: string;
};

export async function productSearch(props: SearchT) {
  const { dispatch, query } = props;

  dispatch({ type: SearchActionType.LOADING_START });

  const { data } = await fetchAPI({
    query: SearchQuery,
    variables: { title: query },
  });

  dispatch({
    type: SearchActionType.SEARCH_SUBMITTED,
    payload: { result: data.products.data },
  });
}

export function closeSearchBox(props: SearchT) {
  props.dispatch({ type: SearchActionType.CLOSE_SEARCH });
}

export function openSearchBox(props: SearchT) {
  props.dispatch({ type: SearchActionType.OPEN_SEARCH });
}

export function toggleSearchBox(props: SearchT) {
  props.dispatch({ type: SearchActionType.TOGGLE_SEARCH_BOX });
}
