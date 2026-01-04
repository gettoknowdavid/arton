"use client";

import {NavItemT} from "@/config/types";
import {NavItem} from "@/components/nav-item";
import {usePathname} from "next/navigation";
import {TextAlignJustify} from "lucide-react";

export type NavProps = {
    items: NavItemT[]
}

export const Nav = (props: NavProps) => {
    const pathname = usePathname();

    return (
        <div>
            <div className="hidden lg:flex">
                <ul className="flex flex-row items-center gap-4">
                    {props.items.map(item => {
                        const active = pathname.includes(`/${item.slug}`);
                        return (
                            <li key={item.id}>
                                <NavItem active={active} item={item}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex lg:hidden">
                <TextAlignJustify/>
            </div>
        </div>
    );
}