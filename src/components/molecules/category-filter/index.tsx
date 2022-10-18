import React from "react";
import { useQuery } from "@apollo/client";
import { SelectCategoryQuery } from "../../../graphql/queries/categories.query";
import { CategoryType } from "../../../types";
import {
  StyledCFList,
  StyledCFListItem,
  StyledCFTitle,
  StyledCFWrapper,
} from "./category-filter.styles";
import FilterSkeleton from "../../atoms/filter-skeleton";
import { FilterContext, categoryFilter } from "../../../contexts/filter";

type CategoryFilterProps = {
  gqlQueryVariables: string[];
};

function CategoryFilter(props: CategoryFilterProps) {
  const { dispatch, state } = React.useContext(FilterContext);

  const { data, loading } = useQuery(SelectCategoryQuery, {
    variables: { list: [...props.gqlQueryVariables] },
  });

  const categories: CategoryType[] = data?.categories.data;

  let skeletonCategories = Array(4).fill(0);

  return (
    <StyledCFWrapper>
      <StyledCFTitle>Categories</StyledCFTitle>

      {loading ? (
        skeletonCategories.map((_, index) => (
          <FilterSkeleton key={index.toString()} />
        ))
      ) : (
        <StyledCFList>
          {categories?.map(({ id, attributes }) => (
            <StyledCFListItem
              key={id}
              $isActive={id === state.catIndex}
              onClick={async () =>
                categoryFilter(dispatch, id, state.sizeIndex, state.sortIndex)
              }
            >
              <p>{attributes.name}</p>
            </StyledCFListItem>
          ))}
        </StyledCFList>
      )}
    </StyledCFWrapper>
  );
}

export default CategoryFilter;
