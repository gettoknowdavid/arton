import React from "react";
import { BagItemInterface } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { currency } from "../../../lib/currency-formatter";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash2";
import { useStyletron } from "baseui";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { removeFromBag, selectBag } from "../../../store/slices/bag.slice";

type Props = {
  item: BagItemInterface;
};

function BagItem(props: Props) {
  const { item } = props;
  const [css, theme] = useStyletron();
  const [trashed, setTrashed] = React.useState(false);

  const dispatch = useRootDispatch();
  const { bagDrawerOpen, items, totalQuantity } = useRootSelector(selectBag);

  return (
    <li
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
          onClick={() => dispatch(removeFromBag(item))}
        />
      </div>
    </li>
  );
}

export default BagItem;
