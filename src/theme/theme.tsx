import React from "react";
import { createLightTheme, lightThemePrimitives } from "baseui";

export const ArtonTheme: any = createLightTheme(
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
        fontWeight: 300,
        fontSize: "1.1rem",
      },
    },
  }
);
