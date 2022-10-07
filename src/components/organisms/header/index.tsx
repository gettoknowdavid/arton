import React from "react";
import {
  StyledActionItem,
  StyledActionsList,
  StyledHeader,
} from "./header.styles";
import NavList from "../../molecules/nav-list";
import BagIcon from "../../atoms/cart-icon";
import Logo from "../../atoms/logo";
import Hamburger from "../../atoms/hamburger";

function Header() {
  return (
    <header>
      <StyledHeader>
        <Logo />

        <nav>
          <NavList />
          <Hamburger />
        </nav>

        <div>
          <StyledActionsList>
            <StyledActionItem display={["none", "none", "none", "flex"]}>
              Login
            </StyledActionItem>
            <StyledActionItem display={["none", "none", "none", "flex"]}>
              Search
            </StyledActionItem>
            <StyledActionItem>
              <BagIcon />
            </StyledActionItem>
          </StyledActionsList>
        </div>
      </StyledHeader>
    </header>
  );
}

export default Header;
