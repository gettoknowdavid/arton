import { styled } from "baseui";
import { CustomStyledComponent } from "../../../types";

export const StyledNavItem = styled("li", () => ({
  display: "list-item",
}));

export const StyledNavA: any = styled<
  "a",
  { $isActive: boolean },
  CustomStyledComponent
>("a", ({ $theme, $isActive }) => ({
  ...$theme.typography.font100,
  letterSpacing: ".05rem",
  textTransform: "uppercase",
  height: "1.75rem",
  display: "-webkit-inline-box",
  cursor: "pointer",
  WebkitBoxPack: "center",
  MsFlexPack: "center",
  justifyContent: "center",
  WebkitBoxAlign: "center",
  MsFlexAlign: "center",
  alignItems: "center",
  marginRight: "1rem",
  whiteSpace: "nowrap",
  borderRadius: ".25rem",
  border: "1px solid #fff",
  textDecoration: "none",
  color: $isActive ? $theme.colors.mono600 : $theme.colors.mono1000,
  transitionProperty: "color",
  transitionDuration: $theme.animation.timing500,
  ":hover": {
    color: $theme.colors.mono600,
  },
}));
