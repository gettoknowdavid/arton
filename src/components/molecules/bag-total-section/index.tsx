import React from "react";
import { currency } from "../../../lib/currency-formatter";
import Button from "../../atoms/button";
import { useStyletron } from "baseui";
import { useRootSelector } from "../../../hooks";
import { totalAmount } from "../../../store/slices/cart.slice";

function BagTotalSection() {
  const [css, theme] = useStyletron();
  const amount = 50;

  return (
    <div>
      <h1
        className={css({
          fontSize: "1.4rem",
          fontWeight: 400,
          letterSpacing: "1px",
          textTransform: "uppercase",
          paddingBottom: "2rem",
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
            justifyContent: "space-between",
          })}
        >
          <p
            className={css({
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "uppercase",
            })}
          >
            Sub-total
          </p>
          <p
            className={css({
              fontSize: "1.3rem",
              fontWeight: 400,
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
            justifyContent: "space-between",
          })}
        >
          <p
            className={css({
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "uppercase",
            })}
          >
            Delivery
          </p>
          <p
            className={css({
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "uppercase",
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

export default BagTotalSection;
