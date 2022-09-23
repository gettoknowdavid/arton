import React from "react";
import type { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, DarkTheme } from "baseui";
import styletron from "../styletron";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={DarkTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
