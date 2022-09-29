import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import ProductItem from "../../atoms/product-item";
import { ProductType } from "../../../types";

type ProductListProps = {
  products: ProductType[];
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
      {props.products.map((product) => (
        <FlexGridItem key={product.id}>
          <ProductItem product={product} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

export default ProductList;
