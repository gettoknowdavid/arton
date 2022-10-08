import React from "react";
import { CartItemInterface } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { currency } from "../../../lib/currency-formatter";
import { useStyletron } from "baseui";
import { useRootDispatch } from "../../../hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectSize,
} from "../../../store/slices/cart.slice";
import { Delete } from "baseui/icon";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Minus, Plus } from "phosphor-react";
import { Select, SIZE } from "baseui/select";
import { SIZES } from "../../../lib/sizes";

type Props = {
  item: CartItemInterface;
};

function CartItem(props: Props) {
  const { item } = props;
  const [css, theme] = useStyletron();

  const dispatch = useRootDispatch();

  return (
    <li
      className={css({
        paddingTop: "1rem",
        paddingRight: "1rem",
        paddingBottom: "1rem",
        paddingLeft: 0,
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "10rem",
        position: "relative",
        marginTop: "1rem",
        marginBottom: "1rem",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: theme.colors.mono400,
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
      <div className={css({ width: "100%" })}>
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
                maxHeight: "1.5rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                lineClamp: 1,
                WebkitLineClamp: 1,
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
        <FlexGrid
          flexGridColumnCount={3}
          display={"flex"}
          alignItems={"center"}
        >
          <FlexGridItem>
            <Select
              backspaceRemoves={false}
              clearable={false}
              deleteRemoves={false}
              size={SIZE.compact}
              options={SIZES}
              value={[item.size]}
              searchable={false}
              placeholder="Select size"
              onChange={(params: any) => {
                dispatch(
                  selectSize({ item: props.item, size: params.value[0] })
                );
              }}
              overrides={{
                Dropdown: {
                  style: () => ({
                    boxShadow: "none",
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  }),
                },
                DropdownListItem: {
                  style: () => ({
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    textTransform: "uppercase",
                  }),
                },

                Root: {
                  style: () => ({
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    textTransform: "uppercase",
                  }),
                },
                ControlContainer: {
                  style: () => ({
                    paddingLeft: 0,
                    marginLeft: 0,

                    backgroundColor: "transparent",

                    borderTopStyle: "solid",
                    borderRightStyle: "solid",
                    borderBottomStyle: "solid",
                    borderLeftStyle: "solid",
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderTopColor: theme.colors.mono600,
                    borderRightColor: theme.colors.mono600,
                    borderBottomColor: theme.colors.mono600,
                    borderLeftColor: theme.colors.mono600,

                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  }),
                },
              }}
            />
          </FlexGridItem>
          <FlexGridItem>
            <p
              className={css({
                fontSize: "1.1rem",
                lineHeight: "1.4rem",
                margin: 0,
                fontWeight: 300,
                textAlign: "center",
              })}
            >
              {item.colour}
            </p>
          </FlexGridItem>
          <FlexGridItem>
            <FlexGrid flexGridColumnCount={3}>
              <FlexGridItem
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Plus
                  weight={"bold"}
                  onClick={() => dispatch(increaseQuantity(item))}
                />
              </FlexGridItem>
              <FlexGridItem
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <p
                  className={css({
                    fontSize: "1.1rem",
                    lineHeight: "1.4rem",
                    margin: 0,
                    fontWeight: 300,
                  })}
                >
                  {`Qty: ${item.quantity}`}
                </p>{" "}
              </FlexGridItem>
              <FlexGridItem
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Minus
                  weight={"bold"}
                  onClick={() => dispatch(decreaseQuantity(item))}
                />
              </FlexGridItem>
            </FlexGrid>
          </FlexGridItem>
        </FlexGrid>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(item))}
        className={css({
          position: "absolute",
          top: 0,
          right: 0,
          cursor: "pointer",
          zIndex: 200,
        })}
      >
        <Delete size={20} />
      </div>
    </li>
  );
}

export default CartItem;
