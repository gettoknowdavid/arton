import React from "react";
import { MaskedInput as BaseMaskedInput, MaskedInputProps } from "baseui/input";

function MaskedInput(props: MaskedInputProps) {
  return (
    <BaseMaskedInput
      {...props}
      overrides={{
        Input: { style: ({ $theme }) => ({ ...$theme.typography.font100 }) },
      }}
    />
  );
}

export default MaskedInput;
