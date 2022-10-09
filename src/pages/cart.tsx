import React, { ReactElement } from "react";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import SEO from "../components/seo";
import Layout from "../components/layout";
import BagTotalSection from "../components/molecules/bag-total-section";
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
      flexGridColumnCount={2}
      flexGridColumnGap={"1rem"}
      paddingTop={"5rem"}
      paddingRight={"40rem"}
      paddingLeft={"40rem"}
    >
      <FlexGridItem>
        <div
          className={css({
            paddingTop: "1rem",
            paddingRight: "2rem",
            paddingBottom: "1rem",
            paddingLeft: "2rem",
            backgroundColor: theme.colors.mono200,
            marginBottom: "1rem",
          })}
        >
          <h1
            className={css({
              fontSize: "1.4rem",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "uppercase",
            })}
          >
            My Cart
          </h1>
        </div>
        <ul
          className={css({
            paddingTop: "1rem",
            paddingRight: "2rem",
            paddingBottom: "1rem",
            paddingLeft: "2rem",
            marginBottom: "1rem",
            backgroundColor: theme.colors.mono200,
          })}
        >
          {items.map((item: CartItemInterface) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <div
          className={css({
            paddingTop: "1rem",
            paddingRight: "2rem",
            paddingBottom: "1rem",
            paddingLeft: "2rem",
            backgroundColor: theme.colors.mono200,
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
        </div>
      </FlexGridItem>
      <FlexGridItem
        maxWidth={"36rem"}
        width={"100%"}
        display={"block"}
        height={"100%"}
        backgroundColor={"mono200"}
        paddingTop={"1rem"}
        paddingRight={"2rem"}
        paddingBottom={"2rem"}
        paddingLeft={"2rem"}
      >
        <BagTotalSection />
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
