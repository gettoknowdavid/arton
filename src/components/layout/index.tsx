import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../organisms/header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Arton</title>
      </Head>
      <main>
        <Header />
        <div>{children}</div>
      </main>
    </>
  );
}

export default Layout;
