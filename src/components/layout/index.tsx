import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../organisms/header";
import { StyledLayout } from "./layout.styles";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Arton</title>
      </Head>
      <StyledLayout>
        <main>
          <Header />
          <div>{children}</div>
        </main>
      </StyledLayout>
    </>
  );
}

export default Layout;
