import React from "react";
import { FormControl as BaseFormControl } from "baseui/form-control";
import { FormControlProps } from "baseui/form-control";

type Props = {
  width?: string;
  marginRight?: string | number;
};

type FormProps = FormControlProps & Props;

function FormControl(props: FormProps) {
  return (
    <BaseFormControl
      {...props}
      overrides={{
        ...props.overrides,
        ControlContainer: {
          style: {
            width: props.width,
            marginRight: props.marginRight ?? "0.313rem",
          },
        },
        Label: {
          style: () => ({
            fontSize: "0.65rem",
            fontWeight: 500,
            textTransform: "uppercase",
          }),
        },
      }}
    />
  );
}

export default FormControl;
