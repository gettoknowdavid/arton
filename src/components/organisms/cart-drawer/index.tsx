import React from "react";
import { ANCHOR, Drawer } from "baseui/drawer";
import { StyledBDHeader, StyledBDHeading } from "./cart-drawer.styles";

function CartDrawer() {
  return (
    <Drawer
      isOpen={false}
      onClose={() => null}
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

      {/*<StyledBDBody>*/}
      {/*  <StyledCartList>*/}
      {/*    {items.map((item: CartItemInterface) => (*/}
      {/*      <CartItem key={item.id} item={item} />*/}
      {/*    ))}*/}
      {/*  </StyledCartList>*/}

      {/*  <StyledBDFooter>*/}
      {/*    <StyledBDSubtotalWrapper>*/}
      {/*      <p>Sub-total</p>*/}
      {/*      <StyledBDSubtotalValue>*/}
      {/*        {currency.format(amount)}*/}
      {/*      </StyledBDSubtotalValue>*/}
      {/*    </StyledBDSubtotalWrapper>*/}

      {/*    <FlexGrid flexGridColumnCount={2} flexGridColumnGap={"0.5rem"}>*/}
      {/*      <FlexGridItem>*/}
      {/*        <Button kind={KIND.secondary} onClick={openCart}>*/}
      {/*          View Cart*/}
      {/*        </Button>*/}
      {/*      </FlexGridItem>*/}
      {/*      <FlexGridItem>*/}
      {/*        <Button size={SIZE.compact} disabled={!totalQuantity}>*/}
      {/*          Checkout*/}
      {/*        </Button>*/}
      {/*      </FlexGridItem>*/}
      {/*    </FlexGrid>*/}

      {/*    <StyledBDFreeShippingText>*/}
      {/*      <Button kind={KIND.tertiary} onClick={() => dispatch(clearCart())}>*/}
      {/*        Clear Cart*/}
      {/*      </Button>*/}
      {/*      Free Shipping Worldwide*/}
      {/*    </StyledBDFreeShippingText>*/}
      {/*  </StyledBDFooter>*/}
      {/*</StyledBDBody>*/}
    </Drawer>
  );
}

export default CartDrawer;
