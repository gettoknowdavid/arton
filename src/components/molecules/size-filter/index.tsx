import React from "react";
import {
  StyledSFList,
  StyledSFListItem,
  StyledSFTitle,
  StyledSFWrapper,
} from "./size-filter.styles";
import { SIZES } from "../../../lib/sizes";
import { FilterContext, sortBySize } from "../../../contexts/filter";

function SizeFilter() {
  const { dispatch, state } = React.useContext(FilterContext);

  return (
    <StyledSFWrapper>
      <StyledSFTitle>Sizes</StyledSFTitle>
      <StyledSFList>
        {SIZES.map((s, index) => (
          <StyledSFListItem
            key={s.id}
            $isActive={state.sizeIndex === index}
            onClick={() =>
              sortBySize(dispatch, s.id, state.sortIndex, state.catIndex)
            }
          >
            <p>{s.attributes.title}</p>
          </StyledSFListItem>
        ))}
      </StyledSFList>
    </StyledSFWrapper>
  );
}

export default SizeFilter;
