import { styled } from "baseui";

export const StyledBDHeader = styled("div", ({ $theme }) => ({
  position: "fixed",
  zIndex: 300,
  left: 0,
  right: 0,
  top: 0,
  height: "3rem",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: $theme.colors.mono1000,
  backgroundColor: $theme.colors.mono100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledBDHeading = styled("h1", () => ({
  fontSize: "1.3rem",
  margin: 0,
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

export const StyledBDBody = styled("div", () => ({
  paddingTop: "3rem",
  paddingRight: "2rem",
  paddingLeft: "2rem",
  maxHeight: "calc(100vh - 5rem)",
  height: "100%",
  position: "relative",
}));

export const StyledCartList = styled("ul", () => ({
  paddingLeft: 0,
  paddingBottom: "16rem",
}));

export const StyledBDFooter = styled("div", ({ $theme }) => ({
  position: "fixed",
  zIndex: 300,
  bottom: 0,
  right: 0,
  left: 0,
  paddingRight: "2rem",
  paddingLeft: "2rem",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: $theme.colors.mono1000,
  backgroundColor: $theme.colors.mono100,
}));

export const StyledBDSubtotalWrapper = styled("div", () => ({
  fontSize: "1.2rem",
  fontWeight: 400,
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledBDSubtotalValue = styled("p", () => ({
  fontSize: "1.6rem",
}));

export const StyledBDFreeShippingText = styled("p", ({ $theme }) => ({
  textAlign: "center",
  ...$theme.typography.font100,
}));
