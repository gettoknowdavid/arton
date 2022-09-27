import { styled } from "baseui";

export const StyledLayout = styled("div", () => ({
  maxWidth: "1920px",
  margin: "0 auto",
  width: "100%",
  height: "100%",
  transitionProperty: "all",
  transitionDuration: ".9s",
  transitionTimingFunction: "cubic-bezier(0.1, 0.4, 0.2, 1)",
}));

export const StyledMain = styled("main", ({ $theme }) => ({
  maxWidth: "1920px",
  margin: "0 auto",
  position: "relative",
  width: "100%",
  [$theme.mediaQuery.small]: {},
  [$theme.mediaQuery.medium]: {},
  [$theme.mediaQuery.large]: {},
}));

export const StyledMainBody = styled("div", ({ $theme }) => ({
  paddingLeft: "2rem",
  paddingRight: "2rem",
  maxWidth: "1920px",
  margin: "0 auto",
  position: "relative",
  [$theme.mediaQuery.small]: {},
  [$theme.mediaQuery.medium]: {},
  [$theme.mediaQuery.large]: {},
}));
