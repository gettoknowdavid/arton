import { styled } from "baseui";

export const StyledHeader = styled("div", ({ $theme }) => ({
  alignContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  height: "2.8125rem",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 99,

  ...$theme.typography.font200,

  color: $theme.colors.black,
  backgroundColor: $theme.colors.white,
  borderBottomColor: $theme.colors.black,
  borderBottomStyle: "solid",
  borderBottomWidth: "0.063rem",

  WebkitFontSmoothing: "antialiased",
  WebkitBoxAlign: "center",
  WebkitBoxDirection: "normal",

  padding: "0 1rem",
}));

export const StyledHeaderLogo = styled("div", () => ({
  display: "block",
  height: "2.8125rem",
  left: "50%",
  position: "absolute",
  transform: "translateX(-50%)",
  WebkitTransform: "translateX(-50%)",
  width: "8.5625rem",
  zIndex: 1022,
}));

export const StyledActionsList = styled("ul", () => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
  alignItems: "center",
  display: "flex",
  WebkitBoxOrient: "horizontal",
  WebkitBoxDirection: "normal",
  MsFlexDirection: "row",
  flexDirection: "row",
}));

export const StyledActionItem = styled("li", ({ $theme }) => ({
  ...$theme.typography.font100,
  letterSpacing: ".05rem",
  textTransform: "uppercase",
  height: "1.75rem",
  display: "flex",
  alignContent: "center",
  cursor: "pointer",
  WebkitBoxPack: "center",
  MsFlexPack: "center",
  justifyContent: "center",
  WebkitBoxAlign: "center",
  MsFlexAlign: "center",
  alignItems: "center",
  marginLeft: "1rem",
  whiteSpace: "nowrap",
  borderRadius: ".25rem",
  border: "1px solid #fff",
  textDecoration: "none",
  color: $theme.colors.black,
  transitionProperty: "color",
  transitionDuration: $theme.animation.timing500,
  ":hover": {
    color: $theme.colors.mono600,
  },
}));

export const StyledHamburger = styled("button", () => ({
  background: "transparent",
  whiteSpace: "normal",
  textAlign: "center",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  userSelect: "none",
  textDecoration: "none",
  margin: "0",
  padding: "0",
  position: "absolute",
  top: ".5rem",
  left: ".5rem",
  width: "1.75rem",
  height: "1.75rem",
  // lineHeight: "2.8125rem",
  backgroundColor: "transparent",
  border: 0,
  cursor: "pointer",
  zIndex: 109,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
