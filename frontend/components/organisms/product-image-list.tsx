"use client";

import React from "react";
import getSanitizedStrapiUrl from "@/lib/strapi-image";
import Image from "next/image";
import {components} from "@/lib/types/strapi";

export const ProductImageList = ({images}: { images: components["schemas"]["Product"]["images"] }) => {
    return (
        <ul className="hidden lg:flex flex-row-reverse gap-px bg-foreground w-[calc(((100% - 0px) / 1) - 0.5px)] float-right overflow-auto whitespace-nowrap absolute left-0 top-0 right-0 bottom-0 no-scrollbar">
            {images.map((image, index) => {
                const imageUrl = getSanitizedStrapiUrl(image.url);
                return (
                    <li key={index}
                        className="aspect-12/16 h-full w-full relative bg-[url('/product-image-bg.png')]">
                        <Image
                            src={imageUrl!}
                            alt={image?.name || `${index}`}
                            fill
                            className="object-cover"
                        />
                    </li>
                );
            })}
        </ul>
    );
}