import React, { ReactElement } from "react";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { useRootSelector } from "../hooks";
import { selectBag, totalAmount } from "../store/slices/bag.slice";
import BagTotalSection from "../components/molecules/bag-total-section";
import { BagItemInterface } from "../types";
import BagItem from "../components/atoms/bag-item";
import { currency } from "../lib/currency-formatter";

function Bag() {
  const [css, theme] = useStyletron();
  const { items } = useRootSelector(selectBag);
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
            marginBottom: "1rem",
            backgroundColor: theme.colors.mono200,
          })}
        >
          <ul className={css({ padding: 0 })}>
            {items.map((item: BagItemInterface) => (
              <BagItem key={item.id} item={item} />
            ))}
          </ul>
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

Bag.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Shopping Bag"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};

export default Bag;
