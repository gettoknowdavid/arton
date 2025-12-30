import React from "react";
import { Input as BaseInput, InputProps } from "baseui/input";

function Input(props: InputProps) {
  return (
    <BaseInput
      {...props}
      overrides={{
        ...props.overrides,
        Input: { style: ({ $theme }) => ({ ...$theme.typography.font100 }) },
      }}
    />
  );
}

export default Input;
