import React from "react";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

function Bag() {
  const [css, theme] = useStyletron();

  return (
    <FlexGrid
      flexGridColumnCount={2}
      flexGridColumnGap={"2rem"}
      paddingRight={"20rem"}
      paddingLeft={"20rem"}
    >
      <FlexGridItem>
        <div>
          <h1
            className={css({
              fontSize: "1.6rem",
              fontWeight: 400,
              letterSpacing: "1px",
            })}
          >
            My Bag
          </h1>
        </div>
      </FlexGridItem>
      <FlexGridItem maxWidth={"30rem"} width={"100%"}>
        <div>
          <h1
            className={css({
              fontSize: "1.6rem",
              fontWeight: 400,
              letterSpacing: "1px",
            })}
          >
            Total
          </h1>
        </div>
      </FlexGridItem>
    </FlexGrid>
  );
}

export default Bag;
