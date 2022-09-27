import { styled } from "baseui";

export const StyledHeader = styled("header", () => ({
  maxWidth: "1920px",
  margin: "0 auto",
  width: "100%",
  height: "3rem",
  zIndex: "99",
  borderBottom: "1px solid #000",
  backgroundColor: "#fff",
  position: "fixed",
  top: "0",
  display: "flex",
  WebkitBoxPack: "justify",
  MsFlexPack: "justify",
  justifyContent: "space-between",
  WebkitBoxAlign: "center",
  MsFlexAlign: "center",
  alignItems: "center",
  MsFlexLinePack: "center",
  alignContent: "center",
  WebkitBoxOrient: "horizontal",
  WebkitBoxDirection: "normal",
  MsFlexDirection: "row",
  flexDirection: "row",
  paddingLeft: "2rem",
  paddingRight: "2rem",
}));

export const StyledHeaderLogo = styled("div", () => ({
  zIndex: "1022",
  display: "block",
  alignItems: "center",
  justifyContent: "center",
  height: "2.5rem",
  position: "absolute",
  left: "50%",
  WebkitTransform: "translateX(-50%)",
  transform: "translateX(-50%)",
  width: "18rem",
  cursor: "pointer",
}));

export const StyledNavList = styled("ul", () => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
}));

export const StyledNavItem = styled("li", ({ $theme }) => ({
  display: "list-item",
  marginRight: "2.6rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: 400,
  cursor: "pointer",
  transitionProperty: "color",
  transitionDuration: $theme.animation.timing400,
  ":hover": {
    color: $theme.colors.mono600,
  },
}));

export const StyledActionItem = styled("li", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "2.6rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: 400,
  cursor: "pointer",
  transitionProperty: "color",
  transitionDuration: $theme.animation.timing400,
  ":hover": {
    color: $theme.colors.mono600,
  },
}));
