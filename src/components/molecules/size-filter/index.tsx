import React from "react";
import {
  StyledSFList,
  StyledSFListItem,
  StyledSFTitle,
  StyledSFWrapper,
} from "./size-filter.styles";
import { SIZES } from "../../../lib/sizes";

function SizeFilter() {
  return (
    <StyledSFWrapper>
      <StyledSFTitle>Sizes</StyledSFTitle>
      <StyledSFList>
        {SIZES.map((s) => (
          <StyledSFListItem key={s.id}>
            <p>{s.label}</p>
          </StyledSFListItem>
        ))}
      </StyledSFList>
    </StyledSFWrapper>
  );
}

export default SizeFilter;
