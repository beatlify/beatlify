import Head from "next/head";
import { Box, Flex, Heading, Link, Image } from "@chakra-ui/react";
import Footer from "../components/Footer";
//import Header from "../components/Header";
import styles from '../styles/Home.module.css'

const Home: React.FC = () => (
  <div>
  <Box className={styles.welcomeTitle}>
    <Head>
      <title>Beatlify</title>
      <Link rel="icon" href="/favicon.ico" />
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
    
  </Box>
    <Footer />
  </div>
);

export default Home;
