import React from "react";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { ANCHOR, Drawer } from "baseui/drawer";
import { selectBag, toggleBagDrawer } from "../../../store/slices/bag.slice";
import { useStyletron } from "baseui";
import { BagItemInterface } from "../../../types";
import BagItem from "../../atoms/bag-item";

function BagDrawer() {
  const [css, theme] = useStyletron();

  const dispatch = useRootDispatch();
  const { bagDrawerOpen, items, totalQuantity } = useRootSelector(selectBag);

  return (
    <Drawer
      isOpen={true}
      onClose={() => dispatch(toggleBagDrawer())}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: 300 }) },
        Close: { style: () => ({ top: 0, height: "3rem" }) },
        DrawerContainer: {
          style: ({ $theme }) => ({
            borderLeftWidth: "1px",
            borderLeftStyle: "solid",
            borderLeftColor: $theme.colors.mono1000,
            paddingTop: 0,
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
      <div
        className={css({
          height: "3rem",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: theme.colors.mono1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <h1
          className={css({
            fontSize: "1.3rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1px",
          })}
        >
          Your Bag
        </h1>
      </div>
      <div
        className={css({
          paddingRight: "2rem",
          paddingBottom: "2rem",
          paddingLeft: "2rem",
        })}
      >
        <ul className={css({ padding: 0 })}>
          {items.map((item: BagItemInterface) => (
            <BagItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Drawer>
  );
}

export default BagDrawer;
