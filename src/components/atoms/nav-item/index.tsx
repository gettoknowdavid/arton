import React from "react";
import Link from "next/link";
import { StyledNavA, StyledNavItem } from "./nav-item.styles";
import { NavItemType } from "../../../types";
import { useRouter } from "next/router";

function NavItem({ item }: { item: NavItemType }) {
  const router = useRouter();

  return (
    <StyledNavItem>
      <Link href={`/${item.slug}`}>
        <StyledNavA $isActive={router.pathname === `/${item.slug}`}>
          {item.title}
        </StyledNavA>
      </Link>
    </StyledNavItem>
  );
}

export default NavItem;
