import * as React from "react";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import { NextPageWithLayout } from "../types";
import { ReactElement } from "react";
import Layout from "../components/layout";

export const sum = (a: number, b: number) => a + b;

const Home: NextPageWithLayout = () => {
  const [css, theme] = useStyletron();
  return (
    <div>
      <Button onClick={() => console.log("hey")}>Hello</Button>
      <p className={css({ color: theme.colors.accent600 })}>Styled by hook</p>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
