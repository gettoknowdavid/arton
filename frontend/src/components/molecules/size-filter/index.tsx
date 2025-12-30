import React from "react";
import {
  StyledSFList,
  StyledSFListItem,
  StyledSFTitle,
  StyledSFWrapper,
} from "./size-filter.styles";
import { SIZES } from "../../../lib/sizes";
import { FilterContext, sizeFilter } from "../../../contexts/filter";

type Props = {
  variant: string;
};

function SizeFilter(props: Props) {
  const { dispatch, state } = React.useContext(FilterContext);

  return (
    <StyledSFWrapper>
      <StyledSFTitle>Sizes</StyledSFTitle>
      <StyledSFList>
        {SIZES.map((s) => (
          <StyledSFListItem
            key={s.id}
            $isActive={state.sizeID === s.id}
            onClick={() =>
              sizeFilter({
                dispatch,
                sizeID: s.id,
                sortIndex: state.sortIndex,
                catID: state.catID,
                variant: props.variant,
              })
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
