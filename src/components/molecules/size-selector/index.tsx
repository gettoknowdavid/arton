import React from "react";
import { Select, SIZE } from "baseui/select";
import { useStyletron } from "baseui";
import { SizeType } from "../../../types";

type Props = {
  value: SizeType[];
  onChange: (params: any) => any;
  sizes: SizeType[];
};

function SizeSelector(props: Props) {
  const [css, theme] = useStyletron();

  return (
    <div className={css({ marginTop: "1rem" })}>
      <Select
        backspaceRemoves={false}
        clearable={false}
        deleteRemoves={false}
        size={SIZE.compact}
        options={props.sizes}
        value={props.value}
        searchable={false}
        placeholder="Select size"
        onChange={props.onChange}
        getOptionLabel={({ option }) =>
          `${option.attributes.sizeCode} - ${option.attributes.title}`
        }
        getValueLabel={({ option }) =>
          `${option.attributes.sizeCode} - ${option.attributes.title}`
        }
        overrides={{
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
            style: ({ $theme }) => ({
              ...$theme.typography.font100,
              fontWeight: 300,
              textTransform: "uppercase",
            }),
          },
          IconsContainer: { style: () => ({ paddingRight: "0.5rem" }) },
          Root: {
            style: ({ $theme }) => ({
              ...$theme.typography.font100,
              fontWeight: 300,
              textTransform: "uppercase",
            }),
          },
          ValueContainer: { style: () => ({ paddingLeft: 0 }) },
        }}
      />
      <p
        className={css({
          ...theme.typography.font100,
          fontWeight: 300,
          textAlign: "left",
          marginTop: "0.5rem",
        })}
      >
        SIZE GUIDE
      </p>
    </div>
  );
}

export default SizeSelector;
