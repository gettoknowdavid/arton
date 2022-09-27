import React, { ReactNode } from "react";
import Header from "../organisms/header";
import { StyledLayout, StyledMain, StyledMainBody } from "./layout.styles";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <StyledLayout>
        <StyledMain>
          <Header />
          <StyledMainBody>{children}</StyledMainBody>
        </StyledMain>
      </StyledLayout>
    </>
  );
}

export default Layout;
