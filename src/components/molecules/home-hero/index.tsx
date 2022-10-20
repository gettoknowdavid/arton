import React from "react";
import { useQuery } from "@apollo/client";
import { Skeleton } from "baseui/skeleton";
import { HomeHeroQuery } from "../../../graphql/queries/home.query";
import hero1 from "../../../public/hero-1.jpg";
import {
  StyledHomeHeroContainer,
  StyledHomeHeroImageDiv,
} from "./home-hero.styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStyletron } from "baseui";
import { DisplayLarge } from "baseui/typography";

function HomeHero() {
  const [css] = useStyletron();
  const { data, loading } = useQuery(HomeHeroQuery);
  const hero = data?.home.data.attributes.heroImage.data.attributes;

  const variants = {
    hidden: { scale: 1.24 },
    visible: { scale: 1, transition: { duration: 1.03 } },
  };

  return (
    <StyledHomeHeroContainer>
      <StyledHomeHeroImageDiv>
        {loading ? (
          <Skeleton height="100%" width="100%" animation />
        ) : (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={variants}
            className={css({
              height: "100%",
              width: "100%",
              position: "relative",
              objectFit: "contain",
            })}
          >
            <Image
              src={hero.url}
              alt={hero.alternativeText}
              layout={"fill"}
              className={css({ objectFit: "contain" })}
            />
          </motion.div>
        )}
      </StyledHomeHeroImageDiv>
    </StyledHomeHeroContainer>
  );
}

export default HomeHero;
