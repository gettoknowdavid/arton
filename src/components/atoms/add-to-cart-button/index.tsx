import React from "react";
import { SIZE } from "baseui/select";
import { CartActionType, CartItemInterface } from "../../../types";
import { CartContext } from "../../../contexts/cart.context";
import Button from "../button";
import { Block, BlockProps } from "baseui/block";

type Props = {
  item: CartItemInterface;
  set?: BlockProps;
};

function AddToCartButton(props: Props) {
  const [loading, setLoading] = React.useState(false);

  const { dispatch } = React.useContext(CartContext);

  const onClick = () => {
    setLoading(true);
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: { item: props.item },
    });
    dispatch({ type: CartActionType.TOGGLE_CART_DRAWER });
    setTimeout(
      () => dispatch({ type: CartActionType.CLOSE_CART_DRAWER }),
      5000
    );
    setLoading(false);
  };

  return (
    <Block {...props.set}>
      <Button onClick={onClick} isLoading={loading} size={SIZE.compact}>
        Add to Cart
      </Button>
    </Block>
  );
}

export default AddToCartButton;
