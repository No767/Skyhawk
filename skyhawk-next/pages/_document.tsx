import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import mainTheme from "../shared/shared-themes/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={mainTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}