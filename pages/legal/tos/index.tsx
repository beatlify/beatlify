import { Box, Container, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../../components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";
import Head from "next/head";

const ToS: React.FC = () => (
  <Box>
    <Head>
      <title>Terms of Service - Beatlify</title>
    </Head>
    <Header />
    <Content>
      <Box textAlign="center">
        <Heading size="lg">Terms of Service</Heading>
        <Box m="2">
          <Link href="/legal/tos/user">
            <Button bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
              Summary
            </Button>
          </Link>
        </Box>
        <Box m="2">
          <Link href="/legal/tos/lawyer">
            <Button bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
              For lawyers
            </Button>
          </Link>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

export default ToS;
