import React from "react";
import { StyledNavList } from "./nav-list.styles";
import config from "../../../config";
import NavItem, { NavItemType } from "../../atoms/nav-item";

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
