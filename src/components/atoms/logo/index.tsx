import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { StyledLogo } from "./logo.styles";

function Logo() {
  return (
    <StyledLogo>
      <Link href={"/"}>
        <a>
          <h1>
            <Image src={logo} alt={"Arton logo"} layout={"fill"} priority />
          </h1>
        </a>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
