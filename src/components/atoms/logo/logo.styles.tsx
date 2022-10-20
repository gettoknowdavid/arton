import { styled } from "baseui";

export const StyledLogo = styled("div", ({ $theme }) => ({
  display: "block",
  height: "2rem",
  left: "50%",
  position: "absolute",
  transform: "translateX(-50%)",
  WebkitTransform: "translateX(-50%)",
  width: "7.7rem",
  zIndex: 200,
  [$theme.mediaQuery.medium]: { height: "2.8125rem", width: "8.5625rem" },
  [$theme.mediaQuery.large]: { height: "2.8125rem", width: "8.5625rem" },
}));
