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
    code: string;
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

export interface BagItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
