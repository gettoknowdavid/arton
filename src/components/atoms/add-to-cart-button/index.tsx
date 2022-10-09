import React from "react";
import { SIZE } from "baseui/select";
import { Button } from "baseui/button";
import { CartActionType, CartItemInterface } from "../../../types";
import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/infinity";
import { CartContext } from "../../../contexts/cart.context";

type Props = {
  item: CartItemInterface;
};

function AddToCartButton(props: Props) {
  const [loading, setLoading] = React.useState(false);

  const bagItem = props.item;

  const { dispatch } = React.useContext(CartContext);

  const onClick = () => {
    setLoading(true);
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: { item: bagItem },
    });
    dispatch({ type: CartActionType.TOGGLE_CART_DRAWER });
    setTimeout(
      () => dispatch({ type: CartActionType.CLOSE_CART_DRAWER }),
      5000
    );
    setLoading(false);
  };

  return (
    <Button
      onClick={onClick}
      isLoading={loading}
      size={SIZE.compact}
      overrides={{
        LoadingSpinner: {
          component: () => (
            <UseAnimations
              animation={loadingIcon}
              strokeColor={"white"}
              size={15}
            />
          ),
        },
        BaseButton: {
          style: ({ $theme }) => ({
            ...$theme.typography.font100,
            letterSpacing: ".05rem",
            width: "100%",
            textTransform: "uppercase",
          }),
        },
      }}
    >
      Add to Cart
    </Button>
  );
}

export default AddToCartButton;
