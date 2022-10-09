import { styled } from "baseui";

export const StyledPIImageWrapper = styled("div", ({ $theme }) => ({
  aspectRatio: 12 / 16,
  cursor: "pointer",
  position: "relative",
  backgroundColor: $theme.colors.mono200,
}));

export const StyledPITitle = styled("p", ({ $theme }) => ({
  ...$theme.typography.font100,
  textTransform: "uppercase",
  lineHeight: "1.3rem",
  height: "1rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  lineClamp: 1,
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  marginTop: "4px",
  marginBottom: 0,
  padding: 0,
  [$theme.mediaQuery.small]: { fontSize: "0.563rem" },
  [$theme.mediaQuery.medium]: { fontSize: "0.625rem" },
  [$theme.mediaQuery.large]: { fontSize: "0.75rem" },
}));

export const StyledPIPrice = styled("p", ({ $theme }) => ({
  ...$theme.typography.font100,
  lineHeight: "1.3rem",
  marginTop: "4px",
  marginBottom: 0,
  height: "1rem",
  textTransform: "uppercase",
  [$theme.mediaQuery.small]: { fontSize: "0.563rem", textAlign: "left" },
  [$theme.mediaQuery.medium]: { fontSize: "0.625rem", textAlign: "right" },
  [$theme.mediaQuery.large]: { fontSize: "0.75rem", textAlign: "right" },
}));
