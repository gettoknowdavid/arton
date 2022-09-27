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
  data: {
    id: string;
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

export type CategoryType = {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
      variant: string;
      image: ImageType;
    };
  };
};

export type NavItemType = {
  id: number;
  title: string;
  slug: string;
};

export type CustomStyledComponent = Theme & { extraProp: string };
