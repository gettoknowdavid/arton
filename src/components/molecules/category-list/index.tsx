import React from "react";
import { CategoryType } from "../../../types";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { useStyletron } from "baseui";
import {
  StyledCategoryItemImageDiv,
  StyledCategoryItemName,
  StyledCategoryItemVariant,
} from "./category-list.styles";
import Image from "next/image";

type CategoryListProps = {
  categories: CategoryType[];
};

function CategoryList(props: CategoryListProps) {
  const [css] = useStyletron();

  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap={"2px"}
      paddingTop={"2rem"}
      paddingBottom={"2rem"}
    >
      {props.categories.map((category: CategoryType) => (
        <FlexGridItem key={category.id}>
          <StyledCategoryItemImageDiv>
            <Image
              src={category.attributes.image.data.attributes.url}
              alt={category.attributes.image.data.attributes.alternativeText}
              className={css({ objectFit: "cover" })}
              layout={"fill"}
            />
          </StyledCategoryItemImageDiv>
          <div>
            <StyledCategoryItemName>
              {category.attributes.name}
            </StyledCategoryItemName>
            <StyledCategoryItemVariant>
              {`for ${category.attributes.variant}`}
            </StyledCategoryItemVariant>
          </div>
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

export default CategoryList;
