import React from "react";
import { ShoppingCart } from "phosphor-react";
import { styled } from "baseui";
import { useRouter } from "next/router";
import { Block } from "baseui/block";
import { CartContext } from "../../../contexts/cart.context";

const Wrapper = styled("div", () => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "100%",
}));

const Text = styled("p", ({ $theme }) => ({
  height: "0.75rem",
  width: "0.75rem",
  backgroundColor: $theme.colors.black,
  color: $theme.colors.white,
  marginLeft: "0.2rem",
  fontSize: "0.563rem",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "0.625rem",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
}));

function CartIcon() {
  const router = useRouter();

  const { state } = React.useContext(CartContext);

  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    setQuantity(state.items?.map((i) => i.quantity).reduce((a, b) => a + b, 0));
  }, [state.items]);

  return (
    <Wrapper onClick={() => router.push("/cart")}>
      <Block display={["none", "none", "none", "flex"]}>Cart</Block>
      <Block display={["flex", "flex", "flex", "none"]}>
        <ShoppingCart />
      </Block>
      {quantity > 0 ? <Text>{quantity}</Text> : null}
    </Wrapper>
  );
}

export default CartIcon;
