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
import { ObjectsQuery } from "../graphql/queries/objects.query";

type ObjectsProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
};

const Objects: NextPageWithLayout | any = (props: ObjectsProps) => {
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 3]}
      flexGridColumnGap={"1rem"}
      paddingTop={"6rem"}
      paddingRight={"1rem"}
      paddingBottom={"4rem"}
      paddingLeft={"1rem"}
    >
      <FlexGridItem
        maxWidth={"16rem"}
        width={"100%"}
        display={["none", "none", "none", "initial"]}
      >
        <CategoryFilter gqlQueryVariables={["male", "unisex"]} />
        <SizeFilter />
      </FlexGridItem>
      <FlexGridItem>
        <ProductList products={props.products.data} loading={props.loading} />
      </FlexGridItem>
      <FlexGridItem
        maxWidth={"16rem"}
        width={"100%"}
        display={["none", "none", "none", "initial"]}
      >
        <SortFilter />
      </FlexGridItem>
    </FlexGrid>
  );
};

Objects.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Objects"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export async function getStaticProps() {
  const { data, loading } = await fetchAPI({ query: ObjectsQuery });

  return {
    props: {
      loading: loading,
      products: data.products,
    },
  };
}

export default Objects;
