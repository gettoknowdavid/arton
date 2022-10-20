import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { Theme } from "baseui";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ImageType = {
  id: string;
  attributes: {
    alternativeText: string;
    url: string;
  };
};

export type CategoryType = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    variant: string;
    image: {
      data: ImageType;
    };
  };
};

export type ColourType = {
  id: number;
  attributes: {
    title: string;
    code: string;
  };
};
export type SizeType = {
  id: number;
  attributes: {
    title: string;
    sizeCode: string;
  };
};

export type NavItemType = {
  id: number;
  title: string;
  slug: string;
};

export type CustomStyledComponent = Theme & { extraProp: string };

export type TagType = {
  id: string;
  title: string;
};

export type ProductType = {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    price: number;
    available: boolean;
    brand: string;
    details: string;
    care: string;
    variant: string;
    tags: TagType[];
    colour: {
      data: ColourType;
    };
    sizes: {
      data: SizeType[];
    };
    image: {
      data: ImageType;
    };
    images: {
      data: ImageType[];
    };
    category?: {
      data: CategoryType;
    };
  };
};

export interface CartItemInterface {
  id: number;
  name: string;
  slug: string;
  size: SizeType;
  sizes: SizeType[];
  colour: string;
  image: string;
  price: number;
  quantity: number;
}

export type GlobalType = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
};

export type CartContextType = {
  items: CartItemInterface[];
  cartDrawerOpen: boolean;
};

export type FilterContextType = {
  catID?: number;
  filteredProducts: ProductType[];
  loading: boolean;
  sizeID?: number;
  sortIndex?: number;
};

export type SearchContextType = {
  loading: boolean;
  searchBoxOpen: boolean;
  result: ProductType[];
};

export type CheckoutContextType = {
  modalOpen: boolean;
};

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export enum CartActionType {
  ADD_TO_CART = "ADD_TO_CART",
  CLEAR_CART = "CLEAR_CART",
  CLOSE_CART_DRAWER = "CLOSE_CART_DRAWER",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  SELECT_SIZE = "SELECT_SIZE",
  TOGGLE_CART_DRAWER = "TOGGLE_CART_DRAWER",
}

export enum FilterActionType {
  CLEAR_CATEGORY_FILTER = "CLEAR_CATEGORY_FILTER",
  CLEAR_SIZE_FILTER = "CLEAR_SIZE_FILTER",
  CLEAR_SORT_FILTER = "CLEAR_SORT_FILTER",
  GET_PRODUCTS = "GET_PRODUCTS",
  LOADING_END = "LOADING_END",
  LOADING_START = "LOADING_START",
  SORT_BY_CATEGORY = "SORT_BY_CATEGORY",
  SORT_BY_SIZE = "SORT_BY_SIZE",
  SORT_PRICE_ASC = "SORT_PRICE_ASC",
  SORT_PRICE_DESC = "SORT_PRICE_DESC",
}

export enum SearchActionType {
  SEARCH_SUBMITTED = "SEARCH_SUBMITTED",
  OPEN_SEARCH = "OPEN_SEARCH",
  CLOSE_SEARCH = "CLOSE_SEARCH",
  LOADING_END = "LOADING_END",
  LOADING_START = "LOADING_START",
  TOGGLE_SEARCH_BOX = "TOGGLE_SEARCH_BOX",
}

export enum CheckoutActionType {
  CLOSE_CHECKOUT_MODAL = "CLOSE_CHECKOUT_MODAL",
  TOGGLE_CHECKOUT_MODAL = "TOGGLE_CHECKOUT_MODAL",
}

type CartPayload = {
  [CartActionType.ADD_TO_CART]: { item: CartItemInterface };
  [CartActionType.CLEAR_CART]: any;
  [CartActionType.CLOSE_CART_DRAWER]: any;
  [CartActionType.DECREASE_QUANTITY]: { id: string | number };
  [CartActionType.INCREASE_QUANTITY]: { id: string | number };
  [CartActionType.REMOVE_FROM_CART]: { item: CartItemInterface };
  [CartActionType.SELECT_SIZE]: { item: CartItemInterface; size: SizeType };
  [CartActionType.TOGGLE_CART_DRAWER]: any;
};

type FilterPayload = {
  [FilterActionType.CLEAR_CATEGORY_FILTER]: any;
  [FilterActionType.CLEAR_SIZE_FILTER]: any;
  [FilterActionType.CLEAR_SORT_FILTER]: any;
  [FilterActionType.GET_PRODUCTS]: { products: ProductType[] };
  [FilterActionType.LOADING_END]: any;
  [FilterActionType.LOADING_START]: any;
  [FilterActionType.SORT_BY_CATEGORY]: {
    catID?: number;
    products: ProductType[];
  };
  [FilterActionType.SORT_BY_SIZE]: {
    sizeID?: number;
    products: ProductType[];
  };
  [FilterActionType.SORT_PRICE_ASC]: {
    sortIndex?: number;
    products: ProductType[];
  };
  [FilterActionType.SORT_PRICE_DESC]: {
    sortIndex?: number;
    products: ProductType[];
  };
};

type SearchPayload = {
  [SearchActionType.CLOSE_SEARCH]: any;
  [SearchActionType.OPEN_SEARCH]: any;
  [SearchActionType.SEARCH_SUBMITTED]: { result: ProductType[] };
  [SearchActionType.LOADING_END]: any;
  [SearchActionType.LOADING_START]: any;
  [SearchActionType.TOGGLE_SEARCH_BOX]: any;
};

type CheckoutPayload = {
  [CheckoutActionType.CLOSE_CHECKOUT_MODAL]: any;
  [CheckoutActionType.TOGGLE_CHECKOUT_MODAL]: any;
};

export type CartAction = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];

export type FilterAction =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

export type CheckoutAction =
  ActionMap<CheckoutPayload>[keyof ActionMap<CheckoutPayload>];

export type SearchAction =
  ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>];
