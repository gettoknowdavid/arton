import React, { ReactElement } from "react";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import SEO from "../components/seo";
import Layout from "../components/layout";
import CartTotalSection from "../components/molecules/cart-total-section";
import { currency } from "../lib/currency-formatter";
import { CartItemInterface } from "../types";
import { CartContext } from "../contexts/cart.context";
import CartItem from "../components/atoms/cart-item";

function Cart() {
  const [css, theme] = useStyletron();
  const amount = 50;

  const { state } = React.useContext(CartContext);
  const [items, setItems] = React.useState<CartItemInterface[]>([]);

  React.useEffect(() => {
    setItems(state.items);
  }, [state.items]);

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      flexGridColumnGap={"1rem"}
      paddingTop={"5rem"}
      paddingRight={["0", "0", "7rem", "26rem"]}
      paddingBottom={"5rem"}
      paddingLeft={["0", "0", "7rem", "26rem"]}
    >
      <FlexGridItem>
        <div
          className={css({
            paddingTop: 0,
            paddingRight: "1rem",
            paddingBottom: 0,
            paddingLeft: "1rem",
            backgroundColor: "transparent",
            textAlign: "center",
            [theme.mediaQuery.large]: {
              textAlign: "left",
              backgroundColor: "rgba(225,225,225,0.15)",
              marginBottom: "1rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            },
          })}
        >
          <h1
            className={css({
              ...theme.typography.font400,
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              margin: 0,
              [theme.mediaQuery.large]: { margin: "initial" },
            })}
          >
            My Cart
          </h1>
        </div>
        <ul
          className={css({
            paddingTop: "1rem",
            paddingRight: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            backgroundColor: "transparent",
            [theme.mediaQuery.large]: {
              marginBottom: "1rem",
              backgroundColor: "rgba(225,225,225,0.15)",
            },
          })}
        >
          {items.map((item: CartItemInterface) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <div
          className={css({
            paddingTop: "1rem",
            paddingRight: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            backgroundColor: "transparent",
            [theme.mediaQuery.large]: {
              backgroundColor: "rgba(225,225,225,0.15)",
            },
          })}
        >
          <div
            className={css({
              display: "none",
              alignItems: "center",
              justifyContent: "space-between",
              [theme.mediaQuery.large]: { display: "flex" },
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
        </div>
      </FlexGridItem>
      <FlexGridItem
        maxWidth={["100%", "100%", "100%", "26rem"]}
        width={"100%"}
        height={"100%"}
        backgroundColor={"rgba(225,225,225,0.2)"}
        paddingTop={"1rem"}
        paddingRight={"1rem"}
        paddingBottom={"2rem"}
        paddingLeft={"1rem"}
      >
        <CartTotalSection />
      </FlexGridItem>
    </FlexGrid>
  );
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Shopping Cart"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default Cart;
