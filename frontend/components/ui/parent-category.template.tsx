"use client";

import React from "react";
import {components} from "@/lib/types/strapi";
import {CategoryFilter} from "@/components/molecules/category-filter";
import {SizeFilter} from "@/components/molecules/size-filter";
import {SortFilter} from "@/components/molecules/sort-filter";

interface Props {
    children: React.ReactNode;
    categories: components["schemas"]["Category"][];
    sizes: components["schemas"]["Size"][];
}

export const ParentCategoryTemplate = (props: Props) => {
    return (
        <div className="h-full w-full px-3 py-20">
            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-[16rem_1fr_16rem] gap-6 h-full w-full">
                {/* Sticky Sidebar */}
                <aside className="sticky top-20 h-fit flex flex-col gap-10">
                    <CategoryFilter categories={props.categories}/>
                    <SizeFilter sizes={props.sizes}/>
                </aside>

                {/* Main Content */}
                <main className="min-h-screen">
                    {props.children}
                </main>

                {/* Sticky Sidebar */}
                <aside className="sticky top-20 h-fit flex flex-col gap-10">
                    <SortFilter/>
                </aside>
            </div>

            {/* Mobile: Stack Layout */}
            <div className="lg:hidden flex flex-col gap-6">
                {/* Collapsible Filters (you can add toggle functionality) */}
                <div className="flex flex-col gap-4">
                    <CategoryFilter categories={props.categories}/>
                    <SizeFilter sizes={props.sizes}/>
                    <SortFilter/>
                </div>

                {/* Main Content */}
                <main className="min-h-screen">
                    {props.children}
                </main>
            </div>
        </div>
    );
}