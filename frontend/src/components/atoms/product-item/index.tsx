import React from "react";
import { ProductType } from "../../../types";
import Image from "next/image";
import { currency } from "../../../lib/currency-formatter";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import {
  StyledPIImageWrapper,
  StyledPIPrice,
  StyledPITitle,
} from "./product-item.styles";

type ProductItemProps = {
  product: ProductType;
};

function ProductItem(props: ProductItemProps) {
  const [css] = useStyletron();

  const product = props.product;

  const router = useRouter();
  const goToProduct = () => router.push(`/product/${product.attributes.slug}`);

  return (
    <div>
      <StyledPIImageWrapper onClick={goToProduct}>
        <Image
          src={product.attributes.image.data.attributes.url}
          alt={product?.attributes.image.data.attributes.alternativeText}
          className={css({ objectFit: "cover" })}
          layout={"fill"}
          priority
        />
      </StyledPIImageWrapper>

      <div>
        <FlexGrid flexGridColumnCount={[1, 1, 2, 2]} flexGridColumnGap={"1rem"}>
          <FlexGridItem>
            <StyledPITitle>{product.attributes.title}</StyledPITitle>
          </FlexGridItem>
          <FlexGridItem maxWidth={"4rem"} width={"100%"}>
            <StyledPIPrice>
              {currency.format(product.attributes.price)}
            </StyledPIPrice>
          </FlexGridItem>
        </FlexGrid>
      </div>
    </div>
  );
}

export default ProductItem;
