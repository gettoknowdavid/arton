import { styled } from "baseui";

export const StyledNavItem = styled("li", ({ $theme }) => ({
  display: "list-item",
  marginRight: "2.6rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: 400,
  cursor: "pointer",
  transitionProperty: "color",
  transitionDuration: $theme.animation.timing400,
  ":hover": {
    color: $theme.colors.mono600,
  },
}));
