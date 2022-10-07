import { styled } from "baseui";

export const StyledLayout = styled("div", ({ $theme }) => ({
  ...$theme.typography.font100,
  maxWidth: "1920px",
  margin: "0 auto",
  width: "100%",
  height: "100%",
  transitionProperty: "all",
  transitionDuration: ".9s",
  transitionTimingFunction: "cubic-bezier(0.1, 0.4, 0.2, 1)",
  position: "relative",
  backgroundColor: $theme.colors.white,
  color: $theme.colors.black,
  lineHeight: "140%",
  letterSpacing: 0,
}));
