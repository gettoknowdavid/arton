import React from "react";
import { List, X } from "phosphor-react";
import { Block } from "baseui/block";
import { StyledHamburger } from "./hamburger.styles";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { selectGlobal, toggleDrawer } from "../../../store/slices/global.slice";

function Hamburger() {
  const dispatch = useRootDispatch();
  const { drawerOpen } = useRootSelector(selectGlobal);
  const openDrawer = () => dispatch(toggleDrawer());

  return (
    <Block display={["flex", "flex", "flex", "none"]}>
      <StyledHamburger onClick={openDrawer}>
        {drawerOpen ? <X /> : <List />}
      </StyledHamburger>
    </Block>
  );
}

export default Hamburger;
