import React, { ReactComponentElement, ReactNode } from "react";
import Header from "../organisms/header";
import { StyledLayout, StyledMain } from "./layout.styles";

function Layout({
  children,
  seo,
}: {
  children: ReactNode;
  seo: ReactComponentElement<any>;
}) {
  return (
    <>
      <StyledLayout>
        {seo}
        <StyledMain>
          <Header />
          <div>{children}</div>
        </StyledMain>
      </StyledLayout>
    </>
  );
}

export default Layout;
