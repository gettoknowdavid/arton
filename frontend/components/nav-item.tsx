"use client";

import Link from "next/link";
import {cn} from "@/lib/utils";
import {NavItemT} from "@/config/types";

export type NavItemProps = {
    active: boolean,
    item: NavItemT,
}

export const NavItem = (props: NavItemProps) => {
    const {active, item} = props;

    return (
        <Link
            href={`/${item.slug}`}
            className={cn(
                "font-normal text-xs tracking-wider leading-7 text-foreground uppercase",
                "flex items-center justify-center transition-all duration-500 ease-in-out",
                active ? "underline" : "hover:opacity-40"
            )}
        >
            {item.title}
        </Link>
    );
}