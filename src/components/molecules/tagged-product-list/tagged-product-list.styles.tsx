import { styled } from "baseui";
import { FlexGridItem } from "baseui/flex-grid";

export const StyledTPLWrapper = styled("div", () => ({
  marginTop: "4rem",
}));

export const StyledTPLHeader = styled("h1", ({ $theme }) => ({
  ...$theme.typography.font300,
  fontWeight: 600,
  textTransform: "uppercase",
  paddingRight: "1rem",
  paddingLeft: "1rem",
}));

export const StyledTPLList = styled("ul", () => ({
  display: "flex",
  overflowX: "auto",
  whiteSpace: "nowrap",
  listStyleType: "none",
  paddingRight: "1rem",
  paddingLeft: "1rem",
}));

export const StyledTPLListItem = styled("li", ({ $theme }) => ({
  maxWidth: "calc((100vw - 20px + 1rem) / 2.8)",
  width: "100%",
  marginRight: "0.75rem",
  [$theme.mediaQuery.large]: {
    maxWidth: "calc((100vw - 20px + 1rem) / 4.9)",
  },
}));

export const StyledTPLListItemInner = styled(FlexGridItem, ({ $theme }) => ({
  maxWidth: "calc((100vw - 20px + 1rem) / 2.8)",
  width: "100%",
  [$theme.mediaQuery.large]: {
    maxWidth: "calc((100vw - 20px + 1rem) / 4.9)",
  },
}));

export const StyledTPLImageWrapper = styled("div", ({ $theme }) => ({
  height: "100%",
  width: "100%",
  display: "block",
  backgroundColor: $theme.colors.mono200,
  aspectRatio: 3.95 / 5,
  position: "relative",
  cursor: "pointer",
}));

export const StyledTPLTitle = styled("div", ({ $theme }) => ({
  ...$theme.typography.font100,
  textTransform: "uppercase",
  lineHeight: "1.3rem",
  height: "1rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  lineClamp: 1,
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  marginTop: "0.25rem",
  marginBottom: 0,
  padding: 0,
  [$theme.mediaQuery.small]: { fontSize: "0.563rem" },
  [$theme.mediaQuery.medium]: { fontSize: "0.625rem" },
  [$theme.mediaQuery.large]: { fontSize: "0.75rem" },
}));

export const StyledTPLPrice = styled("div", ({ $theme }) => ({
  ...$theme.typography.font100,
  fontWeight: 600,
  lineHeight: "1.3rem",
  marginTop: "0.25rem",
  marginBottom: 0,
  height: "1rem",
  textTransform: "uppercase",
  [$theme.mediaQuery.small]: { fontSize: "0.563rem" },
  [$theme.mediaQuery.medium]: { fontSize: "0.625rem" },
  [$theme.mediaQuery.large]: { fontSize: "0.75rem" },
}));
