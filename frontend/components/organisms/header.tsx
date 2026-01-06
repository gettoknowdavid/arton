import {siteConfig} from "@/config/site";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Nav} from "@/components/molecules/nav";
import {Actions} from "@/components/molecules/actions";

export const Header = () => {
    return (
        <header
            className={cn(
                "flex flex-row items-center justify-between w-full h-12 fixed top-0 z-50",
                "text-foreground bg-background border-b border-foreground",
                "px-3 py-0"
            )}
        >
            <nav className="flex flex-row items-center justify-between w-full h-full gap-5">
                <Nav items={siteConfig.navItems}/>

                <div className="absolute z-50 h-8 md:h-10 w-40 -translate-x-1/2 left-1/2">
                    <Link href="/">
                        <Image src={'/logo.svg'} alt={"This is Arton logo"} fill/>
                    </Link>
                </div>

                <Actions/>
            </nav>
        </header>
    );
}