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
        height: "3rem",
        display: "flex",
        alignItems: "center",
      })}
    >
      <ShoppingBag size={18} />
      {totalQuantity > 0 ? (
        <p
          className={css({
            height: "1.6rem",
            width: "1.6rem",
            backgroundColor: theme.colors.mono1000,
            color: theme.colors.mono100,
            fontSize: "9px",
            letterSpacing: 0,
            fontWeight: 300,
            lineHeight: "10px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            position: "absolute",
            top: "6px",
            bottom: 0,
            left: "12px",
          })}
        >
          {totalQuantity}
        </p>
      ) : null}
    </div>
  );
}

export default BagIcon;
