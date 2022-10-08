import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { StyledLogo } from "./logo.styles";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../contexts/global.context";

function Logo() {
  const { closeDrawer } = React.useContext(GlobalContext);

  const router = useRouter();
  const goHome = () => {
    closeDrawer();
    router?.push(`/`);
  };

  return (
    <StyledLogo onClick={goHome}>
      <Image src={logo} alt={"Arton logo"} layout={"fill"} priority />
    </StyledLogo>
  );
}

export default Logo;
