import * as React from "react";
import {
  CategoryType,
  NextPageWithLayout,
  ProductType,
  SizeType,
} from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { fetchAPI } from "../lib/api";
import { MenQuery } from "../graphql/queries/men.query";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { useStyletron } from "baseui";
import { ButtonGroup, SIZE, SHAPE } from "baseui/button-group";
import { Button } from "baseui/button";
import ProductItem from "../components/atoms/product-item";

type MenProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
  categories: {
    data: CategoryType[];
  };
  sizes: {
    data: SizeType[];
  };
};

const SORT_LIST = [
  { id: 0, name: "Price low to high" },
  { id: 1, name: "Price high to low" },
];

const Men: NextPageWithLayout | any = (props: MenProps) => {
  const products = props.products.data;
  const categories = [
    { id: 90, attributes: { name: "All" } },
    ...props.categories.data,
  ];

  const [css, theme] = useStyletron();

  return (
    <div className={css({ paddingTop: "6rem", paddingBottom: "6rem" })}>
      <FlexGrid flexGridColumnCount={3}>
        <FlexGridItem maxWidth={"20rem"} width={"100%"}>
          <div className={css({ paddingBottom: "3rem" })}>
            <h1
              className={css({
                marginTop: 0,
                marginBottom: "1rem",
                padding: 0,
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "uppercase",
              })}
            >
              Categories
            </h1>
            <ul
              className={css({ margin: 0, padding: 0, listStyleType: "none" })}
            >
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={css({
                    marginBottom: 0,
                    padding: 0,
                    textTransform: "uppercase",
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: "1.3rem",
                    cursor: "pointer",
                    ":hover": { color: theme.colors.mono600 },
                  })}
                >
                  <p>{category.attributes.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={css({ paddingBottom: "3rem" })}>
            <h1
              className={css({
                marginTop: 0,
                marginBottom: "1rem",
                padding: 0,
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "uppercase",
              })}
            >
              Sizes
            </h1>
            <ul
              className={css({ margin: 0, padding: 0, listStyleType: "none" })}
            >
              <ButtonGroup
                size={SIZE.mini}
                shape={SHAPE.square}
                mode="checkbox"
              >
                {props.sizes.data.map((s) => (
                  <Button
                    key={s.id}
                    className={css({
                      textTransform: "uppercase",
                      fontSize: "0.9rem",
                    })}
                  >
                    <p>{s.attributes.code}</p>
                  </Button>
                ))}
              </ButtonGroup>
            </ul>
          </div>
        </FlexGridItem>
        <FlexGridItem>
          <FlexGrid
            flexGridColumnCount={[2, 3, 3, 4]}
            flexGridColumnGap={"2px"}
            flexGridRowGap={"1rem"}
            paddingRight={"2px"}
            paddingLeft={"2px"}
          >
            {products.map((product) => (
              <FlexGridItem key={product.id}>
                <ProductItem product={product} />
              </FlexGridItem>
            ))}
          </FlexGrid>
        </FlexGridItem>
        <FlexGridItem
          maxWidth={"20rem"}
          width={"100%"}
          className={css({ textAlign: "right" })}
        >
          <div>
            <h1
              className={css({
                marginTop: 0,
                marginBottom: "1rem",
                padding: 0,
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "uppercase",
              })}
            >
              SORT
            </h1>
            <ul
              className={css({ margin: 0, padding: 0, listStyleType: "none" })}
            >
              {SORT_LIST.map((ITEM) => (
                <li
                  key={ITEM.id}
                  className={css({
                    marginBottom: 0,
                    padding: 0,
                    textTransform: "uppercase",
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: "1.3rem",
                    cursor: "pointer",
                    ":hover": { color: theme.colors.mono600 },
                  })}
                >
                  <p>{ITEM.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </FlexGridItem>
      </FlexGrid>
    </div>
  );
};

Men.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Men"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};
export async function getStaticProps() {
  const { data, loading } = await fetchAPI({ query: MenQuery });

  return {
    props: {
      loading: loading,
      products: data.products,
      categories: data.categories,
      sizes: data.sizes,
    },
  };
}

export default Men;
