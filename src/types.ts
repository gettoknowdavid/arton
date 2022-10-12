import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { Theme } from "baseui";
import store from "./store";

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

type CartPayload = {
  [CartActionType.ADD_TO_CART]: { item: CartItemInterface };
  [CartActionType.CLEAR_CART]: any;
  [CartActionType.CLOSE_CART_DRAWER]: any;
  [CartActionType.DECREASE_QUANTITY]: { id: string | number };
  [CartActionType.INCREASE_QUANTITY]: { id: string | number };
  [CartActionType.REMOVE_FROM_CART]: { id: string | number };
  [CartActionType.SELECT_SIZE]: { item: CartItemInterface; size: SizeType };
  [CartActionType.TOGGLE_CART_DRAWER]: any;
};

export type CartAction = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];
