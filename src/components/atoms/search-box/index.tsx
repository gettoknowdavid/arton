import React from "react";
import { MagnifyingGlass } from "phosphor-react";
import { Input } from "baseui/input";

function SearchBox() {
  const [value, setValue] = React.useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="WHAT ARE YOU LOOKING FOR?"
      startEnhancer={() => <MagnifyingGlass />}
      overrides={{
        InputContainer: {
          style: () => ({
            outline: `transparent solid`,
            backgroundColor: "transparent",
          }),
        },
        Input: {
          style: ({ $theme }) => ({
            ...$theme.typography.font200,
            outline: `transparent solid`,
            backgroundColor: "transparent",
          }),
        },
        Root: {
          style: () => ({
            paddingRight: ".75rem",
            paddingLeft: ".75rem",
            paddingTop: "0 1rem 0 2.8125rem",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "black",
            borderLeftWidth: 0,
            backgroundColor: "transparent",
            outline: `transparent solid`,
          }),
        },
        StartEnhancer: {
          style: () => ({
            paddingRight: 0,
            paddingLeft: 0,
            backgroundColor: "transparent",
          }),
        },
      }}
    />
  );
}

export default SearchBox;
