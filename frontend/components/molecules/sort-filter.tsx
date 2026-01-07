"use client";

import {usePathname, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Check} from "lucide-react";

const SORT_LIST = [
    {id: 0, name: "Price low to high", code: "priceRaw:asc"},
    {id: 1, name: "Price high to low", code: "priceRaw:desc"},
    {id: 2, name: "Oldest to Newest", code: "createdAt:asc"},
    {id: 3, name: "Newest to Oldest", code: "createdAt:desc"},
];

export const SortFilter = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const selectedSortCode = searchParams.get("sort");

    const createSortUrl = useCallback((code: string) => {
        const params = new URLSearchParams(searchParams);

        if (selectedSortCode === code) {
            params.delete("sort");
        } else {
            params.set("sort", code);
        }

        return `${pathname}?${params.toString()}`;
    }, [pathname, searchParams, selectedSortCode]);

    return (
        <div className="flex flex-col gap-3">
            <h1 className="m-0 p-0 uppercase text-sm tracking-wider font-semibold">SORT</h1>
            <ul className="flex flex-col gap-3">
                {SORT_LIST.map((item, index) => {
                    const isSelected = selectedSortCode === item.code;
                    const url = createSortUrl(item.code);
                    return (
                        <li key={index}>
                            <Link
                                href={url}
                                scroll={false}
                                className={cn(
                                    "flex flex-row gap-2 items-center w-full",
                                    "text-xs uppercase tracking-wider cursor-pointer",
                                    isSelected ? "opacity-40" : "hover:opacity-40",
                                )}>
                                {item.name}
                                {isSelected && (<Check className="h-3 w-3" strokeWidth={4}/>)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}