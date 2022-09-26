import * as React from "react";
import { useStyletron } from "baseui";
import { NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { DisplaySmall } from "baseui/typography";
import SEO from "../components/seo";
import { gql, useQuery } from "@apollo/client";
import { GetStaticPropsContext } from "next";
import { initializeApollo } from "../lib/apollo";
import { fetchAPI } from "../lib/api";
import { CategoriesQuery } from "../graphql";

const Home: NextPageWithLayout = ({ result }) => {
  const [css, theme] = useStyletron();
  console.log(result);

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
  const result = await fetchAPI({ query: CategoriesQuery });

  return {
    props: {
      result,
    },
  };
}

export default Home;
