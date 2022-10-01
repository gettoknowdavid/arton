import React from "react";
import Image from "next/image";
import leftArrow from "../../../public/left-arrow.png";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";

function BackButton() {
  const [css] = useStyletron();
  const router = useRouter();

  return (
    <div
      onClick={router.back}
      className={css({
        position: "relative",
        height: "2.4rem",
        width: "7rem",
        cursor: "pointer",
        display: "flex",
      })}
    >
      <div
        className={css({
          position: "absolute",
          height: "2.4rem",
          width: "2.4rem",
        })}
      >
        <Image src={leftArrow} alt={"left arrow"} layout={"fill"} />
      </div>
      <div
        className={css({
          position: "relative",
          height: "2.4rem",
          width: "100%",
          right: "0",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          fontSize: "1.3rem",
          fontWeight: 300,
          letterSpacing: "1px",
          marginLeft: "1.5rem",
          textTransform: "uppercase",
        })}
      >
        Back
      </div>
    </div>
  );
}

export default BackButton;
