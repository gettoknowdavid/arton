import React from "react";
import { useStyletron } from "baseui";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { StyledHeader, StyledHeaderLogo } from "./header.styles";

function Header() {
  const [css, theme] = useStyletron();

  return (
    <StyledHeader>
      <div>This is Arton</div>
      <StyledHeaderLogo>
        <Image src={logo} alt={"Arton logo"} layout={"fill"} />
      </StyledHeaderLogo>
    </StyledHeader>
  );
}

export default Header;
