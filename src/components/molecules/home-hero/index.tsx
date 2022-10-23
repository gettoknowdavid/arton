import React from "react";
import { useQuery } from "@apollo/client";
import { Skeleton } from "baseui/skeleton";
import { HomeHeroQuery } from "../../../graphql/queries/home.query";
import {
  StyledHomeHeroContainer,
  StyledHomeHeroImageDiv,
} from "./home-hero.styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStyletron } from "baseui";

function HomeHero() {
  const [css, theme] = useStyletron();
  const { data, loading } = useQuery(HomeHeroQuery);
  const hero = data?.home.data.attributes.heroImage.data.attributes;

  const variants = {
    hidden: { scale: 1.24 },
    visible: { scale: 1, transition: { duration: 1.03 } },
  };

  return (
    <StyledHomeHeroContainer>
      <h1
        className={css({
          textTransform: "uppercase",
          fontSize: "2rem",
          position: "absolute",
          zIndex: 80,
          fontWeight: 900,
          color: theme.colors.mono100,
          [theme.mediaQuery.large]: { fontSize: "10rem" },
        })}
      >
        ThisisArton®
      </h1>
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
            })}
          >
            <div
              className={css({
                backgroundColor: "rgba(0,0,0,0.6)",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                right: 0,
                zIndex: 10,
              })}
            />
            <Image
              src={hero.url}
              alt={hero.alternativeText}
              layout={"fill"}
              className={css({
                maxWidth: "1920px",
                objectFit: "cover",
              })}
            />
          </motion.div>
        )}
      </StyledHomeHeroImageDiv>
    </StyledHomeHeroContainer>
  );
}

export default HomeHero;
