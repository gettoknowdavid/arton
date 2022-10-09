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
}));

export const StyledPIPrice = styled("p", ({ $theme }) => ({
  ...$theme.typography.font100,
  lineHeight: "1.3rem",
  marginTop: "4px",
  marginBottom: 0,
  height: "1rem",
  textTransform: "uppercase",
  textAlign: "right",
}));
