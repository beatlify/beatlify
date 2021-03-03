import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Flex, Heading, Link, Image } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
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
      <Flex
        as="footer"
        minH="100px"
        borderTop={["1px", "solid"]}
        justifyContent="center"
        bottom="0"
      >
        <Link
          href="https://github.com/beatlify/beatlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/logo.png" alt="Beatlify Logo" h="5em" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
