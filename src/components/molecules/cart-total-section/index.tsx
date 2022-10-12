import React from "react";
import { currency } from "../../../lib/currency-formatter";
import Button from "../../atoms/button";
import { useStyletron } from "baseui";
import { useRootSelector } from "../../../hooks";
import { totalAmount } from "../../../store/slices/cart.slice";

function CartTotalSection() {
  const [css, theme] = useStyletron();
  const amount = 50;

  return (
    <div>
      <h1
        className={css({
          ...theme.typography.font400,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          margin: 0,
          paddingBottom: "1rem",
          borderBottom: `1px solid ${theme.colors.mono400}`,
        })}
      >
        Total
      </h1>
      <div
        className={css({
          paddingBottom: "1rem",
          marginBottom: "2rem",
          borderBottom: `1px solid ${theme.colors.mono400}`,
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          })}
        >
          <p
            className={css({
              ...theme.typography.font200,
              letterSpacing: "1px",
              textTransform: "uppercase",
            })}
          >
            Sub-total
          </p>
          <p
            className={css({
              ...theme.typography.font400,
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
            })}
          >
            {currency.format(amount)}
          </p>
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          })}
        >
          <p
            className={css({
              ...theme.typography.font200,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginTop: 0,
            })}
          >
            Delivery
          </p>
          <p
            className={css({
              ...theme.typography.font200,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginTop: 0,
            })}
          >
            {currency.format(amount * 0.3)}
          </p>
        </div>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}

export default CartTotalSection;
