import React from "react";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { ANCHOR, Drawer } from "baseui/drawer";
import {
  clearCart,
  closeCartDrawer,
  selectCart,
  toggleCartDrawer,
  totalAmount,
} from "../../../store/slices/cart.slice";
import { CartItemInterface } from "../../../types";
import CartItem from "../../atoms/bag-item";
import { currency } from "../../../lib/currency-formatter";
import { SIZE } from "baseui/select";
import {
  StyledCartList,
  StyledBDBody,
  StyledBDFooter,
  StyledBDFreeShippingText,
  StyledBDHeader,
  StyledBDHeading,
  StyledBDSubtotalValue,
  StyledBDSubtotalWrapper,
} from "./cart-drawer.styles";
import Button from "../../atoms/button";
import { KIND } from "baseui/button";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { useRouter } from "next/router";

function CartDrawer() {
  const dispatch = useRootDispatch();
  const { cartDrawerOpen, items, totalQuantity } = useRootSelector(selectCart);
  const amount = useRootSelector(totalAmount);
  const router = useRouter();
  const openCart = () => {
    dispatch(closeCartDrawer());
    router.push("/bag");
  };

  const totalQty =
    totalQuantity > 1 ? `${totalQuantity} items` : `${totalQuantity} item`;

  return (
    <Drawer
      isOpen={cartDrawerOpen}
      onClose={() => dispatch(toggleCartDrawer())}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: 300, position: "relative" }) },
        Close: { style: () => ({ top: 0, height: "3rem", zIndex: 400 }) },
        DrawerContainer: {
          style: ({ $theme }) => ({
            borderLeftWidth: "1px",
            borderLeftStyle: "solid",
            borderLeftColor: $theme.colors.mono1000,
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
        <StyledBDHeading>My Cart, {totalQty}</StyledBDHeading>
      </StyledBDHeader>

      <StyledBDBody>
        <StyledCartList>
          {items.map((item: CartItemInterface) => (
            <CartItem key={item.id} item={item} />
          ))}
        </StyledCartList>

        <StyledBDFooter>
          <StyledBDSubtotalWrapper>
            <p>Sub-total</p>
            <StyledBDSubtotalValue>
              {currency.format(amount)}
            </StyledBDSubtotalValue>
          </StyledBDSubtotalWrapper>

          <FlexGrid flexGridColumnCount={2} flexGridColumnGap={"0.5rem"}>
            <FlexGridItem>
              <Button kind={KIND.secondary} onClick={openCart}>
                View Cart
              </Button>
            </FlexGridItem>
            <FlexGridItem>
              <Button size={SIZE.compact} disabled={!totalQuantity}>
                Checkout
              </Button>
            </FlexGridItem>
          </FlexGrid>

          <StyledBDFreeShippingText>
            <Button kind={KIND.tertiary} onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
            Free Shipping Worldwide
          </StyledBDFreeShippingText>
        </StyledBDFooter>
      </StyledBDBody>
    </Drawer>
  );
}

export default CartDrawer;
