import React from "react";
import { useStyletron } from "baseui";
import { useQuery } from "@apollo/client";
import { SelectCategoryQuery } from "../../../graphql/queries/categories.query";
import { CategoryType } from "../../../types";
import { Skeleton } from "baseui/skeleton";

function CategoryFilter() {
  const [css, theme] = useStyletron();

  const { data, loading } = useQuery(SelectCategoryQuery, {
    variables: { list: ["male", "unisex"] },
  });

  const categories: CategoryType[] = data?.categories.data;

  let skeletonCategories = Array(4).fill(0);

  return (
    <div className={css({ paddingBottom: "3rem" })}>
      <h1
        className={css({
          marginTop: 0,
          marginBottom: "1rem",
          padding: 0,
          fontSize: "1.2rem",
          fontWeight: 600,
          textTransform: "uppercase",
        })}
      >
        Categories
      </h1>

      {loading ? (
        skeletonCategories.map((index: number) => (
          <Skeleton
            key={index.toString()}
            width={"14rem"}
            height={"1rem"}
            animation
            overrides={{
              Root: {
                style: { marginTop: "14px", marginBottom: "14px" },
              },
            }}
          />
        ))
      ) : (
        <ul className={css({ margin: 0, padding: 0, listStyleType: "none" })}>
          {categories?.map((category) => (
            <li
              key={category.id}
              className={css({
                marginBottom: 0,
                padding: 0,
                textTransform: "uppercase",
                fontWeight: 300,
                fontSize: "1rem",
                lineHeight: "1.3rem",
                cursor: "pointer",
                ":hover": { color: theme.colors.mono600 },
              })}
            >
              <p>{category.attributes.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryFilter;
