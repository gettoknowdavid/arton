import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import {
  StyledActionItem,
  StyledHeader,
  StyledHeaderLogo,
  StyledNavList,
} from "./header.styles";
import { MagnifyingGlass, User } from "phosphor-react";
import NavList from "../../molecules/nav-list";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const goHome = () => router.push("/");

  return (
    <StyledHeader>
      <nav>
        <NavList />
      </nav>
      <StyledHeaderLogo onClick={goHome}>
        <Image src={logo} alt={"Arton logo"} layout={"fill"} priority />
      </StyledHeaderLogo>
      <div>
        <StyledNavList>
          <StyledActionItem>
            <User size={18} />
          </StyledActionItem>
          <StyledActionItem>
            <MagnifyingGlass size={18} />
          </StyledActionItem>
        </StyledNavList>
      </div>
    </StyledHeader>
  );
}

export default Header;
