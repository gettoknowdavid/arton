import React from "react";
import {
  StyledSortFList,
  StyledSortFListItem,
  StyledSortFTitle,
  StyledSortFWrapper,
} from "./sort-filter.styles";
const SORT_LIST = [
  { id: 0, name: "Price low to high" },
  { id: 1, name: "Price high to low" },
];

function SortFilter() {
  return (
    <StyledSortFWrapper>
      <StyledSortFTitle>SORT</StyledSortFTitle>
      <StyledSortFList>
        {SORT_LIST.map((ITEM) => (
          <StyledSortFListItem key={ITEM.id}>
            <p>{ITEM.name}</p>
          </StyledSortFListItem>
        ))}
      </StyledSortFList>
    </StyledSortFWrapper>
  );
}

export default SortFilter;
