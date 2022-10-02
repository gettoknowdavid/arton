import React from "react";
import { Select, SIZE } from "baseui/select";
import { useStyletron } from "baseui";
import { SIZES } from "../../../lib/sizes";

function SizeSelector() {
  const [css, theme] = useStyletron();
  const [value, setValue] = React.useState([SIZES[0]]);

  return (
    <div className={css({ marginTop: "3rem" })}>
      <Select
        backspaceRemoves={false}
        clearable={false}
        deleteRemoves={false}
        size={SIZE.compact}
        options={SIZES}
        value={value}
        searchable={false}
        placeholder="Select size"
        onChange={(params: any) => setValue(params.value)}
        overrides={{
          Dropdown: {
            style: () => ({
              boxShadow: "none",
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
            }),
          },
          DropdownListItem: {
            style: () => ({
              fontSize: "1.1rem",
              fontWeight: 300,
              textTransform: "uppercase",
            }),
          },

          Root: {
            style: () => ({
              fontSize: "1.1rem",
              fontWeight: 300,
              textTransform: "uppercase",
            }),
          },
          ControlContainer: {
            style: () => ({
              paddingLeft: 0,
              marginLeft: 0,

              backgroundColor: "transparent",

              borderTopStyle: "solid",
              borderRightStyle: "solid",
              borderBottomStyle: "solid",
              borderLeftStyle: "solid",
              borderTopWidth: "1px",
              borderRightWidth: "0px",
              borderBottomWidth: "1px",
              borderLeftWidth: "0px",
              borderTopColor: theme.colors.mono600,
              borderRightColor: theme.colors.mono600,
              borderBottomColor: theme.colors.mono600,
              borderLeftColor: theme.colors.mono600,

              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
            }),
          },
        }}
      />
      <p className={css({ fontWeight: 300, marginTop: "0.74rem" })}>
        SIZE GUIDE
      </p>
    </div>
  );
}

export default SizeSelector;
