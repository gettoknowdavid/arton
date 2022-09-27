import React from "react";
import Link from "next/link";
import { StyledNavItem } from "./nav-item.styles";
import { NavItemType } from "../../../types";

function NavItem({ item }: { item: NavItemType }) {
  return (
    <StyledNavItem>
      <Link href={`/${item.slug}`}>{item.title}</Link>
    </StyledNavItem>
  );
}

export default NavItem;
