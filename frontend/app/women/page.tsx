import React from "react";
import getCategories from "@/lib/get-categories";
import getSizes from "@/lib/get-sizes";
import {ParentCategoryTemplate} from "@/components/ui/parent-category.template";

export default async function WomenPage() {
    const categories = getCategories("women");
    const sizes = getSizes("clothing");
    return (
        <ParentCategoryTemplate categories={categories} sizes={sizes}>
            Women
        </ParentCategoryTemplate>
    );
}
