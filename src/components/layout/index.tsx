import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../organisms/header";
import { StyledLayout, StyledMain } from "./layout.styles";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <StyledLayout>
        <Head>
          <title>Arton</title>
        </Head>
        <StyledMain>
          <Header />
          <div>{children}</div>
        </StyledMain>
      </StyledLayout>
    </>
  );
}

export default Layout;
