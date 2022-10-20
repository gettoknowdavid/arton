import React from "react";
import { List, X } from "phosphor-react";
import { Block } from "baseui/block";
import { StyledHamburger } from "./hamburger.styles";
import { GlobalContext } from "../../../contexts/global.context";
import { closeSearchBox, SearchContext } from "../../../contexts/search";

function Hamburger() {
  const { dispatch, state } = React.useContext(SearchContext);

  return (
    <GlobalContext.Consumer>
      {({ toggleDrawer, drawerOpen }) => (
        <Block display={["flex", "flex", "flex", "none"]}>
          <StyledHamburger
            onClick={() => {
              if (state.searchBoxOpen) {
                closeSearchBox({ dispatch });
              }
              toggleDrawer();
            }}
          >
            {drawerOpen ? <X /> : <List />}
          </StyledHamburger>
        </Block>
      )}
    </GlobalContext.Consumer>
  );
}

export default Hamburger;
