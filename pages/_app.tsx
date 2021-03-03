import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  CSSReset,
  extendTheme,
  theme as chakraTheme,
  ThemeProvider,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    components: {
      Button: {
        variants: {
          solid: {
            bg: "#2a2a2a",
            _hover: { bg: "#3a3a3a" },
          },
        },
      },
    },
  },
  chakraTheme
);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
