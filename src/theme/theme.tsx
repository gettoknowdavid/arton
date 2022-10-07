import React from "react";
import { createLightTheme, lightThemePrimitives } from "baseui";

const breakpoints: any = {
  small: 280,
  medium: 600,
  large: 1280,
};

const ResponsiveTheme = Object.keys(breakpoints).reduce(
  (acc: any, key) => {
    acc.mediaQuery[
      key
    ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  { breakpoints, mediaQuery: {} }
);

const CustomTheme: any = createLightTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: '"Inter Tight", sans-serif',
  },
  {
    borders: {
      buttonBorderRadius: 0,
    },
    typography: {
      font100: {
        fontSize: "0.75rem", // 12px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
      font200: {
        fontSize: "0.875rem", // 14px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
      font300: {
        fontSize: "1rem", // 16px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
      font400: {
        fontSize: "1.25rem", // 20px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
      font500: {
        fontSize: "1.5rem", // 24px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
      font600: {
        fontSize: "1.75rem", // 28px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
      font700: {
        fontSize: "2rem", // 32px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
      font800: {
        fontSize: "2.25rem", // 36px
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "1.225rem",
        textSizeAdjust: "100%",
      },
    },
  }
);

export const ArtonTheme = { ...CustomTheme, ...ResponsiveTheme };
