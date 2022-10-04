import React, { ReactElement } from "react";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { useRootSelector } from "../hooks";
import { totalAmount } from "../store/slices/bag.slice";
import { currency } from "../lib/currency-formatter";
import Button from "../components/atoms/button";

function Bag() {
  const [css, theme] = useStyletron();
  const amount = useRootSelector(totalAmount);

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
            My Bag
          </h1>
        </div>
        <div
          className={css({
            paddingTop: "1rem",
            paddingRight: "2rem",
            paddingBottom: "1rem",
            paddingLeft: "2rem",
            backgroundColor: theme.colors.mono200,
          })}
        >
          list
        </div>
      </FlexGridItem>
      <FlexGridItem
        maxWidth={"36rem"}
        width={"100%"}
        backgroundColor={"mono200"}
        paddingTop={"1rem"}
        paddingRight={"2rem"}
        paddingBottom={"2rem"}
        paddingLeft={"2rem"}
      >
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
                {currency.format(amount)}
              </p>
            </div>
          </div>
          <Button>Checkout</Button>
        </div>
      </FlexGridItem>
    </FlexGrid>
  );
}

Bag.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Shopping Bag"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default Bag;
