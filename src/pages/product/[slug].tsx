import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchAPI } from "../../lib/api";
import { ProductQuery } from "../../graphql/queries/product.query";
import { ProductsQuery } from "../../graphql/queries/products.query";
import { CartItemInterface, ProductType } from "../../types";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { currency } from "../../lib/currency-formatter";
import TaggedProductList from "../../components/molecules/tagged-product-list";
import BackButton from "../../components/atoms/back-button";
import SizeSelector from "../../components/molecules/size-selector";
import AddToBagButton from "../../components/atoms/add-to-cart-button";
import {
  StyledPBackButtonWrapper,
  StyledPMainBodyWrapper,
  StyledPDetailsWrapper,
  StyledPTitle,
  StyledPParagraph,
} from "../../components/styled-components";
import ProductPageImageList from "../../components/molecules/product-page-image-list";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductPageCarousel from "../../components/molecules/product-page-carousel";
import { StyledPList } from "../../components/styled-components/product.styles";
import ProductDetailsAccordion from "../../components/molecules/product-details-accordion"; // requires a loader

type ProductProps = {
  product: ProductType;
};

function Product({ product }: ProductProps) {
  const { id, attributes } = product;

  const [size, setSize] = React.useState([product.attributes.sizes.data[0]]);

  const bagItem: CartItemInterface = {
    id: id,
    name: attributes.title,
    slug: attributes.slug,
    image: attributes.image.data.attributes.url,
    size: size[0],
    sizes: product.attributes.sizes.data,
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
            <ProductPageCarousel images={product.attributes.images.data} />
          </FlexGridItem>

          <FlexGridItem
            display={"flex"}
            alignItems={"flex-end"}
            maxWidth={[
              "100%",
              "100%",
              "100%",
              "calc(((100% - 0px) / 2.9) - 0.5px)",
            ]}
            width={"100%"}
          >
            <StyledPDetailsWrapper>
              <div>
                <StyledPParagraph $fontWeight={600}>
                  {currency.format(product.attributes.price)}
                </StyledPParagraph>

                <StyledPTitle>{product.attributes.title}</StyledPTitle>

                <StyledPParagraph>
                  {product.attributes.description}
                </StyledPParagraph>

                <StyledPList>
                  <StyledPParagraph $upperCase>
                    Brand: {product.attributes.brand}
                  </StyledPParagraph>
                  <StyledPParagraph $upperCase>
                    Colour: {product.attributes.colour.data.attributes.title}
                  </StyledPParagraph>
                </StyledPList>

                <SizeSelector
                  value={size}
                  onChange={(params: any) => setSize(params.value)}
                  sizes={product.attributes.sizes.data}
                />

                <AddToBagButton item={bagItem} set={{ marginTop: "1.5rem" }} />

                <ProductDetailsAccordion product={product} />
              </div>
            </StyledPDetailsWrapper>
          </FlexGridItem>
        </FlexGrid>
      </StyledPMainBodyWrapper>

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
