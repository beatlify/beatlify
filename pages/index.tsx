import Head from "next/head";
import { Box, Flex, Heading, Link, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home: React.FC = () => (
  <Box>
    <Head>
      <title>Beatlify</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Content>
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
    </Content>
    <Footer />
  </Box>
);

export default Home;
