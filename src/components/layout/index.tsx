import React, { ReactNode } from "react";
import Head from "next/head";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Arton</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

export default Layout;
