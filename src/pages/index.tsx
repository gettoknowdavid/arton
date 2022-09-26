import * as React from "react";
import { useStyletron } from "baseui";
import { CategoryType, NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { DisplaySmall } from "baseui/typography";
import SEO from "../components/seo";
import { fetchAPI } from "../lib/api";
import { CategoriesQuery } from "../graphql";

type HomeProps = {
  categories: CategoryType[];
};

const Home: NextPageWithLayout | any = (props: HomeProps) => {
  const [css, theme] = useStyletron();
  console.log(props.categories);

  return (
    <div>
      <DisplaySmall>Home</DisplaySmall>
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
  const { data: categories } = await fetchAPI({ query: CategoriesQuery });

  return {
    props: {
      categories,
    },
  };
}

export default Home;
