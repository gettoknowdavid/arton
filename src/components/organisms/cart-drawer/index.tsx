import React from "react";
import { ANCHOR, Drawer } from "baseui/drawer";
import {
  StyledBDBody,
  StyledBDFooter,
  StyledBDFreeShippingText,
  StyledBDHeader,
  StyledBDHeading,
  StyledBDSubtotalValue,
  StyledBDSubtotalWrapper,
  StyledCartList,
} from "./cart-drawer.styles";
import { CartContext } from "../../../contexts/cart.context";
import { CartActionType, CartItemInterface } from "../../../types";
import CartItem from "../../atoms/cart-item";
import { currency } from "../../../lib/currency-formatter";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { KIND, SIZE } from "baseui/button";
import Button from "../../atoms/button";

function CartDrawer() {
  const { dispatch, state } = React.useContext(CartContext);

  const closeDrawer = () => {
    dispatch({ type: CartActionType.CLOSE_CART_DRAWER });
  };

  return (
    <Drawer
      isOpen={state.cartDrawerOpen}
      onClose={closeDrawer}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: 300, position: "relative" }) },
        Close: { style: () => ({ top: 0, height: "3rem", zIndex: 400 }) },
        DrawerContainer: {
          style: ({ $theme }) => ({
            borderLeftWidth: "1px",
            borderLeftStyle: "solid",
            borderLeftColor: $theme.colors.black,
          }),
        },
        DrawerBody: {
          style: () => ({
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
          }),
        },
      }}
    >
      <StyledBDHeader>
        <StyledBDHeading>My Cart</StyledBDHeading>
      </StyledBDHeader>

      <StyledBDBody>
        <StyledCartList>
          {state.items.map((item: CartItemInterface) => (
            <CartItem key={item.id} item={item} />
          ))}
        </StyledCartList>

        <StyledBDFooter>
          <StyledBDSubtotalWrapper>
            <p>Sub-total</p>
            <StyledBDSubtotalValue>{currency.format(50)}</StyledBDSubtotalValue>
          </StyledBDSubtotalWrapper>

          <FlexGrid flexGridColumnCount={2} flexGridColumnGap={"0.5rem"}>
            <FlexGridItem>
              <Button kind={KIND.secondary} onClick={() => {}}>
                View Cart
              </Button>
            </FlexGridItem>
            <FlexGridItem>
              <Button size={SIZE.compact}>Checkout</Button>
            </FlexGridItem>
          </FlexGrid>

          <StyledBDFreeShippingText>
            <Button kind={KIND.tertiary} onClick={() => {}}>
              Clear Cart
            </Button>
          </StyledBDFreeShippingText>
        </StyledBDFooter>
      </StyledBDBody>
    </Drawer>
  );
}

export default CartDrawer;
