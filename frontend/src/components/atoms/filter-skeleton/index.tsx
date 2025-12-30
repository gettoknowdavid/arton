import React from "react";
import { Skeleton } from "baseui/skeleton";

function FilterSkeleton() {
  return (
    <Skeleton
      width={"12rem"}
      height={"1rem"}
      animation
      overrides={{
        Root: {
          style: { marginTop: "0.5rem", marginBottom: "0.5rem" },
        },
      }}
    />
  );
}

export default FilterSkeleton;
