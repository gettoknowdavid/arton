import React from "react";
import { CartActionType, CartItemInterface } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { currency } from "../../../lib/currency-formatter";
import { useStyletron } from "baseui";
import { Delete } from "baseui/icon";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Minus, Plus } from "phosphor-react";
import { Select, SIZE } from "baseui/select";
import { CartContext } from "../../../contexts/cart/cart.context";

type Props = {
  item: CartItemInterface;
};

function CartItem(props: Props) {
  const { item } = props;
  const [css, theme] = useStyletron();

  const { dispatch } = React.useContext(CartContext);

  const removeItem = () => {
    dispatch({
      type: CartActionType.REMOVE_FROM_CART,
      payload: { item: item },
    });
    dispatch({ type: CartActionType.CLOSE_CART_DRAWER });
  };
  const decrease = () => {
    dispatch({
      type: CartActionType.DECREASE_QUANTITY,
      payload: { id: item.id },
    });
  };
  const increase = () => {
    dispatch({
      type: CartActionType.INCREASE_QUANTITY,
      payload: { id: item.id },
    });
  };

  return (
    <li
      className={css({
        paddingTop: "0.5rem",
        paddingRight: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: 0,
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "10rem",
        position: "relative",
        marginTop: "0.75rem",
        marginBottom: "0.75rem",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: theme.colors.mono400,
      })}
    >
      <div
        className={css({
          height: "8rem",
          width: "6rem",
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
      <div className={css({ width: "100%" })}>
        <Link href={`/product/${item.slug}`} passHref>
          <a>
            <h2
              className={css({
                ...theme.typography.font250,
                fontWeight: 400,
                marginTop: 0,
                marginBottom: "4px",
                padding: 0,
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
            ...theme.typography.font250,
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
          flexGridColumnCount={[1, 1, 3, 3]}
          display={"flex"}
          alignItems={"center"}
        >
          <FlexGridItem>
            <Select
              backspaceRemoves={false}
              clearable={false}
              deleteRemoves={false}
              size={SIZE.compact}
              options={item.sizes}
              value={[item.size]}
              searchable={false}
              placeholder="Select size"
              getOptionLabel={({ option }) =>
                `${option.attributes.sizeCode} - ${option.attributes.title}`
              }
              getValueLabel={({ option }) =>
                `${option.attributes.sizeCode} - ${option.attributes.title}`
              }
              onChange={(params: any) => {
                dispatch({
                  type: CartActionType.SELECT_SIZE,
                  payload: { item: props.item, size: params.value[0] },
                });
              }}
              overrides={{
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
                  style: ({ $theme }) => ({
                    ...$theme.typography.font100,
                    textTransform: "uppercase",
                  }),
                },

                IconsContainer: { style: () => ({ paddingRight: "0.5rem" }) },
                Root: {
                  style: ({ $theme }) => ({
                    ...$theme.typography.font100,
                    textTransform: "uppercase",
                  }),
                },
                ValueContainer: { style: () => ({ paddingLeft: 0 }) },
              }}
            />
          </FlexGridItem>
          <FlexGridItem>
            <p
              className={css({
                ...theme.typography.font100,
                textTransform: "uppercase",
                margin: 0,
                textAlign: "left",
                [theme.mediaQuery.medium]: { textAlign: "center" },
                [theme.mediaQuery.large]: { textAlign: "center" },
              })}
            >
              {item.colour}
            </p>
          </FlexGridItem>
          <FlexGridItem>
            <FlexGrid
              flexGridColumnCount={3}
              marginTop={[".25rem", ".25rem", ".25rem", "0"]}
            >
              <FlexGridItem
                display={"flex"}
                justifyContent={["initial", "initial", "initial", "center"]}
                alignItems={"center"}
                className={css({ cursor: "pointer" })}
              >
                <Plus
                  size={theme.typography.font100.fontSize}
                  onClick={increase}
                />
              </FlexGridItem>
              <FlexGridItem
                display={"flex"}
                justifyContent={["initial", "initial", "initial", "center"]}
                alignItems={"center"}
              >
                <p
                  className={css({
                    ...theme.typography.font100,
                    textTransform: "uppercase",
                    margin: 0,
                    textAlign: "center",
                  })}
                >
                  {`Qty: ${item.quantity}`}
                </p>
              </FlexGridItem>
              <FlexGridItem
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                className={css({ cursor: "pointer" })}
              >
                <Minus
                  size={theme.typography.font100.fontSize}
                  onClick={decrease}
                />
              </FlexGridItem>
            </FlexGrid>
          </FlexGridItem>
        </FlexGrid>
      </div>
      <div
        onClick={removeItem}
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
