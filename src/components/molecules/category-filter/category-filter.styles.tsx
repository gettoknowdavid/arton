import { styled } from "baseui";

// Styled component Category Filter Title
export const StyledCFWrapper = styled("div", () => ({
  paddingBottom: "3rem",
}));

// Styled component Category Filter Title
export const StyledCFTitle = styled("h1", () => ({
  marginTop: 0,
  marginBottom: "1rem",
  padding: 0,
  fontSize: "1.2rem",
  fontWeight: 600,
  textTransform: "uppercase",
}));

// Styled component Category Filter List
export const StyledCFList = styled("ul", () => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
}));

// Styled component Category Filter List Item
export const StyledCFListItem = styled("li", ({ $theme }) => ({
  marginBottom: 0,
  padding: 0,
  textTransform: "uppercase",
  fontWeight: 300,
  fontSize: "1rem",
  lineHeight: "1.3rem",
  cursor: "pointer",
  ":hover": { color: $theme.colors.mono600 },
}));
