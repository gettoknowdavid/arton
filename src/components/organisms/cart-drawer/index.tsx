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
import { CartContext, totalAmount } from "../../../contexts/cart";
import { CartActionType, CartItemInterface } from "../../../types";
import CartItem from "../../atoms/cart-item";
import { currency } from "../../../lib/currency-formatter";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { KIND, SIZE } from "baseui/button";
import Button from "../../atoms/button";
import { useRouter } from "next/router";

function CartDrawer() {
  const router = useRouter();
  const { dispatch, state } = React.useContext(CartContext);

  const amount = currency.format(totalAmount(state));

  const closeDrawer = () => {
    dispatch({ type: CartActionType.CLOSE_CART_DRAWER });
  };

  const clearCart = () => {
    dispatch({ type: CartActionType.CLEAR_CART });
  };

  const goTo = (path: string) => {
    closeDrawer();
    router?.push(`/${path}`);
  };

  return (
    <Drawer
      isOpen={state.cartDrawerOpen}
      onClose={closeDrawer}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: 300, position: "relative" }) },
        Close: { style: () => ({ top: 0, height: "2.8125rem", zIndex: 400 }) },
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
            <StyledBDSubtotalValue>{amount}</StyledBDSubtotalValue>
          </StyledBDSubtotalWrapper>

          <FlexGrid flexGridColumnCount={2} flexGridColumnGap={"0.5rem"}>
            <FlexGridItem>
              <Button kind={KIND.secondary} onClick={() => goTo("cart")}>
                View Cart
              </Button>
            </FlexGridItem>
            <FlexGridItem>
              <Button size={SIZE.compact} onClick={() => goTo("checkout")}>
                Checkout
              </Button>
            </FlexGridItem>
          </FlexGrid>

          <StyledBDFreeShippingText>
            <Button kind={KIND.tertiary} onClick={clearCart}>
              Clear Cart
            </Button>
          </StyledBDFreeShippingText>
        </StyledBDFooter>
      </StyledBDBody>
    </Drawer>
  );
}

export default CartDrawer;
