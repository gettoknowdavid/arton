import {components} from "@/lib/types/strapi";
import getSanitizedStrapiUrl from "@/lib/strapi-image";
import Image from "next/image";
import {currencyFormatter} from "@/lib/currency-formatter";
import Link from "next/link";

type Product = components["schemas"]["Product"];

interface Props {
    product: Product;
    showPrice?: boolean;
    aspectRatio?: number;
    onClick?: () => void;
}

export const ProductItem = ({product, showPrice = true, aspectRatio, onClick}: Props) => {
    const imageUrl = getSanitizedStrapiUrl(product.image.url);
    const formattedCurrency = currencyFormatter().format(product.price);
    return (
        <Link href={`/products/${product.slug}`} onClick={onClick}>
            <div className="flex flex-col gap-2 cursor-pointer">
                <div
                    className="relative bg-[url('/product-image-bg.png')] bg-cover"
                    style={{aspectRatio: aspectRatio || 12 / 16}}
                >
                    {imageUrl && (
                        <Image
                            alt={product.image.name || 'Front View'}
                            className="object-contain"
                            fill
                            priority
                            src={imageUrl}
                        />
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm tracking-wider uppercase overflow-hidden text-ellipsis line-clamp-1 leading-none">
                        {product.name}
                    </p>
                    {showPrice && (
                        <p className="text-sm uppercase overflow-hidden text-ellipsis line-clamp-1 leading-none">
                            {formattedCurrency}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}