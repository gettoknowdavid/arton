"use client";

import {use} from "react";
import {components} from "@/lib/types/strapi";

interface CategoryFilterProps {
    categories: Promise<components["schemas"]["Category"][]>;
}

export const CategoryFilter = (props: CategoryFilterProps) => {
    const categories = use(props.categories);
    return (
        <div className="flex flex-col gap-3">
            <h1 className="m-0 p-0 uppercase text-sm tracking-wider font-semibold">Categories</h1>
            <ul className="flex flex-col gap-3">
                {categories.map((category, index) => {
                    return (
                        <li key={index}
                            className="text-xs uppercase tracking-wider cursor-pointer hover:opacity-40">
                            {category.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
