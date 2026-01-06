import React from "react";
import getCategories from "@/lib/queries/get-categories";
import getSizes from "@/lib/queries/get-sizes";
import {ParentCategoryTemplate} from "@/components/ui/parent-category.template";
import getProducts from "@/lib/queries/get-products";
import {ProductList} from "@/components/organisms/product-list";

export default async function MenPage() {
    const products = await getProducts({gender: "men"});

    const categories = getCategories("men");
    const sizes = getSizes("clothing");

    return (
        <ParentCategoryTemplate categories={categories} sizes={sizes}>
            <ProductList products={products}/>
        </ParentCategoryTemplate>
    );
}
