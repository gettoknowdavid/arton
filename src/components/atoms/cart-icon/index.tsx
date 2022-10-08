import React from "react";
import { ShoppingCart } from "phosphor-react";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";
import { Block } from "baseui/block";

function CartIcon() {
  const [css, theme] = useStyletron();

  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/cart")}
      className={css({
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "100%",
      })}
    >
      <Block display={["none", "none", "none", "flex"]}>Cart</Block>
      <Block display={["flex", "flex", "flex", "none"]}>
        <ShoppingCart />
      </Block>
      <p
        className={css({
          height: "0.75rem",
          width: "0.75rem",
          backgroundColor: theme.colors.black,
          color: theme.colors.white,
          marginLeft: "0.2rem",
          fontSize: "0.563rem",
          fontWeight: 500,
          letterSpacing: 0,
          lineHeight: "0.625rem",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        })}
      >
        80
      </p>
    </div>
  );
}

export default CartIcon;
