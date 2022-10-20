import { styled } from "baseui";

export const StyledHomeHeroContainer = styled("div", () => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledHomeHeroImageDiv = styled("div", () => ({
  height: "70vh",
  aspectRatio: 16 / 9,
  overflow: "hidden",
}));
