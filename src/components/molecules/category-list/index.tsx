import React from "react";
import { CategoryType } from "../../../types";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { useStyletron } from "baseui";

type CategoryListProps = {
  categories: CategoryType[];
};

function CategoryList(props: CategoryListProps) {
  const [css, theme] = useStyletron();

  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap={"2px"}
      paddingTop={"2rem"}
      paddingBottom={"2rem"}
    >
      {props.categories.map((category: CategoryType) => (
        <FlexGridItem
          key={category.id}
          className={css({
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
            cursor: "pointer",
          })}
        >
          <img
            src={category.attributes.image.data.attributes.url}
            alt={category.attributes.image.data.attributes.alternativeText}
            className={css({
              height: "61.714rem",
              objectFit: "cover",
              display: "block",
              width: "100%",
            })}
          />
          <h2
            className={css({
              fontSize: "1.367rem",
              marginBottom: "4px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
            })}
          >
            {category.attributes.name}
          </h2>
          <h2
            className={css({
              margin: 0,
              fontSize: "1rem",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "2px",
            })}
          >
            {`in men`}
          </h2>
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

export default CategoryList;
