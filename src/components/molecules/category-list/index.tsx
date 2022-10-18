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
import { motion } from "framer-motion";

type CategoryListProps = {
  loading?: boolean;
  categories: CategoryType[];
};

function CategoryList(props: CategoryListProps) {
  const [css] = useStyletron();

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 3, 3]}
      flexGridColumnGap={"2px"}
      paddingBottom={"4rem"}
    >
      {props.categories.map((category: CategoryType) => (
        <FlexGridItem key={category.id} height={"100%"}>
          <StyledCategoryItemImageDiv>
            {!props.loading ? (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={css({
                  height: "100%",
                  width: "100%",
                  position: "relative",
                })}
              >
                <Image
                  src={category?.attributes.image.data.attributes.url}
                  alt={
                    category?.attributes.image.data.attributes.alternativeText
                  }
                  className={css({ objectFit: "cover" })}
                  layout={"fill"}
                  priority
                />
              </motion.div>
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
