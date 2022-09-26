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

const ImageFragment = gql`
  fragment ImageFragment on UploadFileEntity {
    id
    attributes {
      alternativeText
      url
    }
  }
`;

const CategoryFragment = gql`
  fragment CategoryFragment on CategoryEntity {
    id
    attributes {
      name
      slug
      variant
      image {
        data {
          ...ImageFragment
        }
      }
    }
  }
`;

const CategoriesQuery = gql`
  query CategoriesQuery {
    categories {
      data {
        id
        attributes {
          name
          slug
          variant
          image {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;

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
  return <Layout seo={<SEO title={"Home"} description={""} />}>{page}</Layout>;
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
