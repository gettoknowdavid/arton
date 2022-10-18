import React from "react";
import {
  StyledSortFList,
  StyledSortFListItem,
  StyledSortFTitle,
  StyledSortFWrapper,
} from "./sort-filter.styles";
import { FilterContext, sortByPrice } from "../../../contexts/filter";

const SORT_LIST = [
  { id: 0, name: "Price low to high" },
  { id: 1, name: "Price high to low" },
];

function SortFilter() {
  const { dispatch, state } = React.useContext(FilterContext);

  const sort = async (ITEM: { id: number; name: string }) => {
    if (ITEM.id === 0) {
      await sortByPrice(
        dispatch,
        ITEM.id,
        "price:asc",
        state.catIndex,
        state.sizeIndex
      );
    } else {
      await sortByPrice(
        dispatch,
        ITEM.id,
        "price:desc",
        state.catIndex,
        state.sizeIndex
      );
    }
  };

  return (
    <StyledSortFWrapper>
      <StyledSortFTitle>SORT</StyledSortFTitle>
      <StyledSortFList>
        {SORT_LIST.map((ITEM) => (
          <StyledSortFListItem
            key={ITEM.id}
            $isActive={ITEM.id === state.sortIndex}
            onClick={() => sort(ITEM)}
          >
            <p>{ITEM.name}</p>
          </StyledSortFListItem>
        ))}
      </StyledSortFList>
    </StyledSortFWrapper>
  );
}

export default SortFilter;
