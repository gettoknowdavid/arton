"use client";

import {components} from "@/lib/types/strapi";
import {ProductItem} from "@/components/molecules/product-item";

type Product = components["schemas"]["Product"];

interface Props {
    products: Product[];
}

export const ProductList = (props: Props) => {
    return (
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 lg:gap-y-16 w-full">
            {props.products.map((product: Product) => {
                return (
                    <li key={product.documentId}>
                        <ProductItem product={product}/>
                    </li>
                );
            })}
        </ul>
    );
}