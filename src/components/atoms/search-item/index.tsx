import React from "react";
import Image from "next/image";
import { useStyletron } from "baseui";
import { ProductType } from "../../../types";

type SearchItemProps = {
  item: ProductType;
};

function SearchItem(props: SearchItemProps) {
  const [css, theme] = useStyletron();
  const item = props.item;

  return (
    <li
      className={css({
        marginRight: "1rem",
        display: "block",
        backgroundColor: theme.colors.mono200,
        height: "12rem",
        aspectRatio: 4 / 5,
        [theme.mediaQuery.large]: { height: "24rem" },
      })}
    >
      <div
        className={css({
          height: "100%",
          width: "100%",
          position: "relative",
          display: "block",
        })}
      >
        <Image
          src={item.attributes.image.data.attributes.url}
          alt={item.attributes.image.data.attributes.alternativeText}
          layout={"fill"}
          className={css({ objectFit: "cover" })}
        />
      </div>
      <p
        className={css({
          ...theme.typography.font100,
          textTransform: "uppercase",
          lineHeight: "1.1rem",
          whiteSpace: "initial",
          height: "2.2rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          lineClamp: 2,
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          [theme.mediaQuery.small]: { fontSize: "0.563rem" },
          [theme.mediaQuery.medium]: { fontSize: "0.625rem" },
          [theme.mediaQuery.large]: { fontSize: "0.75rem" },
        })}
      >
        {item.attributes.title}
      </p>
    </li>
  );
}

export default SearchItem;
