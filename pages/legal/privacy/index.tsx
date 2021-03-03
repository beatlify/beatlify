import { Box, Container, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Head from "next/head";

const Privacy: React.FC = () => (
  <Box>
    <Head>
      <title>Privacy Policy - Beatlify</title>
    </Head>
    <Header />
    <Box textAlign="center">
      <Box m="2">
        <Link href="/legal/privacy/user">
          <Button bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
            User Mode
          </Button>
        </Link>
      </Box>
      <Box m="2">
        <Link href="/legal/privacy/lawyer">
          <Button bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
            Lawyer Mode
          </Button>
        </Link>
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default Privacy;
