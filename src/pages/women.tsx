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
import { FilterContext, getAllProducts } from "../contexts/filter";

type WomenProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
};

const Women: NextPageWithLayout | any = (props: WomenProps) => {
  const { dispatch, state } = React.useContext(FilterContext);

  React.useEffect(() => {
    getAllProducts({ dispatch, products: props.products.data }).catch();
  }, [dispatch, props.products.data]);

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
        <CategoryFilter
          gqlQueryVariables={["female", "unisex"]}
          variant={"female"}
        />
        <SizeFilter variant={"female"} />
      </FlexGridItem>
      <FlexGridItem>
        <ProductList
          products={state.filteredProducts}
          loading={state.loading || props.loading}
        />
      </FlexGridItem>
      <FlexGridItem
        maxWidth={"16rem"}
        width={"100%"}
        display={["none", "none", "none", "initial"]}
      >
        <SortFilter variant={"female"} />
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
