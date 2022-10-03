import React from "react";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { ANCHOR, Drawer } from "baseui/drawer";
import { selectBag, toggleBagDrawer } from "../../../store/slices/bag.slice";
import { useStyletron } from "baseui";
import Image from "next/image";
import { BagItem } from "../../../types";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash2";
import { currency } from "../../../lib/currency-formatter";
import Link from "next/link";

function BagDrawer() {
  const [css, theme] = useStyletron();
  const [trashed, setTrashed] = React.useState(false);

  const dispatch = useRootDispatch();
  const { bagDrawerOpen, items, totalQuantity } = useRootSelector(selectBag);

  return (
    <Drawer
      isOpen={true}
      onClose={() => dispatch(toggleBagDrawer())}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: 300 }) },
        Close: { style: () => ({ top: 0, height: "3rem" }) },
        DrawerContainer: {
          style: ({ $theme }) => ({
            borderLeftWidth: "1px",
            borderLeftStyle: "solid",
            borderLeftColor: $theme.colors.mono1000,
            paddingTop: 0,
          }),
        },
        DrawerBody: {
          style: () => ({
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
          }),
        },
      }}
    >
      <div
        className={css({
          height: "3rem",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: theme.colors.mono1000,
          paddingRight: "2rem",
          paddingLeft: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <h1
          className={css({
            fontSize: "1.3rem",
            margin: 0,
            padding: 0,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1px",
          })}
        >
          Your Bag
        </h1>
      </div>
      <div
        className={css({
          paddingTop: "2rem",
          paddingRight: "2rem",
          paddingBottom: "2rem",
          paddingLeft: "2rem",
        })}
      >
        <ul
          className={css({
            padding: 0,
            margin: 0,
          })}
        >
          {items.map((item: BagItem) => (
            <li
              key={item.id}
              className={css({
                paddingTop: "1rem",
                paddingRight: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "1rem",
                display: "flex",
                alignItems: "center",
                height: "10rem",
                position: "relative",
                marginTop: "1rem",
                marginBottom: "1rem",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: theme.colors.mono400,
                ":last-child": {
                  borderBottomWidth: 0,
                  marginBottom: 0,
                },
                ":last-first": {
                  borderBottomWidth: 0,
                  marginTop: 0,
                },
              })}
            >
              <div
                className={css({
                  height: "8rem",
                  width: "8rem",
                  position: "relative",
                  aspectRatio: 1,
                  marginRight: "1rem",
                })}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  layout={"fill"}
                  className={css({ objectFit: "contain" })}
                />
              </div>
              <div>
                <Link href={`/product/${item.slug}`} passHref>
                  <a>
                    <h2
                      className={css({
                        fontSize: "1.3rem",
                        marginTop: 0,
                        marginBottom: "4px",
                        padding: 0,
                        fontWeight: 400,
                        textTransform: "uppercase",
                        lineHeight: "1.5rem",
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
                    fontSize: "1.3rem",
                    marginTop: 0,
                    marginBottom: "4px",
                    padding: 0,
                    fontWeight: 600,
                    textTransform: "uppercase",
                  })}
                >
                  {currency.format(item.price)}
                </h3>
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "5rem",
                  })}
                >
                  <p
                    className={css({
                      fontSize: "1.1rem",
                      lineHeight: "1.4rem",
                      margin: 0,
                      fontWeight: 300,
                    })}
                  >
                    M - Medium
                  </p>
                  <p
                    className={css({
                      fontSize: "1.1rem",
                      lineHeight: "1.4rem",
                      margin: 0,
                      fontWeight: 300,
                    })}
                  >
                    {item.colour}
                  </p>
                  <p
                    className={css({
                      fontSize: "1.1rem",
                      lineHeight: "1.4rem",
                      margin: 0,
                      fontWeight: 300,
                    })}
                  >
                    {`Qty: ${item.quantity}`}
                  </p>
                </div>
              </div>
              <div
                className={css({
                  position: "absolute",
                  bottom: "1.2rem",
                  right: "1.2rem",
                  cursor: "pointer",
                  zIndex: 200,
                })}
              >
                <UseAnimations
                  animation={trash}
                  loop
                  size={20}
                  reverse={trashed}
                  onClick={() => {
                    setTrashed(!trashed);
                    // setTimeout(() => setTrashed(false), 2000);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
}

export default BagDrawer;
