import * as React from "react";
import { useStyletron } from "baseui";
import { CategoryType, NextPageWithLayout, SeoType } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { fetchAPI } from "../lib/api";
import { HomeQuery } from "../graphql/queries/home.query";
import HomeHero from "../components/molecules/home-hero";
import CategoryList from "../components/molecules/category-list";

type HomeProps = {
  loading: boolean;
  seo: SeoType;
  menCategories: {
    data: CategoryType[];
  };
  womenCategories: {
    data: CategoryType[];
  };
};

const Home: NextPageWithLayout | any = (props: HomeProps) => {
  const [css, theme] = useStyletron();
  const menCategories = props.menCategories.data;
  const womenCategories = props.womenCategories.data;

  return (
    <div>
      <HomeHero />
      <h1
        className={css({
          ...theme.typography.font450,
          textTransform: "uppercase",
          marginTop: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          letterSpacing: "1px",
          [theme.mediaQuery.medium]: { marginTop: "4rem" },
          [theme.mediaQuery.large]: { marginTop: "8rem" },
        })}
      >
        Categories
      </h1>
      <CategoryList categories={menCategories} loading={props.loading} />
      <CategoryList categories={womenCategories} loading={props.loading} />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  const seo: SeoType = page.props.seo;
  return (
    <>
      <SEO title={seo.metaTitle} description={seo.metaDescription} />
      <Layout>{page}</Layout>
    </>
  );
};

export async function getStaticProps() {
  const { data, loading } = await fetchAPI({ query: HomeQuery });

  return {
    props: {
      loading: loading,
      seo: data.home.data.attributes.seo,
      menCategories: data.home.data.attributes.menCategories,
      womenCategories: data.home.data.attributes.womenCategories,
    },
  };
}

export default Home;
