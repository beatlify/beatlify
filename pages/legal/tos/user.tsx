import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/header-components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";

const ToSUser: React.FC = () => (
  <Box display="flex" flexDirection="column" minHeight="103vh">
    <Head>
      <title>Terms of Service - Beatlify</title>
    </Head>
    <Header />
    <Content>
      <Box textAlign="center">
        <Box marginBottom="10">
          <Heading size="lg">Terms of Service (Summary)</Heading>
          <Text>Last updated: 2021 March 3</Text>
        </Box>
        <Container textAlign="justify">
          <Box m="5">
            <Heading size="md">What we can't do:</Heading>
            <Box marginLeft="10">
              <ul>
                <li>Take down music, playlists, and comments</li>
                <li>Take down accounts</li>
              </ul>
            </Box>
          </Box>
          <Box m="5">
            <Heading size="md">What we can (and will) do:</Heading>
            <Box marginLeft="10">
              <ul>
                <li>Completely ban you from using our services</li>
              </ul>
            </Box>
          </Box>
          <Box m="5">
            <Heading size="md">What??</Heading>
            <Text>
              Don't worry, we don't ban people for no reason, and not even for
              uploading explicit/disallowed content (because only the YouTube
              staff can do that), we'll only ban and ip-ban you if you abuse
              Beatlify (overload, DDoS, etc) and that causes us performance or
              even physical issues.
            </Text>
          </Box>
        </Container>
        And what if I wanna sue?
        <Box m="3">
          <Button>
            <Link href="/legal/tos/lawyer">Lawyer Mode</Link>
          </Button>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

export default ToSUser;
