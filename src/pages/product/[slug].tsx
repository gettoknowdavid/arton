import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchAPI } from "../../lib/api";
import { ProductQuery } from "../../graphql/queries/product.query";
import { ProductsQuery } from "../../graphql/queries/products.query";
import { CartItemInterface, ProductType } from "../../types";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { currency } from "../../lib/currency-formatter";
import TaggedProductList from "../../components/molecules/tagged-product-list";
import BackButton from "../../components/atoms/back-button";
import SizeSelector from "../../components/molecules/size-selector";
import AddToBagButton from "../../components/atoms/add-to-cart-button";
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
import { SIZES } from "../../lib/sizes";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import {
  AnimationHandler,
  AnimationHandlerResponse,
} from "react-responsive-carousel/lib/ts/components/Carousel/types";
import { Button } from "baseui/button";
import { Block } from "baseui/block";
import { CaretLeft, CaretRight } from "phosphor-react"; // requires a loader

type ProductProps = {
  product: ProductType;
};

function Product({ product }: ProductProps) {
  const [css, theme] = useStyletron();
  const { id, attributes } = product;

  const [size, setSize] = React.useState([SIZES[0]]);

  const bagItem: CartItemInterface = {
    id: id,
    name: attributes.title,
    slug: attributes.slug,
    image: attributes.image.data.attributes.url,
    size: size[0],
    price: attributes.price,
    colour: attributes.colour.data.attributes.title,
    quantity: 1,
  };

  return (
    <div>
      <StyledPBackButtonWrapper>
        <BackButton />
      </StyledPBackButtonWrapper>

      <StyledPMainBodyWrapper>
        <FlexGrid
          flexGridColumnCount={[1, 1, 1, 2]}
          height={["100%", "100%", "100%", "80vh"]}
          width={"100%"}
        >
          <FlexGridItem position={"relative"}>
            <ProductPageImageList images={product.attributes.images.data} />
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              dynamicHeight
              renderArrowPrev={(clickHandler: () => void, hasPrev: boolean) =>
                hasPrev && (
                  <Block
                    onClick={clickHandler}
                    className={css({
                      position: "absolute",
                      zIndex: 2,
                      top: "calc(50% - 15px)",
                      height: "1.75rem",
                      width: "1.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      cursor: "pointer",
                      left: 0,
                    })}
                  >
                    <CaretLeft />
                  </Block>
                )
              }
              renderArrowNext={(clickHandler: () => void, hasNext: boolean) =>
                hasNext && (
                  <Block
                    onClick={clickHandler}
                    className={css({
                      position: "absolute",
                      zIndex: 2,
                      top: "calc(50% - 15px)",
                      height: "1.75rem",
                      width: "1.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      cursor: "pointer",
                      right: 0,
                    })}
                  >
                    <CaretRight />
                  </Block>
                )
              }
              className={css({
                [theme.mediaQuery.small]: { display: "initial" },
                [theme.mediaQuery.medium]: { display: "initial" },
                [theme.mediaQuery.large]: { display: "none" },
              })}
            >
              {product.attributes.images.data.map((i) => (
                <div
                  key={i.id}
                  className={css({
                    position: "relative",
                    width: "100%",
                    [theme.mediaQuery.small]: { height: "60vh" },
                    [theme.mediaQuery.medium]: { height: "85vh" },
                    [theme.mediaQuery.large]: { height: "100%" },
                  })}
                >
                  <Image
                    src={product.attributes.image.data.attributes.url}
                    alt={
                      product.attributes.image.data.attributes.alternativeText
                    }
                    layout={"fill"}
                    className={css({ objectFit: "cover" })}
                  />
                </div>
              ))}
            </Carousel>
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

                <SizeSelector
                  value={size}
                  onChange={(params: any) => setSize(params.value)}
                />

                <div className={css({ marginTop: "3rem" })}>
                  <AddToBagButton item={bagItem} />
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
    fallback: false,
  };
};
