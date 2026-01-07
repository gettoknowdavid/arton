"use client";

import {useCallback} from "react";
import {components} from "@/lib/types/strapi";
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Check} from "lucide-react";

interface CategoryFilterProps {
    categories: components["schemas"]["Category"][];
}

export const CategoryFilter = (props: CategoryFilterProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const selectedCategories = searchParams.getAll("category");

    const createFilterUrl = useCallback((slug: string) => {
        const params = new URLSearchParams(searchParams);

        // Clear the current categories to rebuild the list cleanly
        params.delete("category");

        // Determine the new list of categories
        const isSelected = selectedCategories.includes(slug);
        let newCategories: string[];

        if (isSelected) {
            // Remove it (Toggle OFF)
            newCategories = selectedCategories.filter((c) => c !== slug);
        } else {
            // Add it (Toggle ON)
            newCategories = [...selectedCategories, slug];
        }

        // Append each category back to the params
        // Result: ?category=shirts&category=pants
        newCategories.forEach((cat) => params.append("category", cat));

        return `${pathname}?${params.toString()}`;
    }, [searchParams, pathname, selectedCategories]);

    return (
        <div className="flex flex-col gap-3">
            <h1 className="m-0 p-0 uppercase text-sm tracking-wider font-semibold">Categories</h1>
            <ul className="flex flex-col gap-2">
                {props.categories.map((category, index) => {
                    const isSelected = selectedCategories.includes(category.slug);
                    const url = createFilterUrl(category.slug);

                    return (
                        <li key={index}>
                            <Link
                                href={url}
                                scroll={false}
                                className={cn(
                                    "flex flex-row gap-2 items-center w-full",
                                    "text-xs uppercase tracking-wider cursor-pointer",
                                    isSelected ? "opacity-40" : "hover:opacity-40",
                                )}
                            >
                                {category.name}
                                {isSelected && (<Check className="h-3 w-3" strokeWidth={4}/>)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
