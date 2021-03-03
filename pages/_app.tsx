import "../styles/globals.css";
import React from "react";
import { AppProps } from "next/app";
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
