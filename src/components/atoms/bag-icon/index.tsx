import React from "react";
import { ShoppingBag } from "phosphor-react";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { selectBag, toggleBagDrawer } from "../../../store/slices/bag.slice";
import { useStyletron } from "baseui";

function BagIcon() {
  const [css, theme] = useStyletron();
  const dispatch = useRootDispatch();
  const { totalQuantity } = useRootSelector(selectBag);
  const openBag = () => dispatch(toggleBagDrawer());

  return (
    <div
      onClick={openBag}
      className={css({
        position: "relative",
        height: "3rem",
        display: "flex",
        alignItems: "center",
      })}
    >
      <ShoppingBag size={18} />
      {totalQuantity > 0 ? (
        <p
          className={css({
            height: "1.6rem",
            width: "1.6rem",
            backgroundColor: theme.colors.mono1000,
            color: theme.colors.mono100,
            fontSize: "9px",
            letterSpacing: 0,
            fontWeight: 300,
            lineHeight: "10px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            position: "absolute",
            top: "6px",
            bottom: 0,
            left: "12px",
          })}
        >
          {totalQuantity}
        </p>
      ) : null}
    </div>
  );
}

export default BagIcon;
