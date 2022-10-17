import React from "react";
import {
  StyledSortFList,
  StyledSortFListItem,
  StyledSortFTitle,
  StyledSortFWrapper,
} from "./sort-filter.styles";
import { FilterActionType } from "../../../types";
import { FilterContext } from "../../../contexts/filter.context";

const SORT_LIST = [
  { id: 0, name: "Price low to high" },
  { id: 1, name: "Price high to low" },
];

function SortFilter() {
  const { dispatch, state } = React.useContext(FilterContext);

  const sort = (ITEM: { id: number; name: string }) => {
    if (ITEM.id === 0) {
      dispatch({
        type: FilterActionType.SORT_PRICE_ASC,
        payload: { sortIndex: ITEM.id },
      });
    } else {
      dispatch({
        type: FilterActionType.SORT_PRICE_DESC,
        payload: { sortIndex: ITEM.id },
      });
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
