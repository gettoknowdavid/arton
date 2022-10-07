import React from "react";
import { ANCHOR, Drawer as BaseDrawer } from "baseui/drawer";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { closeDrawer, selectGlobal } from "../../../store/slices/global.slice";

function Drawer() {
  const dispatch = useRootDispatch();
  const { drawerOpen } = useRootSelector(selectGlobal);

  return (
    <BaseDrawer
      isOpen={drawerOpen}
      onClose={() => dispatch(closeDrawer())}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: 300, position: "relative" }) },
        Close: { style: () => ({ top: 0, height: "2.8125rem", zIndex: 400 }) },
        DrawerContainer: {
          style: ({ $theme }) => ({
            borderLeftWidth: "0.063rem",
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
      App Drawer
    </BaseDrawer>
  );
}

export default Drawer;
