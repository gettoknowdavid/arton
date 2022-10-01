import { styled } from "baseui";
import { FlexGridItem } from "baseui/flex-grid";

export const StyledTPLWrapper = styled("div", () => ({
  marginTop: "4rem",
}));

export const StyledTPLHeader = styled("h1", () => ({
  fontSize: "1.5rem",
  fontWeight: 500,
  textTransform: "uppercase",
  paddingRight: "2rem",
  paddingLeft: "2rem",
}));

export const StyledTPLList = styled("ul", () => ({
  display: "flex",
  overflowX: "auto",
  whiteSpace: "nowrap",
  listStyleType: "none",
  paddingRight: "2rem",
  paddingLeft: "2rem",
}));

export const StyledTPLListItem = styled("li", () => ({
  maxWidth: "calc((100vw - 20px + 2rem) / 4.9)",
  marginRight: "2rem",
}));

export const StyledTPLListItemInner = styled(FlexGridItem, () => ({
  maxWidth: "calc((100vw - 20px + 2rem) / 4.9)",
}));

export const StyledTPLImageWrapper = styled("div", ({ $theme }) => ({
  height: "50rem",
  width: "100%",
  display: "block",
  aspectRatio: 9 / 14,
  position: "relative",
  backgroundColor: $theme.colors.mono200,
  cursor: "pointer",
}));

export const StyledTPLTitle = styled("div", () => ({
  marginTop: "1rem",
  marginBottom: 0,
  padding: 0,
  textTransform: "uppercase",
  fontWeight: 300,
  fontSize: "1.2rem",
  lineHeight: "1.3rem",
  height: "1.4rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  lineClamp: 1,
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
}));

export const StyledTPLPrice = styled("div", () => ({
  marginTop: "6px",
  padding: 0,
  textTransform: "uppercase",
  fontSize: "1rem",
  lineHeight: "1.3rem",
}));
