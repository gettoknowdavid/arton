import React from "react";
import { StyledNavList } from "./nav-list.styles";
import config from "../../../config";
import NavItem from "../../atoms/nav-item";
import { NavItemType } from "../../../types";

function NavList() {
  const navList = config.nav;

  return (
    <StyledNavList>
      {navList.map((item: NavItemType) => (
        <NavItem key={item.id} item={item} />
      ))}
    </StyledNavList>
  );
}

export default NavList;
