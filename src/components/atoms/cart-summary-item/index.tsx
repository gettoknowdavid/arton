import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import Image from "next/image";
import Link from "next/link";
import { currency } from "../../../lib/currency-formatter";
import { CartItemInterface } from "../../../types";
import { useStyletron } from "baseui";

type CartSummaryProp = {
  item: CartItemInterface;
};

function CartSummaryItem(props: CartSummaryProp) {
  const [css, theme] = useStyletron();
  const { item } = props;
  return (
    <li
      className={css({
        paddingTop: "0.5rem",
        paddingRight: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "0.5rem",
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "7rem",
        position: "relative",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: theme.colors.mono400,
      })}
    >
      <FlexGrid
        flexGridColumnCount={3}
        height={"100%"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"stretch"}
      >
        <FlexGridItem maxWidth={"6rem"} width={"100%"}>
          <div
            className={css({
              height: "5rem",
              width: "5rem",
              backgroundColor: theme.colors.mono200,
              position: "relative",
              aspectRatio: 1,
              marginRight: "0.5rem",
              [theme.mediaQuery.large]: { marginRight: "1rem" },
            })}
          >
            <Image
              src={item.image}
              alt={item.name}
              layout={"fill"}
              priority
              className={css({ objectFit: "contain" })}
            />
          </div>
        </FlexGridItem>
        <FlexGridItem maxWidth={"100%"} width={"100%"}>
          <div className={css({ width: "100%" })}>
            <Link href={`/product/${item.slug}`} passHref>
              <a>
                <h2
                  className={css({
                    ...theme.typography.font150,
                    fontWeight: 400,
                    marginTop: 0,
                    marginBottom: "4px",
                    padding: 0,
                    textTransform: "uppercase",
                    lineHeight: "130%",
                    maxHeight: "3rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    lineClamp: 2,
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  })}
                >
                  {item.name}
                </h2>
              </a>
            </Link>
            <h3
              className={css({
                ...theme.typography.font150,
                marginTop: 0,
                marginBottom: "4px",
                padding: 0,
                fontWeight: 600,
                textTransform: "uppercase",
              })}
            >
              {currency.format(item.price)}
            </h3>
          </div>
        </FlexGridItem>
        <FlexGridItem maxWidth={"2rem"} width={"100%"}>
          <p
            className={css({
              ...theme.typography.font150,
              marginTop: 0,
              marginBottom: "4px",
              padding: 0,
              textAlign: "right",
            })}
          >
            {`x${item.quantity}`}
          </p>
        </FlexGridItem>
      </FlexGrid>
    </li>
  );
}

export default CartSummaryItem;
