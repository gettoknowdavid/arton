import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import styletron from "../styletron";
import { ArtonTheme } from "../theme";
import "../styles/globals.css";
import { AppPropsWithLayout } from "../types";
import { useApollo } from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { AnimatePresence } from "framer-motion";

function ArtonApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <StyletronProvider value={styletron}>
          <BaseProvider theme={ArtonTheme}>
            {getLayout(<Component {...pageProps} />)}
          </BaseProvider>
        </StyletronProvider>
      </AnimatePresence>
    </ApolloProvider>
  );
}

export default ArtonApp;
