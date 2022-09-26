import React, { ReactComponentElement, ReactNode } from "react";
import Header from "../organisms/header";
import { StyledLayout, StyledMain } from "./layout.styles";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <StyledLayout>
        <StyledMain>
          <Header />
          <div>{children}</div>
        </StyledMain>
      </StyledLayout>
    </>
  );
}

export default Layout;
