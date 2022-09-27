import React from "react";
import { useStyletron } from "baseui";
import { useQuery } from "@apollo/client";
import { Skeleton } from "baseui/skeleton";
import { HomeHeroQuery } from "../../../graphql/queries/home.query";
import {
  StyledHomeHeroContainer,
  StyledHomeHeroImageDiv,
} from "./home-hero.styles";

function HomeHero() {
  const [css, theme] = useStyletron();

  const { data, loading } = useQuery(HomeHeroQuery);

  return (
    <StyledHomeHeroContainer>
      <StyledHomeHeroImageDiv>
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
      </StyledHomeHeroImageDiv>
    </StyledHomeHeroContainer>
  );
}

export default HomeHero;
