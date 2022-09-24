import * as React from "react";
import { useStyletron } from "baseui";
import { NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { DisplaySmall } from "baseui/typography";

const Home: NextPageWithLayout = () => {
  const [css, theme] = useStyletron();
  return (
    <div>
      <DisplaySmall>Home</DisplaySmall>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
