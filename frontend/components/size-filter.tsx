"use client";

import {use} from "react";
import {components} from "@/lib/types/strapi";

interface SizeFilterProps {
    sizes: Promise<components["schemas"]["Size"][]>;
}

export const SizeFilter = (props: SizeFilterProps) => {
    const sizes = use(props.sizes);
    return (
        <div className="flex flex-col gap-3">
            <h1 className="m-0 p-0 uppercase text-sm tracking-wider font-semibold">Sizes</h1>
            <ul className="flex flex-col gap-3">
                {sizes.map((size, index) => {
                    return (
                        <li key={index} className="text-xs uppercase cursor-pointer hover:opacity-40">
                            {size.name} - {size.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
