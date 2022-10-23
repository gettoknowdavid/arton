import { styled } from "baseui";

export const StyledHomeHeroContainer = styled("div", ({ $theme }) => ({
  width: "100vw",
  maxWidth: "1920px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2.8125rem",
  aspectRatio: 16 / 9,
  [$theme.mediaQuery.large]: { height: "calc(100vh - 2.8125rem)" },
}));

export const StyledHomeHeroImageDiv = styled("div", ({ $theme }) => ({
  height: "100%",
  width: "100%",
  aspectRatio: 16 / 9,
  overflow: "hidden",
  [$theme.mediaQuery.large]: { height: "100vh" },
}));
