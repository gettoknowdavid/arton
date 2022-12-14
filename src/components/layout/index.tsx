import React, { ReactNode } from "react";
import Header from "../organisms/header";
import { StyledLayout } from "./layout.styles";
import Footer from "../organisms/footer";
import { motion } from "framer-motion";
import BagDrawer from "../organisms/cart-drawer";
import Drawer from "../organisms/drawer";
import SearchBox from "../atoms/search-box";
import { useOutsideClick } from "../../hooks";
import { closeSearchBox, SearchContext } from "../../contexts/search";

function Layout({ children }: { children: ReactNode }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const { dispatch, state } = React.useContext(SearchContext);

  const action = () => {
    if (state.searchBoxOpen) {
      closeSearchBox({ dispatch });
    }
  };

  const { ref } = useOutsideClick(action);

  return (
    <StyledLayout>
      <Drawer />
      <BagDrawer />
      <div ref={ref}>
        <Header />
        <SearchBox />
      </div>
      <motion.div
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        style={{ minHeight: "calc(100vh - 2.8125rem)" }}
      >
        {children}
      </motion.div>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
