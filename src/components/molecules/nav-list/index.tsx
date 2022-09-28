import React from "react";
import { StyledNavList } from "./nav-list.styles";
import config from "../../../config";
import NavItem from "../../atoms/nav-item";
import { NavItemType } from "../../../types";
import { AnimateSharedLayout } from "framer-motion";

function NavList() {
  const navList = config.nav;

  return (
    <AnimateSharedLayout>
      <StyledNavList>
        {navList.map((item: NavItemType) => (
          <NavItem key={item.id} item={item} />
        ))}
      </StyledNavList>
    </AnimateSharedLayout>
  );
}

export default NavList;
