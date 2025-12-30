import { styled } from "baseui";

export const StyledFooter = styled("footer", ({ $theme }) => ({
  ...$theme.typography.font100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: $theme.colors.black,
  letterSpacing: "1px",
  textTransform: "uppercase",
  [$theme.mediaQuery.small]: { height: "100vh", marginTop: "2.8125rem" },
  [$theme.mediaQuery.medium]: { height: "100%", marginTop: "2.8125rem" },
  [$theme.mediaQuery.large]: { height: "100%", marginTop: 0 },
}));
