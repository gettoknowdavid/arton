import { styled } from "baseui";

export const StyledFooter = styled("footer", () => ({
  marginTop: "10rem",
  paddingTop: "4rem",
  paddingRight: "2rem",
  paddingLeft: "2rem",
  display: "flex",
  justifyContent: "center",
  borderTop: "1px solid #000",
}));

export const StyledMainFooterList = styled("ul", () => ({
  maxWidth: "1920px",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  margin: "0 auto",
  padding: 0,
  listStyleType: "none",
  textTransform: "uppercase",
}));

export const StyledMainFooterListItem = styled("li", () => ({
  marginRight: "1rem",
  width: "17rem",
}));

export const StyledFooterItemTitle = styled("p", () => ({
  fontSize: "1.167rem",
  fontWeight: 500,
}));

export const StyledSubFooterList = styled("ul", () => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
  fontWeight: 300,
}));

export const StyledFooterBottomBar = styled("div", () => ({
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginTop: "4rem",
  display: "flex",
  justifyContent: "center",
  fontWeight: 300,
}));
