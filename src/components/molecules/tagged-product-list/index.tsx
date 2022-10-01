import React from "react";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { TaggedProductsQuery } from "../../../graphql/queries/tagged-products.query";
import { ProductType } from "../../../types";
import Image from "next/image";
import { currency } from "../../../lib/currency-formatter";
import {
  StyledTPLHeader,
  StyledTPLImageWrapper,
  StyledTPLList,
  StyledTPLListItem,
  StyledTPLListItemInner,
  StyledTPLPrice,
  StyledTPLTitle,
  StyledTPLWrapper,
} from "./tagged-product-list.styles";

type TaggedT = {
  products: {
    data: ProductType[];
  };
};

type TaggedProductListProps = {
  product: ProductType;
};

function TaggedProductList(props: TaggedProductListProps) {
  const [css] = useStyletron();
  const router = useRouter();
  const product = props.product.attributes;

  const { data, loading } = useQuery<TaggedT>(TaggedProductsQuery, {
    variables: {
      tagList: [...product.tags.map((t) => t.title)],
      variantList: [product.variant, "unisex"],
      notIncludeTitle: product.title,
    },
  });

  return (
    <StyledTPLWrapper>
      <StyledTPLHeader>Products like</StyledTPLHeader>
      {data ? (
        <StyledTPLList>
          {data.products.data.map((tProduct) => (
            <StyledTPLListItem key={tProduct.id}>
              <StyledTPLListItemInner>
                <StyledTPLImageWrapper
                  onClick={() =>
                    router.push(`/product/${tProduct.attributes.slug}`)
                  }
                >
                  <Image
                    src={tProduct.attributes.image.data.attributes.url}
                    alt={
                      tProduct.attributes.image.data.attributes.alternativeText
                    }
                    className={css({ objectFit: "cover" })}
                    layout={"fill"}
                  />
                </StyledTPLImageWrapper>
                <div>
                  <StyledTPLTitle>{tProduct.attributes.title}</StyledTPLTitle>
                  <StyledTPLPrice>
                    {currency.format(tProduct.attributes.price)}
                  </StyledTPLPrice>
                </div>
              </StyledTPLListItemInner>
            </StyledTPLListItem>
          ))}
        </StyledTPLList>
      ) : null}
    </StyledTPLWrapper>
  );
}

export default TaggedProductList;
