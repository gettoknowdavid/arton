import React from "react";
import getCategories from "@/lib/queries/get-categories";
import getSizes from "@/lib/queries/get-sizes";
import {ParentCategoryTemplate} from "@/components/ui/parent-category.template";
import getProducts from "@/lib/queries/get-products";
import {ProductList} from "@/components/organisms/product-list";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined | null }>;
}

export default async function MenPage({searchParams}: PageProps) {
    const params = await searchParams;

    // Normalize 'category' to always be an array or undefined
    // If param is 'shirts', it becomes ['shirts']
    // If param is ['shirts', 'pants'], it stays ['shirts', 'pants']
    let categorySlugs: string[] | undefined | null;

    if (params.category) {
        categorySlugs = Array.isArray(params.category) ? params.category : [params.category];
    }

    const [products, categories, sizes] = await Promise.all([
        getProducts({gender: "men", categorySlugs}),
        getCategories("men"),
        getSizes("clothing"),
    ]);

    return (
        <ParentCategoryTemplate categories={categories} sizes={sizes}>
            <ProductList products={products}/>
        </ParentCategoryTemplate>
    );
}
