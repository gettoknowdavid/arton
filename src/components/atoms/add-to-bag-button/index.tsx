import React from "react";
import { SIZE } from "baseui/select";
import { Button } from "baseui/button";
import { useRootDispatch } from "../../../hooks";
import { BagItemInterface, ProductType } from "../../../types";
import { addToBag, toggleBagDrawer } from "../../../store/slices/bag.slice";
import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/infinity";

type Props = {
  product: ProductType;
};

function AddToBagButton(props: Props) {
  const [loading, setLoading] = React.useState(false);

  const dispatch = useRootDispatch();

  const { id, attributes } = props.product;

  const bagItem: BagItemInterface = {
    id: id,
    name: attributes.title,
    slug: attributes.slug,
    image: attributes.image.data.attributes.url,
    price: attributes.price,
    colour: attributes.colour.data.attributes.title,
    quantity: 1,
  };

  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    dispatch(addToBag(bagItem));
    dispatch(toggleBagDrawer());
    setTimeout(() => dispatch(toggleBagDrawer()), 5000);
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
