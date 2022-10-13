import { styled } from "baseui";

export const StyledCategoryItemImageDiv = styled("div", () => ({
  width: "100%",
  height: "100%",
  aspectRatio: 4.5 / 5,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
}));

export const StyledCategoryItemName = styled("h2", ({ $theme }) => ({
  ...$theme.typography.font200,
  marginBottom: "1px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "2px",
}));

export const StyledCategoryItemVariant = styled("p", ({ $theme }) => ({
  ...$theme.typography.font100,
  margin: 0,
  fontWeight: 400,
  textTransform: "uppercase",
}));
