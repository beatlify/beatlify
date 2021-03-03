import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";

const ToSUser: React.FC = () => (
  <Box>
    <Head>
      <title>Privacy Policy - Beatlify</title>
    </Head>
    <Header />
    <Content>
      <Box textAlign="center">
        <Box marginBottom="10">
          <Heading size="lg">Privacy Policy (Summary)</Heading>
          <Text>Last updated: 2021 March 3</Text>
        </Box>
        <Container marginBottom="10" textAlign="center">
          Keep it nice and clean; We do not have access to your data.
        </Container>
        And what if I wanna sue?
        <Box m="3">
          <Button>
            <Link href="/legal/privacy/lawyer">Lawyer Mode</Link>
          </Button>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

export default ToSUser;
