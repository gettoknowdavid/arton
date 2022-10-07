import React from "react";
import { SIZE } from "baseui/select";
import { Button } from "baseui/button";
import { useRootDispatch } from "../../../hooks";
import { CartItemInterface } from "../../../types";
import {
  addToCart,
  closeCartDrawer,
  toggleCartDrawer,
} from "../../../store/slices/cart.slice";
import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/infinity";

type Props = {
  item: CartItemInterface;
};

function AddToCartButton(props: Props) {
  const [loading, setLoading] = React.useState(false);

  const dispatch = useRootDispatch();
  const bagItem = props.item;

  function handleClick() {
    setLoading(true);
    // setTimeout(() => setLoading(false), 2000);
    dispatch(addToCart(bagItem));
    dispatch(toggleCartDrawer());
    setTimeout(() => dispatch(closeCartDrawer()), 5000);
    setLoading(false);
  }

  return (
    <Button
      onClick={handleClick}
      isLoading={loading}
      size={SIZE.compact}
      overrides={{
        LoadingSpinner: {
          component: () => (
            <UseAnimations
              animation={loadingIcon}
              strokeColor={"white"}
              size={14}
            />
          ),
        },
        BaseButton: {
          style: () => ({
            width: "100%",
            fontSize: "1.1rem",
            fontWeight: 400,
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
