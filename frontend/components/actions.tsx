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
                    "font-normal text-xs tracking-wider leading-7 text-foreground uppercase",
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
            <div
                className={cn(
                    "font-normal text-xs tracking-wider uppercase",
                    "hidden lg:flex gap-1 items-center justify-center transition-colors duration-500 ease-in-out",
                    // "bg-foreground text-background px-2 py-1"
                )}
            >
                <p>CART</p>
                <p className="bg-foreground text-background h-3.5 w-4 flex items-center justify-center font-medium text-[9px]">
                    2
                </p>
            </div>
        </div>
    );
}