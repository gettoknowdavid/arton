import { styled } from "baseui";
import { CustomStyledComponent } from "../../../types";

// Styled component Category Filter Title
export const StyledSFWrapper = styled("div", () => ({
  paddingBottom: "2rem",
}));

// Styled component Category Filter Title
export const StyledSFTitle = styled("h1", ({ $theme }) => ({
  ...$theme.typography.font250,
  marginTop: 0,
  marginBottom: "1rem",
  padding: 0,
  textTransform: "uppercase",
}));

// Styled component Category Filter List
export const StyledSFList = styled("ul", () => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
}));

// Styled component Category Filter List Item
export const StyledSFListItem = styled<
  "li",
  { $isActive: boolean },
  CustomStyledComponent
>("li", ({ $isActive, $theme }) => ({
  ...$theme.typography.font100,
  textTransform: "uppercase",
  lineHeight: "1rem",
  cursor: "pointer",
  color: $isActive ? $theme.colors.mono600 : $theme.colors.mono1000,
  ":hover": { color: $theme.colors.mono600 },
}));
