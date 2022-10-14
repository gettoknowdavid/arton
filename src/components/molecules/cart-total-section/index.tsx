import React from "react";
import { currency } from "../../../lib/currency-formatter";
import Button from "../../atoms/button";
import { useStyletron } from "baseui";
import { CartContext, totalAmount } from "../../../contexts/cart.context";
import { useRouter } from "next/router";

function CartTotalSection() {
  const [css, theme] = useStyletron();
  const router = useRouter();

  const { state } = React.useContext(CartContext);
  const amount = currency.format(totalAmount(state));
  const discount = currency.format(totalAmount(state) * 0.15);

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
            {amount}
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
            {discount}
          </p>
        </div>
      </div>
      <Button onClick={() => router.push("/checkout")}>Checkout</Button>
    </div>
  );
}

export default CartTotalSection;
