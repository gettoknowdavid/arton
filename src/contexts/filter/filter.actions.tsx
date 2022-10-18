import React from "react";
import { FilterAction, FilterActionType, ProductType } from "../../types";
import { fetchAPI } from "../../lib/api";
import { FilterProductsQuery } from "../../graphql/queries/filter-products.query";

const sort = (index?: number) => (index === 0 ? "price:asc" : "price:desc");

export async function categoryFilter(
  dispatch: React.Dispatch<FilterAction>,
  catID?: number,
  sizeID?: number,
  sortIndex?: number
) {
  dispatch({ type: FilterActionType.LOADING_START });

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID, sort: sort(sortIndex), sizeID },
  });

  dispatch({
    type: FilterActionType.SORT_BY_CATEGORY,
    payload: { products: data.products.data, catIndex: catID },
  });
}

export async function sortByPrice(
  dispatch: React.Dispatch<FilterAction>,
  id?: number,
  sort?: string,
  sizeIndex?: number,
  catIndex?: number
) {
  dispatch({ type: FilterActionType.LOADING_START });

  const isDesc = sort?.includes("price:desc");

  const { data } = await fetchAPI({
    query: FilterProductsQuery,
    variables: { catID: catIndex, sort: sort, sizeID: sizeIndex },
  });

  dispatch({
    type: isDesc
      ? FilterActionType.SORT_PRICE_DESC
      : FilterActionType.SORT_PRICE_ASC,
    payload: { products: data.products.data, sortIndex: id },
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
    variables: { catID: catIndex, sort: sort, sizeD: sizeIndex },
  });

  dispatch({
    type: FilterActionType.SORT_BY_SIZE,
    payload: { products: data.products.data, sizeIndex: sizeIndex },
  });
}

export async function getAllProducts(
  products: ProductType[],
  dispatch: React.Dispatch<FilterAction>
) {
  dispatch({ type: FilterActionType.LOADING_START });

  dispatch({
    type: FilterActionType.GET_PRODUCTS,
    payload: { products: products },
  });
}
