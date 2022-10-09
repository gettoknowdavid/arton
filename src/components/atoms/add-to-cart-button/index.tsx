import React from "react";
import { SIZE } from "baseui/select";
import { CartActionType, CartItemInterface } from "../../../types";
import { CartContext } from "../../../contexts/cart.context";
import Button from "../button";

function AddToCartButton(item: CartItemInterface) {
  const [loading, setLoading] = React.useState(false);

  const { dispatch } = React.useContext(CartContext);

  const onClick = () => {
    setLoading(true);
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: { item: item },
    });
    dispatch({ type: CartActionType.TOGGLE_CART_DRAWER });
    setTimeout(
      () => dispatch({ type: CartActionType.CLOSE_CART_DRAWER }),
      5000
    );
    setLoading(false);
  };

  return (
    <Button onClick={onClick} isLoading={loading} size={SIZE.compact}>
      Add to Cart
    </Button>
  );
}

export default AddToCartButton;
