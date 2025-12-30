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
import { Skeleton } from "baseui/skeleton";

type TaggedProductListProps = {
  product: ProductType;
};

const TaggedProductListSkeleton = () => {
  let productSkeletons = Array(5).fill(0);

  return (
    <StyledTPLWrapper>
      <StyledTPLList>
        {productSkeletons.map((_, index) => (
          <StyledTPLListItem key={index.toString()}>
            <StyledTPLListItemInner>
              <StyledTPLImageWrapper>
                <Skeleton height={"100%"} width={"100%"} animation />
              </StyledTPLImageWrapper>
              <div>
                <StyledTPLTitle>
                  <Skeleton height={"1.2rem"} width={"100%"} animation />
                </StyledTPLTitle>
                <StyledTPLPrice>
                  <Skeleton height={"1.2rem"} width={"10rem"} animation />
                </StyledTPLPrice>
              </div>
            </StyledTPLListItemInner>
          </StyledTPLListItem>
        ))}
      </StyledTPLList>
    </StyledTPLWrapper>
  );
};

function TaggedProductList(props: TaggedProductListProps) {
  const [css] = useStyletron();
  const router = useRouter();
  const product = props.product.attributes;

  const { data, loading } = useQuery(TaggedProductsQuery, {
    variables: {
      tagList: [...product.tags.map((t) => t.title)],
      variantList: [product.variant, "unisex"],
      notIncludeTitle: product.title,
    },
  });

  return (
    <StyledTPLWrapper>
      {data?.products.data.length !== 0 ? (
        <StyledTPLHeader>Products like</StyledTPLHeader>
      ) : null}
      {loading ? (
        <TaggedProductListSkeleton />
      ) : (
        <StyledTPLList>
          {data?.products.data.map((tProduct: ProductType) => (
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
      )}
    </StyledTPLWrapper>
  );
}

export default TaggedProductList;
