import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

function Checkout() {
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      flexGridColumnGap={"1rem"}
      paddingTop={"5rem"}
      paddingRight={["0", "0", "7rem", "26rem"]}
      paddingBottom={"5rem"}
      paddingLeft={["0", "0", "7rem", "26rem"]}
    >
      <FlexGridItem>s</FlexGridItem>
      <FlexGridItem
        maxWidth={["100%", "100%", "100%", "26rem"]}
        width={"100%"}
        height={"100%"}
        backgroundColor={"rgba(225,225,225,0.2)"}
        paddingTop={"1rem"}
        paddingRight={"1rem"}
        paddingBottom={"2rem"}
        paddingLeft={"1rem"}
      >
        s
      </FlexGridItem>
    </FlexGrid>
  );
}

export default Checkout;
