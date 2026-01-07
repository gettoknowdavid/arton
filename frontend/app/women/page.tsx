import React from "react";
import getCategories from "@/lib/queries/get-categories";
import getSizes from "@/lib/queries/get-sizes";
import {ParentCategoryTemplate} from "@/components/ui/parent-category.template";
import getProducts from "@/lib/queries/get-products";
import {ProductList} from "@/components/organisms/product-list";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined | null }>;
}

export default async function WomenPage({searchParams}: PageProps) {
    const params = await searchParams;

    let categorySlugs: string[] | undefined | null;
    let sizeNames: string[] | undefined | null;

    if (params.category) {
        categorySlugs = Array.isArray(params.category) ? params.category : [params.category];
    }

    if (params.size) {
        sizeNames = Array.isArray(params.size) ? params.size : [params.size];
    }

    const sort = typeof params.sort === 'string' ? params.sort : undefined;

    const [products, categories, sizes] = await Promise.all([
        getProducts({gender: "women", categorySlugs, sizeNames, sort}),
        getCategories("women"),
        getSizes("clothing"),
    ]);

    return (
        <ParentCategoryTemplate categories={categories} sizes={sizes}>
            <ProductList products={products}/>
        </ParentCategoryTemplate>
    );
}
