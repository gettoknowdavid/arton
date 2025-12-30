import React from "react";
import { MagnifyingGlass } from "phosphor-react";
import { Input } from "baseui/input";
import { useStyletron } from "baseui";
import { motion } from "framer-motion";
import { productSearch, SearchContext } from "../../../contexts/search";
import loadingIcon from "react-useanimations/lib/infinity";
import UseAnimations from "react-useanimations";
import SearchItem from "../search-item";

const LoadingState = () => {
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({
        height: "22rem",
        width: "100%",
        maxWidth: "1920px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.white,
        position: "relative",
        borderRight: `1px solid ${theme.colors.black}`,
        borderBottom: `1px solid ${theme.colors.black}`,
        borderLeft: `1px solid ${theme.colors.black}`,
        paddingBlock: "1rem",
        [theme.mediaQuery.large]: { padding: 0, height: "36rem" },
      })}
    >
      <UseAnimations animation={loadingIcon} size={36} autoplay={true} />
    </div>
  );
};

const EmptyState = () => {
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({
        height: "10rem",
        width: "100%",
        maxWidth: "1920px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white,
        position: "relative",
        borderRight: `1px solid ${theme.colors.black}`,
        borderBottom: `1px solid ${theme.colors.black}`,
        borderLeft: `1px solid ${theme.colors.black}`,
        paddingBlock: "1rem",
        [theme.mediaQuery.large]: { padding: 0 },
      })}
    >
      <h1
        className={css({
          ...theme.typography.font350,
          textTransform: "uppercase",
          paddingInline: "1rem",
          textAlign: "center",
          paddingBlock: "1rem",
          margin: 0,
        })}
      >
        Nothing to show
      </h1>
    </div>
  );
};

function SearchBox() {
  const [css, theme] = useStyletron();

  const { dispatch, state } = React.useContext(SearchContext);

  const [value, setValue] = React.useState("");

  const variants = {
    closed: { opacity: 0, x: 0, top: -100 },
    open: { opacity: 1, x: 0, top: "2.8125rem" },
  };

  return (
    <motion.div
      animate={state.searchBoxOpen ? "open" : "closed"}
      variants={variants}
      className={css({ position: "fixed", width: "100%", zIndex: 95 })}
    >
      <Input
        value={value}
        clearable
        onChange={async (e) => {
          setValue(e.target.value);
          await productSearch({ dispatch, query: value });
        }}
        placeholder="WHAT ARE YOU LOOKING FOR?"
        startEnhancer={() => <MagnifyingGlass />}
        onKeyDown={async () => await productSearch({ dispatch, query: value })}
        overrides={{
          InputContainer: {
            style: () => ({
              outline: `transparent solid`,
              backgroundColor: "white",
              width: "100%",
              maxWidth: "1920px",
              zIndex: 95,
            }),
          },
          Input: {
            style: ({ $theme }) => ({
              ...$theme.typography.font200,
              outline: `transparent solid`,
              backgroundColor: "white",
              zIndex: 95,
            }),
          },
          Root: {
            style: () => ({
              zIndex: 95,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopWidth: 0,
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "black",
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderRightColor: "black",
              borderLeftWidth: "1px",
              borderLeftStyle: "solid",
              borderLeftColor: "black",
              outline: `transparent solid`,
              width: "100%",
              maxWidth: "1920px",
              backgroundColor: "white",
            }),
          },
          StartEnhancer: {
            style: () => ({
              paddingRight: 0,
              paddingLeft: 0,
              backgroundColor: "transparent",
            }),
          },
        }}
      />
      {value && !state.result.length && !state.loading ? <EmptyState /> : null}
      {state.loading ? <LoadingState /> : null}
      {state.result.length && !state.loading ? (
        <div
          className={css({
            height: "22rem",
            width: "100%",
            maxWidth: "1920px",
            backgroundColor: theme.colors.white,
            position: "relative",
            borderRight: `1px solid ${theme.colors.black}`,
            borderBottom: `1px solid ${theme.colors.black}`,
            borderLeft: `1px solid ${theme.colors.black}`,
            paddingBlock: "1rem",
            [theme.mediaQuery.large]: { padding: 0, height: "36rem" },
          })}
        >
          <h1
            className={css({
              ...theme.typography.font350,
              textTransform: "uppercase",
              paddingInline: "1rem",
              textAlign: "center",
              paddingBlock: "1rem",
              margin: 0,
            })}
          >
            Suggestions
          </h1>
          <ul
            className={css({
              display: "flex",
              height: "100%",
              width: "100%",
              overflowX: "auto",
              whiteSpace: "nowrap",
              listStyleType: "none",
              justifyContent: "flex-start",
              paddingInline: "1rem",
            })}
          >
            {state.result.map((item) => (
              <SearchItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      ) : null}
    </motion.div>
  );
}

export default SearchBox;
