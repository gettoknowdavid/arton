import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";
// @ts-ignore
import { Server, Sheet } from "styletron-engine-atomic";
import styletron from "../styletron";
import { Provider as StyletronProvider } from "styletron-react";

class MyDocument extends Document<{ stylesheets: Sheet[] }> {
  static getInitialProps = async (ctx: any) => {
    const renderPage = () =>
      ctx.renderPage({
        // eslint-disable-next-line func-names
        enhanceApp: (App: any) =>
          function (props: any) {
            return (
              <StyletronProvider value={styletron}>
                <App {...props} />
              </StyletronProvider>
            );
          },
      });

    const initialProps = await Document.getInitialProps({
      ...ctx,
      ...renderPage,
    });
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...initialProps, stylesheets };
  };

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
