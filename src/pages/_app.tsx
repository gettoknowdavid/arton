import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import styletron from "../styletron";
import { ArtonTheme } from "../theme";
import "../styles/globals.css";
import { AppPropsWithLayout } from "../types";

function ArtonApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={ArtonTheme}>
        {getLayout(<Component {...pageProps} />)}
      </BaseProvider>
    </StyletronProvider>
  );
}

export default ArtonApp;
