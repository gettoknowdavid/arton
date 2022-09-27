import React from "react";
import Link from "next/link";
import { StyledNavItem } from "./nav-item.styles";
import { NavItemType } from "../../../types";
import { useRouter } from "next/router";

function NavItem({ item }: { item: NavItemType }) {
  const router = useRouter();

  return (
    <StyledNavItem $isActive={router.pathname === `/${item.slug}`}>
      <Link href={`/${item.slug}`}>{item.title}</Link>
    </StyledNavItem>
  );
}

export default NavItem;
