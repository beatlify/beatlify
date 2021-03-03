import Head from "next/head";
import { Box, Flex, Heading, Link, Image } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: React.FC = () => (
  <Box>
    <Head>
      <title>Beatlify</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Flex
      as="footer"
      p="5rem"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="lg" transitionDuration="250ms">
        Welcome to{" "}
        <Box bgGradient="" as="span">
          Beatlify
        </Box>
      </Heading>
      <Heading as="h4" size="xs">
        <i>Under Heavy Development</i>
      </Heading>
    </Flex>
    <Footer />
  </Box>
);

export default Home;
