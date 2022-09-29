import React from "react";
import { useStyletron } from "baseui";
import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/infinity";

type LoadingScreenProps = {
  loading: boolean;
};

function LoadingScreen(props: LoadingScreenProps) {
  const [css, theme] = useStyletron();

  return (
    <main
      className={css({
        backgroundColor: "rgba(225,225,225,0.3)",
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        cursor: "default",
      })}
    >
      <UseAnimations animation={loadingIcon} size={36} />
    </main>
  );
}

export default LoadingScreen;
