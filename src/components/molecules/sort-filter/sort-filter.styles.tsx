import { styled } from "baseui";

// Styled component Sort Filter Title
export const StyledSortFWrapper = styled("div", () => ({
  paddingBottom: "2rem",
}));

// Styled component Sort Filter Title
export const StyledSortFTitle = styled("h1", ({ $theme }) => ({
  ...$theme.typography.font250,
  marginTop: 0,
  marginBottom: "1rem",
  padding: 0,
  textTransform: "uppercase",
  textAlign: "right",
}));

// Styled component Sort Filter List
export const StyledSortFList = styled("ul", () => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
  textAlign: "right",
}));

// Styled component Sort Filter List Item
export const StyledSortFListItem = styled("li", ({ $theme }) => ({
  ...$theme.typography.font100,
  textTransform: "uppercase",
  lineHeight: "1rem",
  cursor: "pointer",
  ":hover": { color: $theme.colors.mono600 },
}));
