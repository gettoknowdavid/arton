import * as React from "react";
import { NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { DisplaySmall } from "baseui/typography";
import SEO from "../components/seo";

const Men: NextPageWithLayout | any = () => {
  return (
    <div>
      <DisplaySmall>Men</DisplaySmall>
    </div>
  );
};

Men.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Men"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default Men;
