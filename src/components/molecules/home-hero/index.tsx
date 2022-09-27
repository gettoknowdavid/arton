import React from "react";
import { useStyletron } from "baseui";
import { useQuery } from "@apollo/client";
import { Skeleton } from "baseui/skeleton";
import { HomeHeroQuery } from "../../../graphql/queries/home.query";

function HomeHero() {
  const [css, theme] = useStyletron();

  const { data, loading } = useQuery(HomeHeroQuery);

  return (
    <div
      className={css({
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          height: "61.714rem",
          width: "109.714rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {loading ? (
          <Skeleton height="100%" width="100%" animation />
        ) : (
          <img
            src={data.home.data.attributes.heroImage.data.attributes.url}
            alt={
              data.home.data.attributes.heroImage.data.attributes
                .alternativeText
            }
            className={css({ width: "100%" })}
          />
        )}
      </div>
    </div>
  );
}

export default HomeHero;
