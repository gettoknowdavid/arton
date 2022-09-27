import { styled, Theme } from "baseui";

type CustomTheme = Theme & { extraProp: string };

export const StyledNavItem: any = styled<
  "li",
  { $isActive: boolean },
  CustomTheme
>("li", ({ $theme, $isActive }) => ({
  display: "list-item",
  marginRight: "2.6rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: 400,
  cursor: "pointer",
  color: $isActive ? $theme.colors.mono600 : $theme.colors.mono1000,
  transitionProperty: "color",
  transitionDuration: $theme.animation.timing400,
  ":hover": {
    color: $theme.colors.mono600,
  },
}));
