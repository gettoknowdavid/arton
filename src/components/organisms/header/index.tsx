import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import {
  StyledActionItem,
  StyledActionsList,
  StyledHamburger,
  StyledHeader,
  StyledHeaderLogo,
} from "./header.styles";
import { List, MagnifyingGlass, User } from "phosphor-react";
import NavList from "../../molecules/nav-list";
import { useRouter } from "next/router";
import BagIcon from "../../atoms/bag-icon";
import { Block } from "baseui/block";
import { useStyletron } from "styletron-react";
import Link from "next/link";

function Header() {
  const router = useRouter();
  const [css] = useStyletron();

  return (
    <header>
      <div>
        <StyledHeader>
          {/* Logo */}
          <StyledHeaderLogo>
            <Link href={"/"}>
              <a>
                <h1>
                  <Image
                    src={logo}
                    alt={"Arton logo"}
                    layout={"fill"}
                    priority
                  />
                </h1>
              </a>
            </Link>
          </StyledHeaderLogo>

          {/* Main Nav */}
          <nav>
            {/* Nav list */}
            <Block display={["none", "none", "none", "flex"]}>
              <NavList />
            </Block>

            {/* Hamburger */}
            <Block display={["flex", "flex", "flex", "none"]}>
              <StyledHamburger>
                <List size={32} />
              </StyledHamburger>
            </Block>
          </nav>

          <Block>
            <StyledActionsList>
              <StyledActionItem>
                <User size={18} />
              </StyledActionItem>
              <StyledActionItem>
                <MagnifyingGlass size={18} />
              </StyledActionItem>
              <StyledActionItem>
                <BagIcon />
              </StyledActionItem>
            </StyledActionsList>
          </Block>
        </StyledHeader>
      </div>
    </header>
  );
}

export default Header;
