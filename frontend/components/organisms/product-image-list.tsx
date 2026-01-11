"use client";

import React from "react";
import getSanitizedStrapiUrl from "@/lib/strapi-image";
import Image from "next/image";
import {components} from "@/lib/types/strapi";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"

export const ProductImageList = ({images}: { images: components["schemas"]["Product"]["images"] }) => {
    return (
        <div>
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

            <Carousel opts={{align: "center"}}
                      className="max-w-sm md:max-w-full w-full flex lg:hidden h-[50vh] lg:h-full  bg-pink-400 relative overflow-hidden">
                <CarouselContent className="md:basis-1/3 h-[50vh] px-3.5">
                    {images.map((image, index) => {
                        const imageUrl = getSanitizedStrapiUrl(image.url);
                        return (
                            <CarouselItem key={index} className="aspect-12/16 h-full relative flex items-center">
                                <Image
                                    alt={image.name || `${index}`}
                                    className="object-cover"
                                    fill
                                    src={imageUrl!}
                                />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}