import React from "react";
import { SIZE } from "baseui/select";
import { Button as BaseButton, ButtonProps } from "baseui/button";
import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/infinity";

type ExtraProps = {
  width?: string;
};

function Button(props: ButtonProps & ExtraProps) {
  return (
    <BaseButton
      {...props}
      size={props.size ?? SIZE.compact}
      overrides={{
        ...props.overrides,
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
            width: props.width ?? "100%",
            textTransform: "uppercase",
          }),
        },
      }}
    />
  );
}

export default Button;
