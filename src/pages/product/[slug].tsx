import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchAPI } from "../../lib/api";
import { ProductQuery } from "../../graphql/queries/product.query";
import { ProductsQuery } from "../../graphql/queries/products.query";
import { ProductType } from "../../types";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { useStyletron } from "baseui";
import leftArrow from "../../public/left-arrow.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { currency } from "../../lib/currency-formatter";
import { Select, SIZE } from "baseui/select";
import { Button } from "baseui/button";
import ReactMarkdown from "react-markdown";
import TaggedProductList from "../../components/molecules/tagged-product-list";
import BackButton from "../../components/atoms/back-button";

type ProductProps = {
  product: ProductType;
};

function Product({ product }: ProductProps) {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const [value, setValue] = React.useState([{ label: "S - Small", id: "S" }]);

  return (
    <div>
      <div
        className={css({
          position: "absolute",
          left: "2rem",
          top: "4rem",
          zIndex: 200,
        })}
      >
        <BackButton />
      </div>
      <div
        className={css({
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <FlexGrid flexGridColumnCount={2} height={"80vh"} width={"100%"}>
          <FlexGridItem position={"relative"}>
            <ul
              className={css({
                margin: 0,
                display: "flex",
                flexDirection: "row-reverse",
                listStyleType: "none",
                height: "80vh",
                width: "calc(((100% - 0px) / 1) - 0.5px)",
                float: "right",
                overflow: "auto",
                whiteSpace: "nowrap",
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                paddingLeft: "10rem",
              })}
            >
              {product.attributes.images.data.map((image) => {
                return (
                  <li
                    key={image.id}
                    className={css({
                      aspectRatio: 12 / 16,
                      height: "80vh",
                      marginLeft: "2rem",
                    })}
                  >
                    <div
                      onClick={router.back}
                      className={css({
                        position: "relative",
                        height: "100%",
                        width: "100%",
                      })}
                    >
                      <Image
                        src={image.attributes.url}
                        alt={image.attributes.alternativeText}
                        className={css({ objectFit: "cover" })}
                        layout={"fill"}
                        priority
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </FlexGridItem>
          <FlexGridItem
            display={"flex"}
            alignItems={"flex-end"}
            maxWidth={"calc(((100% - 0px) / 3) - 0.5px)"}
            width={"100%"}
          >
            <div
              className={css({
                width: "36rem",
                height: "100%",
                paddingLeft: "6rem",
                paddingBottom: "2rem",
                marginRight: "10rem",
                display: "flex",
                justifyContent: "stretch",
                alignItems: "flex-end",
              })}
            >
              <div>
                <div className={css({})}>
                  <h1
                    className={css({
                      fontWeight: 400,
                      fontSize: "1.5rem",
                      lineHeight: "2rem",
                      textTransform: "uppercase",
                      marginTop: 0,
                      marginBottom: "1rem",
                    })}
                  >
                    {product.attributes.title}
                  </h1>
                </div>

                <div className={css({})}>
                  <p className={css({ fontWeight: 300 })}>
                    {product.attributes.description}
                  </p>
                </div>

                <div className={css({})}>
                  <p
                    className={css({
                      fontWeight: 300,
                      textTransform: "uppercase",
                    })}
                  >
                    Colour: {product.attributes.colour.data.attributes.title}
                  </p>
                </div>

                <div className={css({})}>
                  <p className={css({ fontWeight: 400 })}>
                    {currency.format(product.attributes.price)}
                  </p>
                </div>

                <div className={css({ marginTop: "3rem" })}>
                  <Select
                    backspaceRemoves={false}
                    clearable={false}
                    deleteRemoves={false}
                    size={SIZE.compact}
                    options={[
                      { label: "XS - Extra Small", id: "XS" },
                      { label: "S - Small", id: "S" },
                      { label: "M - Medium", id: "M" },
                      { label: "L - Large", id: "L" },
                      { label: "XL - Extra Large", id: "XL" },
                      { label: "XXL - Extra Extra Large", id: "XXL" },
                    ]}
                    value={value}
                    searchable={false}
                    placeholder="Select size"
                    onChange={(params: any) => setValue(params.value)}
                    overrides={{
                      Dropdown: {
                        style: () => ({
                          boxShadow: "none",
                          borderTopRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderBottomLeftRadius: 0,
                        }),
                      },
                      DropdownListItem: {
                        style: () => ({
                          fontSize: "1.1rem",
                          fontWeight: 300,
                          textTransform: "uppercase",
                        }),
                      },

                      Root: {
                        style: () => ({
                          fontSize: "1.1rem",
                          fontWeight: 300,
                          textTransform: "uppercase",
                        }),
                      },
                      ControlContainer: {
                        style: () => ({
                          paddingLeft: 0,
                          marginLeft: 0,

                          backgroundColor: "transparent",

                          borderTopStyle: "solid",
                          borderRightStyle: "solid",
                          borderBottomStyle: "solid",
                          borderLeftStyle: "solid",
                          borderTopWidth: "1px",
                          borderRightWidth: "0px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "0px",
                          borderTopColor: theme.colors.mono600,
                          borderRightColor: theme.colors.mono600,
                          borderBottomColor: theme.colors.mono600,
                          borderLeftColor: theme.colors.mono600,

                          borderTopRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderBottomLeftRadius: 0,
                        }),
                      },
                    }}
                  />
                  <p className={css({ fontWeight: 300, marginTop: "0.74rem" })}>
                    SIZE GUIDE
                  </p>
                </div>

                <div className={css({ marginTop: "3rem" })}>
                  <Button
                    onClick={() => alert("click")}
                    size={SIZE.compact}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          borderTopRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderBottomLeftRadius: 0,
                          width: "100%",
                          fontSize: "1.1rem",
                          fontWeight: 400,
                          textTransform: "uppercase",
                        }),
                      },
                    }}
                  >
                    Add to Bag
                  </Button>
                </div>
              </div>
            </div>
          </FlexGridItem>
        </FlexGrid>
      </div>
      <div
        className={css({
          marginTop: "2rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        })}
      >
        <FlexGrid
          flexGridColumnCount={2}
          flexGridColumnGap={"4rem"}
          width={"100%"}
          maxWidth={"60vw"}
          paddingRight={"4rem"}
          paddingLeft={"4rem"}
        >
          <FlexGridItem>
            <div>
              <div className={css({ marginBlock: "1rem" })}>
                <h1
                  className={css({
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    margin: 0,
                    padding: 0,
                  })}
                >
                  Details
                </h1>
                <div
                  className={css({
                    fontWeight: 300,
                    margin: 0,
                    padding: 0,
                  })}
                >
                  <ReactMarkdown
                    children={product.attributes.details}
                    components={{
                      p({ children }) {
                        return <p className={css({ margin: 0 })}>{children}</p>;
                      },
                      ul({ children }) {
                        return (
                          <ul
                            className={css({
                              listStyleType: '"-  "',
                              margin: 0,
                              paddingBlock: 0,
                              paddingLeft: "2rem",
                            })}
                          >
                            {children}
                          </ul>
                        );
                      },
                    }}
                  />
                </div>
              </div>
              <div className={css({ marginBlock: "1rem" })}>
                <h1
                  className={css({
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    margin: 0,
                    padding: 0,
                  })}
                >
                  Brand
                </h1>
                <p
                  className={css({
                    fontWeight: 300,
                    margin: 0,
                    padding: 0,
                  })}
                >
                  {product.attributes.brand}
                </p>
              </div>
              <div className={css({ marginBlock: "1rem" })}>
                <h1
                  className={css({
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    margin: 0,
                    padding: 0,
                  })}
                >
                  Available
                </h1>
                <p
                  className={css({
                    fontWeight: 300,
                    margin: 0,
                    padding: 0,
                  })}
                >
                  {product.attributes.available ? "In stock" : "Out of stock"}
                </p>
              </div>
            </div>
          </FlexGridItem>
          <FlexGridItem>
            <div className={css({ marginBlock: "1rem" })}>
              <h1
                className={css({
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  margin: 0,
                  padding: 0,
                })}
              >
                Care
              </h1>
              <div
                className={css({
                  fontWeight: 300,
                  margin: 0,
                  padding: 0,
                })}
              >
                <ReactMarkdown
                  children={product.attributes.care}
                  components={{
                    p({ children }) {
                      return <p className={css({ margin: 0 })}>{children}</p>;
                    },
                    ul({ children }) {
                      return (
                        <ul
                          className={css({
                            listStyleType: '"-  "',
                            margin: 0,
                            paddingBlock: 0,
                            paddingLeft: "2rem",
                          })}
                        >
                          {children}
                        </ul>
                      );
                    },
                  }}
                />
              </div>
            </div>
            <div className={css({ marginBlock: "1rem" })}>
              <h1
                className={css({
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  margin: 0,
                  padding: 0,
                })}
              >
                Variant
              </h1>
              <p
                className={css({
                  fontWeight: 300,
                  margin: 0,
                  padding: 0,
                })}
              >
                {product.attributes.variant.toUpperCase()}
              </p>
            </div>
            <div className={css({ marginBlock: "1rem" })}>
              <h1
                className={css({
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  margin: 0,
                  padding: 0,
                })}
              >
                Category
              </h1>
              <p
                className={css({
                  fontWeight: 300,
                  margin: 0,
                  padding: 0,
                })}
              >
                {product.attributes.category?.data.attributes.name}
              </p>
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
