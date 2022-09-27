import React from "react";
import { useQuery } from "@apollo/client";
import { Skeleton } from "baseui/skeleton";
import { HomeHeroQuery } from "../../../graphql/queries/home.query";
import {
  StyledHomeHeroContainer,
  StyledHomeHeroImageDiv,
} from "./home-hero.styles";
import Image from "next/image";

function HomeHero() {
  const { data, loading } = useQuery(HomeHeroQuery);
  const hero = data?.home.data.attributes.heroImage.data.attributes;

  return (
    <StyledHomeHeroContainer>
      <StyledHomeHeroImageDiv>
        {loading ? (
          <Skeleton height="100%" width="100%" animation />
        ) : (
          <Image src={hero.url} alt={hero.alternativeText} layout={"fill"} />
        )}
      </StyledHomeHeroImageDiv>
    </StyledHomeHeroContainer>
  );
}

export default HomeHero;
