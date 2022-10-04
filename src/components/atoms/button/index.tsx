import React from "react";
import { SIZE } from "baseui/select";
import { Button as BaseButton, ButtonProps, KIND } from "baseui/button";

function Button(props: ButtonProps) {
  return (
    <BaseButton
      {...props}
      size={SIZE.compact}
      overrides={{
        BaseButton: {
          style: () => ({
            width: "100%",
            fontSize: "1.1rem",
            fontWeight: 400,
            textTransform: "uppercase",
          }),
        },
        ...props.overrides,
      }}
    />
  );
}

export default Button;
