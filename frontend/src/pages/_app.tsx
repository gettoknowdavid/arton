import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import styletron from "../styletron";
import { ArtonTheme } from "../theme";
import { AppPropsWithLayout } from "../types";
import { useApollo } from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import { IconContext } from "phosphor-react";
import { Router } from "next/router";
import LoadingScreen from "../components/organisms/loading-screen";
import ArtonProvider from "../contexts";
import SEO from "../../next-seo.config";
import "normalize.css";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

function ArtonApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const apolloClient = useApollo(pageProps);

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => setLoading(true);

    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ArtonProvider>
        <AnimatePresence
          mode={"wait"}
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <StyletronProvider value={styletron}>
            <BaseProvider theme={ArtonTheme}>
              <IconContext.Provider value={{ size: "1.125rem" }}>
                <DefaultSeo {...SEO} />
                {loading ? (
                  <LoadingScreen loading={loading} />
                ) : (
                  getLayout(<Component {...pageProps} />)
                )}
              </IconContext.Provider>
            </BaseProvider>
          </StyletronProvider>
        </AnimatePresence>
      </ArtonProvider>
    </ApolloProvider>
  );
}

export default ArtonApp;
