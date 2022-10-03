import React from "react";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { ANCHOR, Drawer } from "baseui/drawer";
import { selectBag, toggleBagDrawer } from "../../../store/slices/bag.slice";

function BagDrawer() {
  const dispatch = useRootDispatch();
  const { bagDrawerOpen, items, totalQuantity } = useRootSelector(selectBag);

  return (
    <Drawer
      isOpen={bagDrawerOpen}
      onClose={() => dispatch(toggleBagDrawer())}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: 300 }) },
      }}
    >
      {`You have ${totalQuantity} item(s) in your bag.`}
    </Drawer>
  );
}

export default BagDrawer;
