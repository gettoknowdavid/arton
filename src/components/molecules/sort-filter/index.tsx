import React from "react";
import { useStyletron } from "baseui";
const SORT_LIST = [
  { id: 0, name: "Price low to high" },
  { id: 1, name: "Price high to low" },
];

function SortFilter() {
  const [css, theme] = useStyletron();

  return (
    <div>
      <h1
        className={css({
          marginTop: 0,
          marginBottom: "1rem",
          padding: 0,
          fontSize: "1.2rem",
          fontWeight: 600,
          textTransform: "uppercase",
        })}
      >
        SORT
      </h1>
      <ul className={css({ margin: 0, padding: 0, listStyleType: "none" })}>
        {SORT_LIST.map((ITEM) => (
          <li
            key={ITEM.id}
            className={css({
              marginBottom: 0,
              padding: 0,
              textTransform: "uppercase",
              fontWeight: 300,
              fontSize: "1rem",
              lineHeight: "1.3rem",
              cursor: "pointer",
              ":hover": { color: theme.colors.mono600 },
            })}
          >
            <p>{ITEM.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortFilter;
