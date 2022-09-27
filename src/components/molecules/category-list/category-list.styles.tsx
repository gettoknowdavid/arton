import { styled } from "baseui";
import { FlexGridItem } from "baseui/flex-grid";

export const StyledCategoryItemImageDiv = styled("div", () => ({
  width: "100%",
  height: "61.714rem",
  flexDirection: "column",
  textAlign: "center",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "space-between",
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
