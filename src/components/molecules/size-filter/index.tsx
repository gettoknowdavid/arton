import React from "react";
import { useQuery } from "@apollo/client";
import { SizeType } from "../../../types";
import { SizesQuery } from "../../../graphql/queries/sizes.query";
import {
  StyledSFListItem,
  StyledSFTitle,
  StyledSFWrapper,
} from "./size-filter.styles";
import { StyledSubFooterList } from "../../organisms/footer/footer.styles";
import FilterSkeleton from "../../atoms/filter-skeleton";

function SizeFilter() {
  const { data, loading } = useQuery(SizesQuery);

  let sizeSkeletons = Array(4).fill(0);

  const sizes: SizeType[] = data?.sizes.data;

  return (
    <StyledSFWrapper>
      <StyledSFTitle>Sizes</StyledSFTitle>
      {loading ? (
        sizeSkeletons.map((_, index) => (
          <FilterSkeleton key={index.toString()} />
        ))
      ) : (
        <StyledSubFooterList>
          {sizes.map((s) => (
            <StyledSFListItem key={s.id}>
              <p>
                {s.attributes.code} - {s.attributes.title}
              </p>
            </StyledSFListItem>
          ))}
        </StyledSubFooterList>
      )}
    </StyledSFWrapper>
  );
}

export default SizeFilter;
