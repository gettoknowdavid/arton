import { styled } from "baseui";

export const StyledBDHeader = styled("div", ({ $theme }) => ({
  position: "fixed",
  zIndex: 300,
  left: 0,
  right: 0,
  top: 0,
  height: "2.8125rem",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: $theme.colors.black,
  backgroundColor: $theme.colors.mono100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledBDHeading = styled("h1", ({ $theme }) => ({
  ...$theme.typography.font250,
  margin: 0,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

export const StyledBDBody = styled("div", () => ({
  paddingTop: "2.8125rem",
  paddingRight: "1rem",
  paddingLeft: "1rem",
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
  paddingRight: "1rem",
  paddingLeft: "1rem",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: $theme.colors.black,
  backgroundColor: $theme.colors.white,
}));

export const StyledBDSubtotalWrapper = styled("div", ({ $theme }) => ({
  ...$theme.typography.font200,
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledBDSubtotalValue = styled("p", ({ $theme }) => ({
  ...$theme.typography.font400,
  fontWeight: 600,
}));

export const StyledBDFreeShippingText = styled("p", ({ $theme }) => ({
  ...$theme.typography.font100,
  textAlign: "center",
}));
