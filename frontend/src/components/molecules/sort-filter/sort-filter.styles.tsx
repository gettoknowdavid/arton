import { styled } from "baseui";
import { CustomStyledComponent } from "../../../types";
import React from "react";

// Styled component Sort Filter Title
export const StyledSortFWrapper = styled("div", () => ({
  paddingBottom: "2rem",
}));

// Styled component Sort Filter Title
export const StyledSortFTitle = styled<
  "h1",
  { $align?: any },
  CustomStyledComponent
>("h1", ({ $align, $theme }) => ({
  ...$theme.typography.font250,
  marginTop: 0,
  marginBottom: "1rem",
  padding: 0,
  textTransform: "uppercase",
  textAlign: $align ?? "right",
}));

// Styled component Sort Filter List
export const StyledSortFList = styled<
  "ul",
  { $align?: any },
  CustomStyledComponent
>("ul", ({ $align }) => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
  textAlign: $align ?? "right",
}));

// Styled component Sort Filter List Item
export const StyledSortFListItem = styled<
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
