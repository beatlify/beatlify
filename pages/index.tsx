import Head from "next/head";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import Header from "../components/header-components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home: React.FC = () => (
  <Box display="flex" flexDirection="column" minHeight="103vh">
    <Head>
      <title>Beatlify</title>
      <Link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Content>
      <Flex
        as="main"
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
