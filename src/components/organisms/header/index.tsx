import React from "react";
import { useStyletron } from "baseui";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { StyledHeader, StyledHeaderLogo, StyledNavItem } from "./header.styles";

function Header() {
  const [css, theme] = useStyletron();

  return (
    <StyledHeader>
      <div>
        <div>
          <nav className={css({})}>
            <ul
              className={css({
                margin: 0,
                padding: 0,
                listStyleType: "none",
                display: "flex",
              })}
            >
              <StyledNavItem>
                <a>New Arrivals</a>
              </StyledNavItem>
              <StyledNavItem>
                <a>Women</a>
              </StyledNavItem>
              <StyledNavItem>
                <a>Men</a>
              </StyledNavItem>
            </ul>
          </nav>
        </div>
      </div>
      <StyledHeaderLogo>
        <Image src={logo} alt={"Arton logo"} layout={"fill"} />
      </StyledHeaderLogo>
      <div>This is Arton</div>
    </StyledHeader>
  );
}

export default Header;
