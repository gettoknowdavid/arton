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

export const StyledBody = styled("body", ({ $theme }) => ({
  maxWidth: "1920px",
  margin: "0 auto",
  position: "relative",
  width: "100%",
  backgroundColor: $theme.colors.white,
  color: $theme.colors.black,
  fontFamily: "'Inter Tight',Helvetica Neue,Helvetica,Arial,sans-serif",
  fontSize: ".875rem",
  fontWeight: 400,
  lineHeight: "140%",
  letterSpacing: 0,
  [$theme.mediaQuery.small]: {},
  [$theme.mediaQuery.medium]: {},
  [$theme.mediaQuery.large]: {},
}));
