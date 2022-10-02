import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchAPI } from "../../lib/api";
import { ProductQuery } from "../../graphql/queries/product.query";
import { ProductsQuery } from "../../graphql/queries/products.query";
import { ProductType } from "../../types";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { currency } from "../../lib/currency-formatter";
import TaggedProductList from "../../components/molecules/tagged-product-list";
import BackButton from "../../components/atoms/back-button";
import SizeSelector from "../../components/molecules/size-selector";
import AddToBagButton from "../../components/atoms/add-to-bag-button";
import RichText from "../../components/atoms/rich-text";
import {
  StyledPBackButtonWrapper,
  StyledPMainBodyWrapper,
  StyledPDetailsWrapper,
  StyledPTitle,
  StyledPParagraph,
  StyledPDetailHeading,
  StyledPDetailSubHeading,
} from "../../components/styled-components";
import ProductPageImageList from "../../components/molecules/product-page-image-list";

type ProductProps = {
  product: ProductType;
};

function Product({ product }: ProductProps) {
  const [css] = useStyletron();

  return (
    <div>
      <StyledPBackButtonWrapper>
        <BackButton />
      </StyledPBackButtonWrapper>

      <StyledPMainBodyWrapper>
        <FlexGrid flexGridColumnCount={2} height={"80vh"} width={"100%"}>
          <FlexGridItem position={"relative"}>
            <ProductPageImageList images={product.attributes.images.data} />
          </FlexGridItem>

          <FlexGridItem
            display={"flex"}
            alignItems={"flex-end"}
            maxWidth={"calc(((100% - 0px) / 3) - 0.5px)"}
            width={"100%"}
          >
            <StyledPDetailsWrapper>
              <div>
                <StyledPTitle>{product.attributes.title}</StyledPTitle>
                <StyledPParagraph>
                  {product.attributes.description}
                </StyledPParagraph>
                <StyledPParagraph $upperCase>
                  Colour: {product.attributes.colour.data.attributes.title}
                </StyledPParagraph>
                <StyledPParagraph $fontWeight={400}>
                  {currency.format(product.attributes.price)}
                </StyledPParagraph>

                <SizeSelector />

                <div className={css({ marginTop: "3rem" })}>
                  <AddToBagButton />
                </div>
              </div>
            </StyledPDetailsWrapper>
          </FlexGridItem>
        </FlexGrid>
      </StyledPMainBodyWrapper>

      <div className={css({ paddingInline: "2rem" })}>
        <StyledPTitle>About this Product</StyledPTitle>
        <FlexGrid flexGridColumnCount={2}>
          <FlexGridItem>
            <div className={css({ marginBlock: "1rem" })}>
              <StyledPDetailHeading>Details</StyledPDetailHeading>
              <RichText content={product.attributes.details} />
            </div>
            <div className={css({ marginBlock: "1rem" })}>
              <StyledPDetailHeading>Brand</StyledPDetailHeading>
              <StyledPDetailSubHeading>
                {product.attributes.brand}
              </StyledPDetailSubHeading>
            </div>
            <div className={css({ marginBlock: "1rem" })}>
              <StyledPDetailHeading>Available</StyledPDetailHeading>
              <StyledPDetailSubHeading>
                {product.attributes.available ? "In stock" : "Out of stock"}
              </StyledPDetailSubHeading>
            </div>
          </FlexGridItem>

          <FlexGridItem>
            <div className={css({ marginBlock: "1rem" })}>
              <StyledPDetailHeading>Care</StyledPDetailHeading>
              <RichText content={product.attributes.care} />
            </div>
            <div className={css({ marginBlock: "1rem" })}>
              <StyledPDetailHeading>Variant</StyledPDetailHeading>
              <StyledPDetailSubHeading>
                {product.attributes.variant.toUpperCase()}
              </StyledPDetailSubHeading>
            </div>
            <div className={css({ marginBlock: "1rem" })}>
              <StyledPDetailHeading>Category</StyledPDetailHeading>
              <StyledPDetailSubHeading>
                {product.attributes.category?.data.attributes.name}
              </StyledPDetailSubHeading>
            </div>
          </FlexGridItem>
        </FlexGrid>
      </div>

      <TaggedProductList product={product} />
    </div>
  );
}

Product.getLayout = function getLayout(page: ReactElement) {
  const product: ProductType = page.props.product;

  return (
    <>
      <SEO title={product.attributes.title.toUpperCase()} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default Product;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await fetchAPI({
    query: ProductQuery,
    variables: { slug: params!.slug },
  });
  return { props: { product: data.products.data[0] } };
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchAPI({ query: ProductsQuery });
  const products: ProductType[] = data.products.data;
  return {
    paths: products.map((product) => ({
      params: { slug: product.attributes.slug },
    })),
    fallback: true,
  };
};
