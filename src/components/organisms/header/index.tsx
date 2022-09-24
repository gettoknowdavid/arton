import React from "react";
import { useStyletron } from "baseui";
import { StyledHeader } from "./header.styles";

function Header() {
  const [css, theme] = useStyletron();

  return (
    <StyledHeader>
      <div>This is Arton</div>
    </StyledHeader>
  );
}

export default Header;
