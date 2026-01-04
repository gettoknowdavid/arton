"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo= ()=> {
    return (
        <Link href="/" className="flex relative h-10">
            <Image src={'/logo.svg'} alt={"This is Arton logo"} className="object-contain" fill priority />
        </Link>
    );
}

