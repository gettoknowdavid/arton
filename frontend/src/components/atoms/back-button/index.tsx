import React from "react";
import { styled } from "baseui";
import { useRouter } from "next/router";
import { CaretLeft } from "phosphor-react";

const Wrapper = styled("div", () => ({
  position: "relative",
  height: "1.3rem",
  width: "100%",
  cursor: "pointer",
  display: "flex",
}));

const Text = styled("div", ({ $theme }) => ({
  ...$theme.typography.font100,
  position: "relative",
  height: "1.3rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginLeft: "0.5rem",
  textTransform: "uppercase",
  [$theme.mediaQuery.large]: { ...$theme.typography.font200 },
}));

function BackButton() {
  const router = useRouter();

  return (
    <Wrapper onClick={router.back}>
      <CaretLeft height={"1.3rem"} />
      <Text>Back</Text>
    </Wrapper>
  );
}

export default BackButton;
