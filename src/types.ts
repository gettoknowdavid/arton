import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { Theme } from "baseui";
import { Image } from "phosphor-react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ImageType = {
  data: {
    id: string;
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

export type CategoryType = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    variant: string;
    image: ImageType;
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
    tags: {
      id: string;
      title: string;
    };
    colour: {
      data: ColourType;
    };
    sizes: {
      data: SizeType[];
    };
    image: ImageType;
    images: ImageType[];
    category?: {
      data: CategoryType;
    };
  };
};
