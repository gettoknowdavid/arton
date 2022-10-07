import * as React from "react";
import { NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { DisplaySmall } from "baseui/typography";
import SEO from "../components/seo";

const Objects: NextPageWithLayout | any = () => {
  return (
    <div>
      <DisplaySmall>Objects</DisplaySmall>
    </div>
  );
};

Objects.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Objects"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default Objects;
