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

type MenProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
};

const Men: NextPageWithLayout | any = (props: MenProps) => {
  const { dispatch, state } = React.useContext(FilterContext);

  React.useEffect(() => {
    getAllProducts({ dispatch, products: props.products.data }).catch();
  }, []);

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
          gqlQueryVariables={["male", "unisex"]}
          variant={"male"}
        />
        <SizeFilter />
      </FlexGridItem>
      <FlexGridItem>
        <ProductList
          products={state.filteredProducts}
          loading={props.loading || state.loading}
        />
      </FlexGridItem>
      <FlexGridItem
        maxWidth={"16rem"}
        width={"100%"}
        display={["none", "none", "none", "initial"]}
      >
        <SortFilter variant={"male"} />
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
  const { data, loading } = await fetchAPI({
    query: GenderQuery,
    variables: { gender: "male" },
  });

  return {
    props: {
      loading: loading,
      products: data.products,
    },
  };
}

export default Men;
