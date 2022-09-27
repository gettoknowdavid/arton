import React from "react";
import { useStyletron } from "baseui";
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
  const [css, theme] = useStyletron();

  return (
    <StyledHeader>
      <div>
        <div>
          <nav>
            <NavList />
          </nav>
        </div>
      </div>
      <StyledHeaderLogo>
        <Link href={"/"}>
          <Image src={logo} alt={"Arton logo"} layout={"fill"} />
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
