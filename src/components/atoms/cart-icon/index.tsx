import React from "react";
import { ShoppingCart } from "phosphor-react";
import { useRootSelector } from "../../../hooks";
import { selectCart } from "../../../store/slices/cart.slice";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";
import { Block } from "baseui/block";

function CartIcon() {
  const [css, theme] = useStyletron();

  const router = useRouter();

  const { totalQuantity } = useRootSelector(selectCart);

  const openBag = () => router.push("/bag");

  return (
    <div
      onClick={openBag}
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
      {totalQuantity > 0 ? (
        <p
          className={css({
            height: "0.85rem",
            width: "0.85rem",
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
          {totalQuantity}
        </p>
      ) : null}
    </div>
  );
}

export default CartIcon;
