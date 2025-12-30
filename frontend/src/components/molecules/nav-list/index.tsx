import React from "react";
import { StyledNavList } from "./nav-list.styles";
import config from "../../../config";
import NavItem from "../../atoms/nav-item";
import { NavItemType } from "../../../types";
import { Block } from "baseui/block";

function NavList() {
  const navList = config.nav;

  return (
    <Block display={["none", "none", "none", "flex"]}>
      <StyledNavList>
        {navList.map((item: NavItemType) => (
          <NavItem key={item.id} item={item} />
        ))}
      </StyledNavList>
    </Block>
  );
}

export default NavList;
