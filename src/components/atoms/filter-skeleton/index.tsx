import React from "react";
import { Skeleton } from "baseui/skeleton";

function FilterSkeleton() {
  return (
    <Skeleton
      width={"14rem"}
      height={"1rem"}
      animation
      overrides={{
        Root: {
          style: { marginTop: "14px", marginBottom: "14px" },
        },
      }}
    />
  );
}

export default FilterSkeleton;
