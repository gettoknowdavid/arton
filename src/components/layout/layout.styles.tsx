import { styled } from "baseui";

export const StyledLayout = styled("div", () => ({
  maxWidth: "1920px",
  width: "100%",
  height: "100%",
  transitionProperty: "background-color",
  transitionDuration: ".9s",
  transitionTimingFunction: "cubic-bezier(0.1, 0.4, 0.2, 1)",
}));
