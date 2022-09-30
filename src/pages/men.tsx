import * as React from "react";
import { NextPageWithLayout, ProductType } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { fetchAPI } from "../lib/api";
import { MenQuery } from "../graphql/queries/men.query";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import ProductList from "../components/molecules/product-list";
import CategoryFilter from "../components/molecules/category-filter";
import SizeFilter from "../components/molecules/size-filter";
import SortFilter from "../components/molecules/sort-filter";

type MenProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
};

const Men: NextPageWithLayout | any = (props: MenProps) => {
  const products = props.products.data;

  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap={"2rem"}
      paddingTop={"6rem"}
      paddingBottom={"6rem"}
    >
      <FlexGridItem maxWidth={"20rem"} width={"100%"}>
        <CategoryFilter gqlQueryVariables={["male", "unisex"]} />
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
    },
  };
}

export default Men;
