import React from "react";
import { SIZE } from "baseui/select";
import { Button as BaseButton, ButtonProps, KIND } from "baseui/button";
import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/infinity";

function Button(props: ButtonProps) {
  return (
    <BaseButton
      {...props}
      size={SIZE.compact}
      overrides={{
        LoadingSpinner: {
          component: () => (
            <UseAnimations
              animation={loadingIcon}
              strokeColor={"white"}
              size={15}
            />
          ),
        },
        BaseButton: {
          style: ({ $theme }) => ({
            ...$theme.typography.font100,
            letterSpacing: ".05rem",
            width: "100%",
            textTransform: "uppercase",
          }),
        },
        ...props.overrides,
      }}
    />
  );
}

export default Button;
