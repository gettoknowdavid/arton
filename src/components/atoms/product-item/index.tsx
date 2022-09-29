import React from "react";
import { ProductType } from "../../../types";
import Image from "next/image";
import { currency } from "../../../lib/currency-formatter";
import { useStyletron } from "baseui";

type ProductItemProps = {
  product: ProductType;
};

function ProductItem(props: ProductItemProps) {
  const [css, theme] = useStyletron();
  const product = props.product;

  return (
    <div>
      <div
        className={css({
          aspectRatio: 12 / 16,
          cursor: "pointer",
          position: "relative",
          backgroundColor: theme.colors.mono200,
        })}
      >
        <Image
          src={product.attributes.image.data.attributes.url}
          alt={product?.attributes.image.data.attributes.alternativeText}
          className={css({ objectFit: "cover" })}
          layout={"fill"}
          priority
        />
      </div>
      <div>
        <p
          className={css({
            marginTop: "4px",
            marginBottom: 0,
            padding: 0,
            textTransform: "uppercase",
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: "1.3rem",
            height: "1rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            lineClamp: 1,
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          })}
        >
          {product.attributes.title}
        </p>

        <p
          className={css({
            marginTop: "6px",
            padding: 0,
            textTransform: "uppercase",
            fontSize: "1rem",
            lineHeight: "1.3rem",
          })}
        >
          {currency.format(product.attributes.price)}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
