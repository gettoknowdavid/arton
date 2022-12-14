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
import {
  categoryFilter,
  FilterContext,
  getAllProducts,
} from "../contexts/filter";
import { useRouter } from "next/router";
import { Block } from "baseui/block";
import Button from "../components/atoms/button";
import { openFiltersDrawer } from "../contexts/filter/filter.actions";
import FiltersDrawer from "../components/organisms/filters-drawer";
import { KIND, SIZE } from "baseui/button";

type MenProps = {
  loading: boolean;
  products: {
    data: ProductType[];
  };
};

const Men: NextPageWithLayout | any = (props: MenProps) => {
  const { dispatch, state } = React.useContext(FilterContext);
  const router = useRouter();

  const openFilter = () => openFiltersDrawer({ dispatch });

  React.useEffect(() => {
    getAllProducts({ dispatch, products: props.products.data }).catch();
    const catID: number = parseInt(`${router.query.category}`);

    if (router.query.category) {
      categoryFilter({ dispatch, catID: catID, variant: "male" }).then();
    }
  }, [dispatch, props.products.data, router.query.category]);

  return (
    <div>
      <FiltersDrawer variant={"male"} />
      <Block
        paddingTop={"4rem"}
        paddingRight={"1rem"}
        paddingLeft={"1rem"}
        display={["flex", "flex", "flex", "none"]}
        justifyContent={"flex-end"}
      >
        <Button
          size={SIZE.mini}
          kind={KIND.tertiary}
          width={"initial"}
          onClick={openFilter}
        >
          Filters
        </Button>
      </Block>
      <FlexGrid
        flexGridColumnCount={[1, 1, 1, 3]}
        flexGridColumnGap={"1rem"}
        paddingTop={["1rem", "1rem", "1rem", "6rem"]}
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
          <SizeFilter variant={"male"} />
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
