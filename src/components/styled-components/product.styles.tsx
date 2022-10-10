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

export const StyledPDetailsWrapper = styled("div", ({ $theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "stretch",
  paddingTop: "1rem",
  paddingRight: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  [$theme.mediaQuery.large]: {
    marginTop: 0,
    paddingLeft: "6rem",
    width: "36rem",
    marginRight: "12rem",
    alignItems: "flex-end",
  },
}));

export const StyledPTitle = styled("h1", ({ $theme }) => ({
  ...$theme.typography.font300,
  fontWeight: 600,
  textTransform: "uppercase",
  lineHeight: "1.3rem",
}));

export const StyledPParagraph = styled<
  "p",
  { $upperCase?: boolean; $fontWeight?: number | string },
  CustomStyledComponent
>("p", ({ $theme, $upperCase = false, $fontWeight = 300 }) => ({
  ...$theme.typography.font100,
  fontWeight: $fontWeight,
  textTransform: $upperCase ? "uppercase" : undefined,
  lineHeight: "1.1rem",
}));

export const StyledPDetailHeading = styled("h1", ({ $theme }) => ({
  ...$theme.typography.font250,
  textTransform: "uppercase",
  marginTop: 0,
  marginBottom: "0.25rem",
  padding: 0,
}));

export const StyledPDetailSubHeading = styled("p", ({ $theme }) => ({
  ...$theme.typography.font100,
  fontWeight: 300,
  margin: 0,
  padding: 0,
}));
