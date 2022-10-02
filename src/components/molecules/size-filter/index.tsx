import React from "react";
import {
  StyledSFListItem,
  StyledSFTitle,
  StyledSFWrapper,
} from "./size-filter.styles";
import { StyledSubFooterList } from "../../organisms/footer/footer.styles";
import { SIZES } from "../../../lib/sizes";

function SizeFilter() {
  return (
    <StyledSFWrapper>
      <StyledSFTitle>Sizes</StyledSFTitle>
      <StyledSubFooterList>
        {SIZES.map((s) => (
          <StyledSFListItem key={s.id}>
            <p>{s.label}</p>
          </StyledSFListItem>
        ))}
      </StyledSubFooterList>
    </StyledSFWrapper>
  );
}

export default SizeFilter;
