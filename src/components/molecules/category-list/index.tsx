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
import { Skeleton } from "baseui/skeleton";

type CategoryListProps = {
  loading?: boolean;
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
            {!props.loading ? (
              <Image
                src={category?.attributes.image.data.attributes.url}
                alt={category?.attributes.image.data.attributes.alternativeText}
                className={css({ objectFit: "cover" })}
                layout={"fill"}
              />
            ) : (
              <Skeleton height="100%" width="100%" animation />
            )}
          </StyledCategoryItemImageDiv>
          <div>
            <StyledCategoryItemName>
              {!props.loading ? (
                category?.attributes.name
              ) : (
                <Skeleton height="1.367rem" width="18rem" animation />
              )}
            </StyledCategoryItemName>
            <StyledCategoryItemVariant>
              {!props.loading ? (
                `for ${category?.attributes.variant}`
              ) : (
                <Skeleton height="1rem" width="8rem" animation />
              )}
            </StyledCategoryItemVariant>
          </div>
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

export default CategoryList;
