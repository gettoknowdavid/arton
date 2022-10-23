import React from "react";
import { ANCHOR, Drawer, SIZE } from "baseui/drawer";
import { FilterContext } from "../../../contexts/filter";
import { closeFiltersDrawer } from "../../../contexts/filter/filter.actions";
import CategoryFilter from "../../molecules/category-filter";
import SortFilter from "../../molecules/sort-filter";
import SizeFilter from "../../molecules/size-filter";
import { useStyletron } from "baseui";
import loadingIcon from "react-useanimations/lib/infinity";
import UseAnimations from "react-useanimations";

type FilterDrawerProps = {
  variant: string;
};

const LoadingState = () => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        height: "100%",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 201,
        position: "absolute",
        backgroundColor: "white",
      })}
    >
      <UseAnimations animation={loadingIcon} size={36} />
    </div>
  );
};

function FiltersDrawer(props: FilterDrawerProps) {
  const { dispatch, state } = React.useContext(FilterContext);

  const closeDrawer = () => closeFiltersDrawer({ dispatch });

  return (
    <Drawer
      isOpen={state.filterDrawerOpen}
      onClose={closeDrawer}
      size={SIZE.full}
      autoFocus
      anchor={ANCHOR.top}
      overrides={{
        Root: { style: () => ({ position: "relative" }) },
        Close: {
          style: () => ({ top: "2.8125rem", height: "2.8125rem", zIndex: 200 }),
        },
        DrawerContainer: {
          style: ({ $theme }) => ({
            borderLeftWidth: "1px",
            borderLeftStyle: "solid",
            borderLeftColor: $theme.colors.black,
          }),
        },
        DrawerBody: {
          style: () => ({
            marginTop: "6rem",
            marginRight: "1rem",
            marginLeft: "1rem",
          }),
        },
      }}
    >
      {state.loading ? <LoadingState /> : null}
      <CategoryFilter
        gqlQueryVariables={[`${props.variant}`, "unisex"]}
        variant={props.variant}
      />
      <SizeFilter variant={props.variant} />
      <SortFilter variant={props.variant} align={"left"} />
    </Drawer>
  );
}

export default FiltersDrawer;
