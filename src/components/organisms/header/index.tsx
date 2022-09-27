import React from "react";
import { useStyletron } from "baseui";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import {
  StyledActionItem,
  StyledHeader,
  StyledHeaderLogo,
  StyledNavItem,
} from "./header.styles";
import Link from "next/link";
import { MagnifyingGlass, User } from "phosphor-react";

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
                <Link href={"/new-arrivals"}>New Arrivals</Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href={"/women"}>Women</Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href={"/men"}>Men</Link>
              </StyledNavItem>
            </ul>
          </nav>
        </div>
      </div>
      <StyledHeaderLogo>
        <Link href={"/"}>
          <Image src={logo} alt={"Arton logo"} layout={"fill"} />
        </Link>
      </StyledHeaderLogo>
      <div>
        <ul
          className={css({
            margin: 0,
            padding: 0,
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
          })}
        >
          <StyledActionItem>
            <User size={18} weight="duotone" />
          </StyledActionItem>
          <StyledActionItem>
            <MagnifyingGlass size={18} weight="duotone" />
          </StyledActionItem>
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
