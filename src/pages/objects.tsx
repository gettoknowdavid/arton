import * as React from "react";
import { FilterActionType, NextPageWithLayout, ProductType } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { fetchAPI } from "../lib/api";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import ProductList from "../components/molecules/product-list";
import SortFilter from "../components/molecules/sort-filter";
import { ObjectsQuery } from "../graphql/queries/objects.query";
import { FilterContext } from "../contexts/filter.context";

type ObjectsProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
};

const Objects: NextPageWithLayout | any = (props: ObjectsProps) => {
  const [loading, setLoading] = React.useState(false);
  const { dispatch, state } = React.useContext(FilterContext);

  React.useEffect(() => {
    setLoading(true);
    dispatch({
      type: FilterActionType.GET_PRODUCTS,
      payload: { products: props.products.data },
    });
    setLoading(false);
  }, [dispatch, props.products.data, setLoading]);

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      flexGridColumnGap={"1rem"}
      paddingTop={"6rem"}
      paddingRight={"1rem"}
      paddingBottom={"4rem"}
      paddingLeft={"1rem"}
    >
      <FlexGridItem>
        <ProductList
          gridCount={[2, 2, 3, 4]}
          products={state.filteredProducts}
          loading={loading}
        />
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
