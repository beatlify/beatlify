import { Box, Container, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../../components/header-components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";
import Head from "next/head";

const Privacy: React.FC = () => (
  <Box display="flex" flexDirection="column" minHeight="103vh">
    <Head>
      <title>Privacy Policy - Beatlify</title>
    </Head>
    <Header />
    <Content>
      <Box textAlign="center">
        <Heading size="lg">Privacy Policy</Heading>
        <Box m="2">
          <Link href="/legal/privacy/user">
            <Button>Summary</Button>
          </Link>
        </Box>
        <Box m="2">
          <Link href="/legal/privacy/lawyer">
            <Button>For lawyers</Button>
          </Link>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

export default Privacy;
