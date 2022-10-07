import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { StyledLogo } from "./logo.styles";
import { useRootDispatch } from "../../../hooks";
import { closeDrawer } from "../../../store/slices/global.slice";
import { useRouter } from "next/router";

function Logo() {
  const dispatch = useRootDispatch();

  const router = useRouter();
  const goHome = () => {
    dispatch(closeDrawer());
    router.push(`/`);
  };

  return (
    <StyledLogo onClick={goHome}>
      <h1>
        <Image src={logo} alt={"Arton logo"} layout={"fill"} priority />
      </h1>
    </StyledLogo>
  );
}

export default Logo;
