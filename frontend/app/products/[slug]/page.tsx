import getProduct from "@/lib/queries/get-product";
import getProducts from "@/lib/queries/get-products";
import {BackButton} from "@/components/atoms/back-button";
import BlockRendererClient from "@/components/atoms/block-renderer-client";
import {Button} from "@/components/ui/button";
import React from "react";
import {BlocksContent} from "@strapi/blocks-react-renderer";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {ProductImageList} from "@/components/organisms/product-image-list";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const products = await getProducts({gender: "women"});
    return products.map((product) => ({slug: product.slug}));
}

export default async function ProductDetailsPage({params}: PageProps) {
    const {slug} = await params;
    const product = await getProduct(slug);

    if (!product) return <div>No product found!</div>;

    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const description: BlocksContent = product.description as BlocksContent;
    const details: BlocksContent = product.details as BlocksContent;
    const hasPanelInfo = product.panelInformation && product.panelInformation.length > 0;

    return (
        <div className="relative pt-12 flex flex-col justify-center h-full lg:h-screen">
            <div className="absolute top-16 z-50">
                <BackButton/>
            </div>

            <div className="flex h-full w-full items-center justify-center">
                <div className="grid w-full grid-cols-1 lg:grid-cols-37 h-full">
                    <div className="relative h-full w-full col-span-24 border-r border-foreground">
                        <ProductImageList images={product.images}/>
                    </div>

                    <div className="w-full lg:col-span-13 overflow-hidden relative">
                        <div className="h-full w-full overflow-y-auto flex justify-center px-3 py-16 no-scrollbar">
                            <div className="flex w-full flex-col lg:max-w-sm gap-2 mt-auto">
                                <p className="text-sm font-medium tracking-wider flex">
                                    {currencyFormatter.format(product.price)}
                                </p>

                                <h1 className="font-semibold uppercase leading-tight">
                                    {product.name}
                                </h1>

                                <div className="text-sm font-normal text-justify leading-snug">
                                    <BlockRendererClient content={description}/>
                                </div>

                                <div className="mt-4 flex flex-col items-end w-full">
                                    <div
                                        className="w-full border-y border-foreground/30 py-1.5 text-sm uppercase">
                                        Size: XS - EXTRA SMALL
                                    </div>
                                    <Button size="sm" variant="link" className="text-sm font-light p-0 m-0">
                                        Size Guide
                                    </Button>
                                </div>

                                <Button className="text-sm uppercase rounded-none w-full py-5 mt-4">
                                    Add to Cart
                                </Button>

                                <div className="mt-5">
                                    <Accordion type="multiple" className="">
                                        <AccordionItem value="product-details">
                                            <AccordionTrigger className="uppercase">
                                                Details
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-4">
                                                <BlockRendererClient content={details}/>
                                                <ul className="flex w-full justify-between p-0 mt-3 font-regular text-sm">
                                                    <p className="uppercase">Brand: LV</p>
                                                    <p className="uppercase">Colour: {product.color}</p>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        {hasPanelInfo && <>
                                            {product.panelInformation!.map((information, index) => {
                                                const intro: BlocksContent = information.introduction as BlocksContent;
                                                const desc: BlocksContent = information.description as BlocksContent;
                                                return (
                                                    <AccordionItem value={information.type!} key={index}>
                                                        <AccordionTrigger className="uppercase">
                                                            {information.title!}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="pt-4 flex flex-col gap-2">
                                                            <BlockRendererClient content={intro}/>
                                                            <BlockRendererClient content={desc}/>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                );
                                            })}
                                        </>}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}