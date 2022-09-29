import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import {
  StyledActionItem,
  StyledHeader,
  StyledHeaderLogo,
  StyledNavList,
} from "./header.styles";
import Link from "next/link";
import { MagnifyingGlass, User } from "phosphor-react";
import NavList from "../../molecules/nav-list";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <NavList />
      </nav>
      <StyledHeaderLogo>
        <Link href={"/"} passHref>
          <a>
            <Image src={logo} alt={"Arton logo"} layout={"fill"} />
          </a>
        </Link>
      </StyledHeaderLogo>
      <div>
        <StyledNavList>
          <StyledActionItem>
            <User size={18} weight="duotone" />
          </StyledActionItem>
          <StyledActionItem>
            <MagnifyingGlass size={18} weight="duotone" />
          </StyledActionItem>
        </StyledNavList>
      </div>
    </StyledHeader>
  );
}

export default Header;
