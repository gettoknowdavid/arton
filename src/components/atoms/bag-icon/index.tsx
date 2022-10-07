import React from "react";
import { ShoppingBag } from "phosphor-react";
import { useRootSelector } from "../../../hooks";
import { selectBag } from "../../../store/slices/bag.slice";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";

function BagIcon() {
  const [css, theme] = useStyletron();

  const router = useRouter();

  const { totalQuantity } = useRootSelector(selectBag);

  const openBag = () => router.push("/bag");

  return (
    <div
      onClick={openBag}
      className={css({
        position: "relative",
        display: "flex",
        alignItems: "center",
      })}
    >
      <ShoppingBag />
      {totalQuantity > 0 ? (
        <p
          className={css({
            height: "1rem",
            width: "1rem",
            backgroundColor: theme.colors.mono1000,
            color: theme.colors.mono100,
            fontSize: "0.563rem",
            letterSpacing: 0,
            fontWeight: 300,
            lineHeight: "0.625rem",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            position: "absolute",
            top: ".1rem",
            bottom: 0,
            left: "0.75rem",
          })}
        >
          {totalQuantity}
        </p>
      ) : null}
    </div>
  );
}

export default BagIcon;
