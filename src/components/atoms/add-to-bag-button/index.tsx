import React from "react";
import { SIZE } from "baseui/select";
import { Button } from "baseui/button";

function AddToBagButton() {
  return (
    <Button
      onClick={() => alert("click")}
      size={SIZE.compact}
      overrides={{
        BaseButton: {
          style: () => ({
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            width: "100%",
            fontSize: "1.1rem",
            fontWeight: 400,
            textTransform: "uppercase",
          }),
        },
      }}
    >
      Add to Bag
    </Button>
  );
}

export default AddToBagButton;
