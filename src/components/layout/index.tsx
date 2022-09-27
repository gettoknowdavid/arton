import React, { ReactNode } from "react";
import Header from "../organisms/header";
import { StyledLayout, StyledMain, StyledMainBody } from "./layout.styles";
import Footer from "../organisms/footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <StyledLayout>
        <StyledMain>
          <Header />
          <StyledMainBody>{children}</StyledMainBody>
          <Footer />
        </StyledMain>
      </StyledLayout>
    </>
  );
}

export default Layout;
