"use client";

import {ActionItemT} from "@/config/types";
import {usePathname} from "next/navigation";
import {SearchIcon, ShoppingCart} from "lucide-react";
import {cn} from "@/lib/utils";

export type ActionsProps = {
    items: ActionItemT[]
}

export const Actions = (props: ActionsProps) => {
    const pathname = usePathname();

    return (
        <div className="flex flex-row items-center gap-4">
            <Search/>
            <CartButton/>
        </div>
    );
}

const Search = () => {
    return (
        <div
            className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-40 transition-all duration-500 ease-in-out">
            <SearchIcon className="flex lg:hidden"/>
            <p
                className={cn(
                    "font-normal text-sm tracking-wider leading-7 text-foreground uppercase",
                    "hidden lg:flex items-center justify-center transition-colors duration-500 ease-in-out",
                )}
            >
                Search
            </p>
        </div>
    );
}


const CartButton = () => {
    return (
        <div
            className="flex flex-row items-center justify-center w-full h-full gap-0.5 cursor-pointer hover:opacity-40 transition-all duration-500 ease-in-out">
            <ShoppingCart className="flex lg:hidden"/>
            <p
                className={cn(
                    "font-normal text-sm tracking-wider leading-7 text-foreground uppercase",
                    "hidden lg:flex items-center justify-center transition-colors duration-500 ease-in-out",
                )}
            >
                CART
            </p>
            <span
                className="bg-foreground text-background text-[9px] font-medium flex items-center justify-center h-3 w-4">
              2
            </span>
        </div>
    );
}