import {
  Box,
  Container,
  Heading,
  Link as ChakraLink,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";

const PrivacyLawyer: React.FC = () => (
  <Box>
    <Head>
      <title>Privacy Policy - Legal - Beatlify</title>
    </Head>
    <Header />
    <Content>
      <Box textAlign="center">
        <Box margin="10">
          <Heading size="lg">Privacy Policy</Heading>
          <Text>Last updated: 2021 March 3</Text>
        </Box>
        <Container textAlign="justify">
          <Box marginBottom="10">
            <Heading size="md">1. Definitions</Heading>
            <Text>
              We/Us/Our: The creators and contributors of Beatlify <br />
              You: Our users <br />
              Content: YouTube music and/or videos accessible through the
              Beatlify system.
            </Text>
          </Box>
          <Box marginBottom="10">
            <Heading size="md">2. Your data</Heading>
            <Text>
              To make it clear, we do not handle your data. Our services
              communicate with YouTube and Google servers, who handle your data.
              Please refer to their privacy policy.
              <Box>
                <Button m="2">
                  <ChakraLink href="https://policies.google.com/privacy?hl=en-US">
                    Google's Privacy Policy
                  </ChakraLink>
                </Button>
              </Box>
            </Text>
          </Box>
        </Container>
        Well, that was long...
        <Box m="3">
          <Button>
            <Link href="/legal/privacy/user">User Mode</Link>
          </Button>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

export default PrivacyLawyer;
