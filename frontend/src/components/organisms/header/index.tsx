import React from "react";
import {
  StyledActionItem,
  StyledActionsList,
  StyledHeader,
} from "./header.styles";
import NavList from "../../molecules/nav-list";
import CartIcon from "../../atoms/cart-icon";
import Logo from "../../atoms/logo";
import Hamburger from "../../atoms/hamburger";
import { SearchContext, toggleSearchBox } from "../../../contexts/search";
import { MagnifyingGlass } from "phosphor-react";
import { GlobalContext } from "../../../contexts/global.context";

function Header() {
  const { dispatch } = React.useContext(SearchContext);
  const { drawerOpen, closeDrawer } = React.useContext(GlobalContext);
  const handleSearchBox = () => {
    if (drawerOpen) {
      closeDrawer();
    }
    toggleSearchBox({ dispatch });
  };

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
            <StyledActionItem
              display={["none", "none", "none", "flex"]}
              onClick={handleSearchBox}
            >
              Search
            </StyledActionItem>
            <StyledActionItem
              display={["flex", "flex", "flex", "none"]}
              onClick={handleSearchBox}
            >
              <MagnifyingGlass />
            </StyledActionItem>
            <StyledActionItem>
              <CartIcon />
            </StyledActionItem>
          </StyledActionsList>
        </div>
      </StyledHeader>
    </header>
  );
}

export default Header;
