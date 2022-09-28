import { styled } from "baseui";

export const StyledCategoryItemImageDiv = styled("div", () => ({
  width: "100%",
  height: "61.714rem",
  textAlign: "center",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
}));

export const StyledCategoryItemName = styled("h2", () => ({
  fontSize: "1.367rem",
  marginBottom: "1px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "2px",
}));

export const StyledCategoryItemVariant = styled("p", () => ({
  margin: 0,
  fontSize: "1rem",
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "2px",
}));
