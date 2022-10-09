import React from "react";
import Image from "next/image";
import leftArrow from "../../../public/left-arrow.png";
import { styled } from "baseui";
import { useRouter } from "next/router";

const Wrapper = styled("div", () => ({
  position: "relative",
  height: "1.3rem",
  width: "100%",
  cursor: "pointer",
  display: "flex",
}));

const ImageWrapper = styled("div", () => ({
  position: "relative",
  height: "1.3rem",
  width: "2rem",
}));

const Text = styled("div", ({ $theme }) => ({
  ...$theme.typography.font200,
  position: "relative",
  height: "1.3rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginLeft: "0.5rem",
  textTransform: "uppercase",
}));

function BackButton() {
  const router = useRouter();

  return (
    <Wrapper onClick={router.back}>
      <ImageWrapper>
        <Image src={leftArrow} alt={"left arrow"} layout={"fill"} priority />
      </ImageWrapper>
      <Text>Back</Text>
    </Wrapper>
  );
}

export default BackButton;
