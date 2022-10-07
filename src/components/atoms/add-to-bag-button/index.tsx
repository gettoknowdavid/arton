import React from "react";
import { SIZE } from "baseui/select";
import { Button } from "baseui/button";
import { useRootDispatch } from "../../../hooks";
import { BagItemInterface } from "../../../types";
import {
  addToBag,
  closeBagDrawer,
  toggleBagDrawer,
} from "../../../store/slices/cart.slice";
import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/infinity";

type Props = {
  item: BagItemInterface;
};

function AddToBagButton(props: Props) {
  const [loading, setLoading] = React.useState(false);

  const dispatch = useRootDispatch();
  const bagItem = props.item;

  function handleClick() {
    setLoading(true);
    // setTimeout(() => setLoading(false), 2000);
    dispatch(addToBag(bagItem));
    dispatch(toggleBagDrawer());
    setTimeout(() => dispatch(closeBagDrawer()), 5000);
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
      Add to Bag
    </Button>
  );
}

export default AddToBagButton;
