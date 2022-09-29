import React from "react";
import { useQuery } from "@apollo/client";
import { SelectCategoryQuery } from "../../../graphql/queries/categories.query";
import { CategoryType } from "../../../types";
import { Skeleton } from "baseui/skeleton";
import {
  StyledCFList,
  StyledCFListItem,
  StyledCFTitle,
  StyledCFWrapper,
} from "./category-filter.styles";

const FilterSkeleton = () => {
  return (
    <Skeleton
      width={"14rem"}
      height={"1rem"}
      animation
      overrides={{
        Root: {
          style: { marginTop: "14px", marginBottom: "14px" },
        },
      }}
    />
  );
};

type CategoryFilterProps = {
  gqlQueryVariables: string[];
};

function CategoryFilter(props: CategoryFilterProps) {
  const { data, loading } = useQuery(SelectCategoryQuery, {
    variables: { list: [...props.gqlQueryVariables] },
  });

  const categories: CategoryType[] = data?.categories.data;

  let skeletonCategories = Array(4).fill(0);

  return (
    <StyledCFWrapper>
      <StyledCFTitle>Categories</StyledCFTitle>

      {loading ? (
        skeletonCategories.map((index: number) => (
          <FilterSkeleton key={index.toString()} />
        ))
      ) : (
        <StyledCFList>
          {categories?.map((category) => (
            <StyledCFListItem key={category.id}>
              <p>{category.attributes.name}</p>
            </StyledCFListItem>
          ))}
        </StyledCFList>
      )}
    </StyledCFWrapper>
  );
}

export default CategoryFilter;
