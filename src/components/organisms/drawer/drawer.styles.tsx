import { styled } from "baseui";

export const DrawerOverrides = {
  DrawerBody: {
    style: () => ({
      overflow: "hidden",
      marginTop: "2.8125rem",
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    }),
  },
};

export const StyledDrawerBody = styled("div", ({ $theme }) => ({
  position: "relative",
  height: "100%",
  WebkitTransform: "translateX(0)",
  transform: "translateX(0)",
  overflow: "hidden",
  width: "200%",
  backgroundColor: $theme.colors.white,
}));

export const StyledDrawerList = styled("ul", ({ $theme }) => ({
  display: "flex",
  margin: 0,
  WebkitBoxOrient: "vertical",
  WebkitBoxDirection: "normal",
  MsFlexDirection: "column",
  flexDirection: "column",
  MsFlexWrap: "nowrap",
  flexWrap: "nowrap",
  padding: 0,
  listStyle: "none",
  backgroundColor: $theme.colors.white,
}));

export const StyledDrawerListItem = styled("li", ({ $theme }) => ({
  borderBottomWidth: "0.063rem",
  borderBottomStyle: "solid",
  borderBottomColor: $theme.colors.black,
  display: "list-item",
  textAlign: "left",
  height: "100%",
}));

export const StyledDrawerLink = styled("a", ({ $theme }) => ({
  ...$theme.typography.font100,
  lineHeight: "130%",
  letterSpacing: ".05rem",
  textTransform: "uppercase",
  position: "relative",
  MsFlexPack: "left",
  justifyContent: "left",
  WebkitBoxAlign: "center",
  MsFlexAlign: "center",
  alignItems: "center",
  width: "100%",
  padding: "0 .75rem",
  height: "3.75rem",
  color: $theme.colors.black,
  textAlign: "left",
  border: "none",
  background: "none",
  textDecoration: "none",
  display: "flex",
}));
