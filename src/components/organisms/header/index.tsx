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
import { List, MagnifyingGlass, User, X } from "phosphor-react";
import NavList from "../../molecules/nav-list";
import BagIcon from "../../atoms/bag-icon";
import { Block } from "baseui/block";
import Link from "next/link";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { selectGlobal, toggleDrawer } from "../../../store/slices/global.slice";

function Header() {
  const dispatch = useRootDispatch();
  const { drawerOpen } = useRootSelector(selectGlobal);
  const openDrawer = () => dispatch(toggleDrawer());

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
              <StyledHamburger onClick={openDrawer}>
                {drawerOpen ? <X /> : <List />}
              </StyledHamburger>
            </Block>
          </nav>

          <Block>
            <StyledActionsList>
              <StyledActionItem display={["none", "none", "none", "flex"]}>
                <User />
              </StyledActionItem>
              <StyledActionItem display={["none", "none", "none", "flex"]}>
                <MagnifyingGlass />
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
