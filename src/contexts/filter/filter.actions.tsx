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
  variant?: string;
};

export async function categoryFilter(props: FilterProps) {
  const { dispatch, catID, sizeID, sortIndex, variant } = props;

  dispatch({ type: FilterActionType.LOADING_START });

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID, sort: getSort(sortIndex), sizeID, variant },
  });

  dispatch({
    type: FilterActionType.SORT_BY_CATEGORY,
    payload: { products: data.products.data, catID },
  });
}

export function closeFiltersDrawer(props: FilterProps) {
  props.dispatch({ type: FilterActionType.CLOSE_FILTERS_DRAWER });
}

export function openFiltersDrawer(props: FilterProps) {
  props.dispatch({ type: FilterActionType.OPEN_FILTERS_DRAWER });
}

export async function priceFilter(props: FilterProps) {
  const { dispatch, catID, sizeID, sortIndex, variant } = props;

  dispatch({ type: FilterActionType.LOADING_START });

  const isDesc = getSort(sortIndex)?.includes("price:desc");

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID, sort: getSort(sortIndex), sizeID, variant },
  });

  dispatch({
    type: isDesc
      ? FilterActionType.SORT_PRICE_DESC
      : FilterActionType.SORT_PRICE_ASC,
    payload: { products: data.products.data, sortIndex },
  });
}

export async function sizeFilter(props: FilterProps) {
  const { catID, dispatch, sizeID, sortIndex, variant } = props;

  dispatch({ type: FilterActionType.LOADING_START });

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID, sort: getSort(sortIndex), sizeID, variant },
  });

  dispatch({
    type: FilterActionType.SORT_BY_SIZE,
    payload: { products: data.products.data, sizeID },
  });
}

export async function getAllProducts(props: FilterProps) {
  props.dispatch({ type: FilterActionType.LOADING_START });

  props.dispatch({
    type: FilterActionType.GET_PRODUCTS,
    payload: { products: props.products! },
  });
}
