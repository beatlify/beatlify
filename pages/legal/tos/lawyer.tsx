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
import Footer from "../../../components/Footer";

const ToSLawyer: React.FC = () => (
  <Box>
    <Head>
      <title>Terms of Service - Legal - Beatlify</title>
    </Head>
    <Header />
    <Box textAlign="center">
      <Box margin="10">
        <Heading size="lg">Terms of Service</Heading>
        <Text>Last updated: 2021 March 3</Text>
      </Box>
      <Container textAlign="justify">
        <Box marginBottom="10">
          <Heading size="md">1. Definitions</Heading>
          <Text>
            We/Us/Our: The creators and contributors of Beatlify <br />
            You: Our users <br />
            Content: YouTube music and/or videos accessible through the Beatlify
            system.
          </Text>
        </Box>
        <Box marginBottom="10">
          <Heading size="md">2. YouTube's Content</Heading>
          <Text>
            Beatlify is a user-friendly interface that allows you to listen to
            music and videos uploaded to the{" "}
            <ChakraLink href="https://youtube.com">YouTube</ChakraLink> video
            sharing platform, thus we do not have access to override, delete,
            edit, or otherwise change the contents of visible videos and music
            in any way. To use Beatlify and YouTube, you have/had to register
            for a Google Account, therefore you accepted Google and YouTube's
            Terms of Service. <br />
            <Box>
              <Button m="2" bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
                <ChakraLink href="https://policies.google.com/terms?hl=en-US">
                  Google's Terms
                </ChakraLink>
              </Button>
              <Button m="2" bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
                <ChakraLink href="https://www.youtube.com/static?template=terms">
                  YouTube's terms
                </ChakraLink>
              </Button>
            </Box>
          </Text>
        </Box>
        <Box marginBottom="10">
          <Heading size="md">3. Abuse</Heading>
          <Text>
            In case of abuse, of both our or Google and YouTube's APIs, the
            abuser might get blocked from our services in any way, shape, or
            form.
          </Text>
        </Box>
      </Container>
      Well, that was long...
      <Box m="3">
        <Button bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
          <Link href="/legal/tos/user">User Mode</Link>
        </Button>
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default ToSLawyer;
