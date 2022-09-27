import * as React from "react";
import { NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { DisplaySmall } from "baseui/typography";
import SEO from "../components/seo";

const NewArrivals: NextPageWithLayout | any = () => {
  return (
    <div>
      <DisplaySmall>New Arrivals</DisplaySmall>
    </div>
  );
};

NewArrivals.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"New Arrivals"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default NewArrivals;
