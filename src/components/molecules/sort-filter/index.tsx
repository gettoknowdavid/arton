import React from "react";
import {
  StyledSortFList,
  StyledSortFListItem,
  StyledSortFTitle,
  StyledSortFWrapper,
} from "./sort-filter.styles";
import { FilterContext, priceFilter } from "../../../contexts/filter";

const SORT_LIST = [
  { id: 0, name: "Price low to high" },
  { id: 1, name: "Price high to low" },
];

type Props = {
  variant: string;
};

function SortFilter(props: Props) {
  const { dispatch, state } = React.useContext(FilterContext);

  const sort = async (sortID: number) => {
    await priceFilter({
      dispatch,
      sortIndex: sortID,
      catID: state.catID,
      sizeID: state.sizeID,
      variant: props.variant,
    });
  };

  return (
    <StyledSortFWrapper>
      <StyledSortFTitle>SORT</StyledSortFTitle>
      <StyledSortFList>
        {SORT_LIST.map((ITEM) => (
          <StyledSortFListItem
            key={ITEM.id}
            $isActive={ITEM.id === state.sortIndex}
            onClick={() => sort(ITEM.id)}
          >
            <p>{ITEM.name}</p>
          </StyledSortFListItem>
        ))}
      </StyledSortFList>
    </StyledSortFWrapper>
  );
}

export default SortFilter;
