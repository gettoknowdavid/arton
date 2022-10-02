import * as React from "react";
import { NextPageWithLayout, ProductType } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { fetchAPI } from "../lib/api";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import ProductList from "../components/molecules/product-list";
import CategoryFilter from "../components/molecules/category-filter";
import SizeFilter from "../components/molecules/size-filter";
import SortFilter from "../components/molecules/sort-filter";
import { GenderQuery } from "../graphql/queries/gender.query";

type WomenProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
};

const Women: NextPageWithLayout | any = (props: WomenProps) => {
  const products = props.products.data;

  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap={"2rem"}
      paddingTop={"6rem"}
      paddingRight={"2rem"}
      paddingBottom={"6rem"}
      paddingLeft={"2rem"}
    >
      <FlexGridItem maxWidth={"20rem"} width={"100%"}>
        <CategoryFilter gqlQueryVariables={["female", "unisex"]} />
        <SizeFilter />
      </FlexGridItem>
      <FlexGridItem>
        <ProductList products={products} loading={props.loading} />
      </FlexGridItem>
      <FlexGridItem maxWidth={"20rem"} width={"100%"}>
        <SortFilter />
      </FlexGridItem>
    </FlexGrid>
  );
};

Women.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Women"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export async function getStaticProps() {
  const { data, loading } = await fetchAPI({
    query: GenderQuery,
    variables: { gender: "female" },
  });

  return {
    props: {
      loading: loading,
      products: data.products,
    },
  };
}

export default Women;
