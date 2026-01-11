import {components} from "@/lib/types/strapi";
import getSanitizedStrapiUrl from "@/lib/strapi-image";
import Image from "next/image";
import {currencyFormatter} from "@/lib/currency-formatter";
import Link from "next/link";

interface Props {
    product: components["schemas"]["Product"];
}

export const ProductItem = (props: Props) => {
    const imageUrl = getSanitizedStrapiUrl(props.product.image.url);
    const formattedCurrency = currencyFormatter().format(props.product.price);
    return (
        <Link href={`/products/${props.product.slug}`}>
            <div className="flex flex-col gap-2 cursor-pointer">
                <div className="relative aspect-12/16 bg-[url('/product-image-bg.png')] bg-cover">
                    {imageUrl && (
                        <Image
                            alt={props.product.image.name || 'Front View'}
                            className="object-contain"
                            fill
                            priority
                            src={imageUrl}
                        />
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm tracking-wider uppercase overflow-hidden text-ellipsis line-clamp-1 leading-none">
                        {props.product.name}
                    </p>
                    <p className="text-sm uppercase overflow-hidden text-ellipsis line-clamp-1 leading-none">
                        {formattedCurrency}
                    </p>
                </div>
            </div>
        </Link>
    );
}