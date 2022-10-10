import { styled } from "baseui";
import { CustomStyledComponent } from "../../types";

export const StyledPBackButtonWrapper = styled("div", ({ $theme }) => ({
  zIndex: 200,
  position: "relative",
  marginTop: "2.8125rem",
  height: "2.8125rem",
  padding: "0.75rem 0.75rem",
  [$theme.mediaQuery.large]: {
    position: "absolute",
    top: "2.8125rem",
    marginTop: 0,
    marginLeft: 0,
  },
}));

export const StyledPMainBodyWrapper = styled("div", ({ $theme }) => ({
  marginTop: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [$theme.mediaQuery.large]: { marginTop: 0, height: "100vh" },
}));

export const StyledPDetailsWrapper = styled("div", () => ({
  width: "36rem",
  height: "100%",
  paddingLeft: "6rem",
  paddingBottom: "2rem",
  marginRight: "10rem",
  display: "flex",
  justifyContent: "stretch",
  alignItems: "flex-end",
}));

export const StyledPTitle = styled("h1", () => ({
  fontWeight: 400,
  fontSize: "1.5rem",
  lineHeight: "2rem",
  textTransform: "uppercase",
  marginTop: 0,
  marginBottom: "1rem",
}));

export const StyledPParagraph = styled<
  "p",
  { $upperCase?: boolean; $fontWeight?: number | string },
  CustomStyledComponent
>("p", ({ $upperCase = false, $fontWeight = 300 }) => ({
  fontWeight: $fontWeight,
  textTransform: $upperCase ? "uppercase" : undefined,
}));

export const StyledPDetailHeading = styled("h1", () => ({
  fontSize: "1.2rem",
  fontWeight: 400,
  textTransform: "uppercase",
  margin: 0,
  padding: 0,
}));

export const StyledPDetailSubHeading = styled("p", () => ({
  fontWeight: 300,
  margin: 0,
  padding: 0,
}));
