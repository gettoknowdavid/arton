import { styled } from "baseui";

export const StyledHamburger = styled("button", () => ({
  whiteSpace: "normal",
  textAlign: "center",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  userSelect: "none",
  textDecoration: "none",
  margin: "0",
  padding: "0",
  position: "absolute",
  top: ".5rem",
  left: ".5rem",
  width: "1.75rem",
  height: "1.75rem",
  backgroundColor: "transparent",
  border: 0,
  cursor: "pointer",
  zIndex: 109,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
