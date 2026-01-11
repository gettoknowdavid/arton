"use client";

import {components} from "@/lib/types/strapi";
import {usePathname, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Check} from "lucide-react";

interface SizeFilterProps {
    sizes: components["schemas"]["Size"][];
}

export const SizeFilter = (props: SizeFilterProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const selectedSizes = searchParams.getAll("size");

    const createFilterUrl = useCallback((slug: string) => {
        const params = new URLSearchParams(searchParams);
        params.delete("size");

        const isSelected = selectedSizes.includes(slug);
        let newSizes: string[];

        if (isSelected) {
            newSizes = selectedSizes.filter(s => s !== slug);
        } else {
            newSizes = [...selectedSizes, slug];
        }

        newSizes.forEach((size) => params.append("size", size));
        return `${pathname}?${params.toString()}`;
    }, [pathname, searchParams, selectedSizes]);

    return (
        <div className="flex flex-col gap-3">
            <h1 className="m-0 p-0 uppercase tracking-wider font-semibold">Sizes</h1>
            <ul className="flex flex-col gap-3">
                {props.sizes.map((size, index) => {
                    const isSelected = selectedSizes.includes(size.name);
                    const url = createFilterUrl(size.name);

                    return (
                        <li key={index} className="text-sm uppercase cursor-pointer hover:opacity-40">
                            <Link
                                href={url}
                                scroll={false}
                                className={cn(
                                    "flex flex-row gap-2 items-center w-full",
                                    "text-sm uppercase cursor-pointer",
                                    isSelected ? "opacity-40" : "hover:opacity-40",
                                )}
                            >
                                {size.name} - {size.label}
                                {isSelected && (<Check className="h-3 w-3" strokeWidth={4}/>)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
