import React from "react";
import { FilterAction, FilterActionType, ProductType } from "../../types";
import { fetchAPI } from "../../lib/api";
import { FilterProductsQuery } from "../../graphql/queries/filter-products.query";

const getSort = (index?: number) => (index === 0 ? "price:asc" : "price:desc");

type FilterProps = {
  dispatch: React.Dispatch<FilterAction>;
  products?: ProductType[];
  sort?: string;
  catID?: number;
  sizeID?: number;
  sortIndex?: number;
};

export async function categoryFilter(props: FilterProps) {
  const { dispatch, catID, sizeID, sortIndex } = props;

  dispatch({ type: FilterActionType.LOADING_START });

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID, sort: getSort(sortIndex), sizeID },
  });

  dispatch({
    type: FilterActionType.SORT_BY_CATEGORY,
    payload: { products: data.products.data, catID },
  });
}

export async function priceFilter(props: FilterProps) {
  const { dispatch, catID, sizeID, sortIndex } = props;

  dispatch({ type: FilterActionType.LOADING_START });

  const isDesc = getSort(sortIndex)?.includes("price:desc");

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID, sort: getSort(sortIndex), sizeID },
  });

  dispatch({
    type: isDesc
      ? FilterActionType.SORT_PRICE_DESC
      : FilterActionType.SORT_PRICE_ASC,
    payload: { products: data.products.data, sortIndex },
  });
}

export async function sortBySize(
  dispatch: React.Dispatch<FilterAction>,
  sizeIndex?: number,
  sortIndex?: number,
  catIndex?: number
) {
  dispatch({ type: FilterActionType.LOADING_START });

  const sort = sortIndex === 0 ? "price:asc" : "price:desc";

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID: catIndex, sort: sort, sizeID: sizeIndex },
  });

  dispatch({
    type: FilterActionType.SORT_BY_SIZE,
    payload: { products: data.products.data, sizeID: sizeIndex },
  });
}

export async function getAllProducts(props: FilterProps) {
  props.dispatch({ type: FilterActionType.LOADING_START });

  props.dispatch({
    type: FilterActionType.GET_PRODUCTS,
    payload: { products: props.products! },
  });
}
