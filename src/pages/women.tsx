import * as React from "react";
import { NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { DisplaySmall } from "baseui/typography";
import SEO from "../components/seo";

const Women: NextPageWithLayout | any = () => {
  return (
    <div>
      <DisplaySmall>Women</DisplaySmall>
    </div>
  );
};

Women.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Women"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default Women;
