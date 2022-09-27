import * as React from "react";
import { useStyletron } from "baseui";
import { CategoryType, NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { fetchAPI } from "../lib/api";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { HomeQuery } from "../graphql/queries/home.query";

type HomeProps = {
  heroImage: {
    data: {
      id: string;
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
  menCategories: {
    data: CategoryType[];
  };
  womenCategories: {
    data: CategoryType[];
  };
};

const Home: NextPageWithLayout | any = (props: HomeProps) => {
  const [css, theme] = useStyletron();
  const hero = props.heroImage.data.attributes;
  const menCategories = props.menCategories.data;
  const womenCategories = props.womenCategories.data;

  return (
    <div>
      <div
        className={css({
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1920px",
          margin: "0 auto",
          position: "relative",
        })}
      >
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
            })}
          >
            <img
              src={hero.url}
              alt={hero.alternativeText}
              className={css({ width: "100%" })}
            />
          </div>
        </div>
        <FlexGrid
          flexGridColumnCount={3}
          flexGridColumnGap={"2px"}
          paddingTop={"2rem"}
          paddingBottom={"2rem"}
        >
          {menCategories.map((category: CategoryType) => (
            <FlexGridItem
              key={category.id}
              className={css({
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                cursor: "pointer",
              })}
            >
              <img
                src={category.attributes.image.data.attributes.url}
                alt={category.attributes.image.data.attributes.alternativeText}
                className={css({
                  height: "61.714rem",
                  objectFit: "cover",
                  display: "block",
                  width: "100%",
                })}
              />
              <h2
                className={css({
                  fontSize: "1.367rem",
                  marginBottom: "4px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                })}
              >
                {category.attributes.name}
              </h2>
              <h2
                className={css({
                  margin: 0,
                  fontSize: "1rem",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                })}
              >
                {`in men`}
              </h2>
            </FlexGridItem>
          ))}
        </FlexGrid>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Home"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await fetchAPI({ query: HomeQuery });

  return {
    props: {
      heroImage: data.home.data.attributes.heroImage,
      menCategories: data.home.data.attributes.menCategories,
      womenCategories: data.home.data.attributes.womenCategories,
    },
  };
}

export default Home;
