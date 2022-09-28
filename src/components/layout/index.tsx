import React, { ReactNode } from "react";
import Header from "../organisms/header";
import { StyledLayout, StyledMain } from "./layout.styles";
import Footer from "../organisms/footer";
import { motion } from "framer-motion";
import { useStyletron } from "baseui";

function Layout({ children }: { children: ReactNode }) {
  const [css, theme] = useStyletron();

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <StyledLayout>
        <StyledMain>
          <Header />
          <motion.div
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
            className={css({
              paddingLeft: "2rem",
              paddingRight: "2rem",
              maxWidth: "1920px",
              margin: "0 auto",
              position: "relative",
            })}
          >
            {children}
          </motion.div>
          <Footer />
        </StyledMain>
      </StyledLayout>
    </>
  );
}

export default Layout;
