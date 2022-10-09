import React from "react";
import { ProductType } from "../../../types";
import Image from "next/image";
import { currency } from "../../../lib/currency-formatter";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

type ProductItemProps = {
  product: ProductType;
};

function ProductItem(props: ProductItemProps) {
  const [css, theme] = useStyletron();
  const product = props.product;
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() => router.push(`/product/${product.attributes.slug}`)}
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
        <FlexGrid flexGridColumnCount={[1, 1, 2, 2]} flexGridColumnGap={"1rem"}>
          <FlexGridItem>
            <p
              className={css({
                ...theme.typography.font100,
                textTransform: "uppercase",
                lineHeight: "1.3rem",
                height: "1rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                lineClamp: 1,
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                marginTop: "4px",
                marginBottom: 0,
                padding: 0,
              })}
            >
              {product.attributes.title}
            </p>
          </FlexGridItem>
          <FlexGridItem maxWidth={"4rem"} width={"100%"}>
            <p
              className={css({
                ...theme.typography.font100,
                lineHeight: "1.3rem",
                marginTop: "4px",
                marginBottom: 0,
                height: "1rem",
                textTransform: "uppercase",
                textAlign: "right",
              })}
            >
              {currency.format(product.attributes.price)}
            </p>
          </FlexGridItem>
        </FlexGrid>
      </div>
    </div>
  );
}

export default ProductItem;
