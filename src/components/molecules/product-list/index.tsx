import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import ProductItem from "../../atoms/product-item";
import { ProductType } from "../../../types";
import { useStyletron } from "baseui";
import { Skeleton } from "baseui/skeleton";

type ProductListProps = {
  loading: boolean;
  products: ProductType[];
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
      <div>
        <div className={css({ marginTop: "4px" })}>
          <Skeleton height={"1rem"} width={"100%"} animation />
        </div>
        <div className={css({ marginTop: "6px" })}>
          <Skeleton height={"1rem"} width={"4rem"} animation />
        </div>
      </div>
    </div>
  );
};

function ProductList(props: ProductListProps) {
  return (
    <FlexGrid
      flexGridColumnCount={[2, 3, 3, 4]}
      flexGridColumnGap={"2px"}
      flexGridRowGap={"1rem"}
      paddingRight={"2px"}
      paddingLeft={"2px"}
    >
      {props.loading
        ? productSkeletons.map((index) => (
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
