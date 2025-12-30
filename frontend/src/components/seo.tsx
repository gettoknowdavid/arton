import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";

function SEO(props: NextSeoProps) {
  return (
    <NextSeo
      {...props}
      titleTemplate={"%s | THISISARTON®"}
      additionalMetaTags={[
        {
          property: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          httpEquiv: "x-ua-compatible",
          content: "ie=edge",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "theme-color",
          content: "#000000",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "76x76",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ]}
    />
  );
}

export default SEO;
