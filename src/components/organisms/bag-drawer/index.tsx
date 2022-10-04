import React from "react";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { ANCHOR, Drawer } from "baseui/drawer";
import {
  selectBag,
  toggleBagDrawer,
  totalAmount,
} from "../../../store/slices/bag.slice";
import { BagItemInterface } from "../../../types";
import BagItem from "../../atoms/bag-item";
import { currency } from "../../../lib/currency-formatter";
import { SIZE } from "baseui/select";
import {
  StyledBagList,
  StyledBDBody,
  StyledBDFooter,
  StyledBDFreeShippingText,
  StyledBDHeader,
  StyledBDHeading,
  StyledBDSubtotalValue,
  StyledBDSubtotalWrapper,
} from "./bag-drawer.styles";
import Button from "../../atoms/button";
import { KIND } from "baseui/button";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

function BagDrawer() {
  const dispatch = useRootDispatch();
  const { bagDrawerOpen, items, totalQuantity } = useRootSelector(selectBag);
  const amount = useRootSelector(totalAmount);

  const totalQty =
    totalQuantity > 1 ? `${totalQuantity} items` : `${totalQuantity} item`;

  return (
    <Drawer
      isOpen={bagDrawerOpen}
      onClose={() => dispatch(toggleBagDrawer())}
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
        <StyledBDHeading>Your Bag, {totalQty}</StyledBDHeading>
      </StyledBDHeader>

      <StyledBDBody>
        <StyledBagList>
          {items.map((item: BagItemInterface) => (
            <BagItem key={item.id} item={item} />
          ))}
        </StyledBagList>

        <StyledBDFooter>
          <StyledBDSubtotalWrapper>
            <p>Sub-total</p>
            <StyledBDSubtotalValue>
              {currency.format(amount)}
            </StyledBDSubtotalValue>
          </StyledBDSubtotalWrapper>

          <FlexGrid flexGridColumnCount={2} flexGridColumnGap={"0.5rem"}>
            <FlexGridItem>
              <Button kind={KIND.secondary}>View Bag</Button>
            </FlexGridItem>
            <FlexGridItem>
              <Button size={SIZE.compact}>Checkout</Button>
            </FlexGridItem>
          </FlexGrid>

          <StyledBDFreeShippingText>
            Free shipping worldwide
          </StyledBDFreeShippingText>
        </StyledBDFooter>
      </StyledBDBody>
    </Drawer>
  );
}

export default BagDrawer;
