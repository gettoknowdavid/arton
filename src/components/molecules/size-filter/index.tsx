import React from "react";
import { useStyletron } from "baseui";
import { useQuery } from "@apollo/client";
import { SizeType } from "../../../types";
import { SizesQuery } from "../../../graphql/queries/sizes.query";
import { Skeleton } from "baseui/skeleton";

function SizeFilter() {
  const [css, theme] = useStyletron();
  const { data, loading } = useQuery(SizesQuery);

  let sizeSkeletons = Array(4).fill(0);

  const sizes: SizeType[] = data?.sizes.data;
  return (
    <div>
      <div className={css({ paddingBottom: "3rem" })}>
        <h1
          className={css({
            marginTop: 0,
            marginBottom: "1rem",
            padding: 0,
            fontSize: "1.2rem",
            fontWeight: 600,
            textTransform: "uppercase",
          })}
        >
          Sizes
        </h1>
        {loading ? (
          sizeSkeletons.map((index: number) => (
            <Skeleton
              key={index.toString()}
              width={"14rem"}
              height={"1rem"}
              animation
              overrides={{
                Root: {
                  style: { marginTop: "14px", marginBottom: "14px" },
                },
              }}
            />
          ))
        ) : (
          <ul className={css({ margin: 0, padding: 0, listStyleType: "none" })}>
            {sizes.map((s) => (
              <li
                key={s.id}
                className={css({
                  marginBottom: 0,
                  padding: 0,
                  textTransform: "uppercase",
                  fontWeight: 300,
                  fontSize: "1rem",
                  lineHeight: "1.3rem",
                  cursor: "pointer",
                  ":hover": { color: theme.colors.mono600 },
                })}
              >
                <p>
                  {s.attributes.code} - {s.attributes.title}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SizeFilter;
