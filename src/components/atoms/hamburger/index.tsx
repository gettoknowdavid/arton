import React from "react";
import { List, X } from "phosphor-react";
import { Block } from "baseui/block";
import { StyledHamburger } from "./hamburger.styles";
import { GlobalContext } from "../../../contexts/global.context";

function Hamburger() {
  return (
    <GlobalContext.Consumer>
      {({ toggleDrawer, drawerOpen }) => (
        <Block display={["flex", "flex", "flex", "none"]}>
          <StyledHamburger onClick={toggleDrawer}>
            {drawerOpen ? <X /> : <List />}
          </StyledHamburger>
        </Block>
      )}
    </GlobalContext.Consumer>
  );
}

export default Hamburger;
