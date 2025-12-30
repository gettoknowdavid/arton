import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import ProductItem from "../../atoms/product-item";
import { ProductType } from "../../../types";
import { useStyletron } from "baseui";
import { Skeleton } from "baseui/skeleton";
import { Block } from "baseui/block";
import { ShoppingCart, SmileySad } from "phosphor-react";
import EmptyState from "../empty-state";

type ProductListProps = {
  loading: boolean;
  products: ProductType[];
  gridCount?: number[] | number;
};

let productSkeletons = Array(8).fill(0);

const ProductSkeleton = () => {
  const [css, theme] = useStyletron();

  return (
    <div>
      <div
        className={css({
          aspectRatio: 12 / 16,
          backgroundColor: theme.colors.mono200,
        })}
      >
        <Skeleton height={"100%"} width={"100%"} animation />
      </div>
      <FlexGrid flexGridColumnCount={[1, 1, 2, 2]} flexGridColumnGap={"1rem"}>
        <FlexGridItem marginTop={"4px"}>
          <Skeleton height={"1rem"} width={"100%"} animation />
        </FlexGridItem>
        <FlexGridItem maxWidth={"4rem"} width={"100%"} marginTop={"4px"}>
          <Skeleton height={"1rem"} width={"4rem"} animation />
        </FlexGridItem>
      </FlexGrid>
    </div>
  );
};

function ProductList(props: ProductListProps) {
  if (!props.products.length) {
    return (
      <EmptyState
        content={"We don't seem to have those"}
        icon={<SmileySad size={60} weight={"duotone"} />}
        height={"calc(100vh - 12.8125rem)"}
      />
    );
  }

  return (
    <FlexGrid
      flexGridColumnCount={props.gridCount ?? [2, 2, 3, 3]}
      flexGridColumnGap={["0.75rem", "0.75rem", "1rem", ".75rem"]}
      flexGridRowGap={["3rem", "2rem", "3rem", "4rem"]}
    >
      {props.loading
        ? productSkeletons.map((_, index) => (
            <FlexGridItem key={index}>
              <ProductSkeleton key={index} />
            </FlexGridItem>
          ))
        : props.products.map((product) => (
            <FlexGridItem key={product.id}>
              <ProductItem product={product} />
            </FlexGridItem>
          ))}
    </FlexGrid>
  );
}

export default ProductList;
