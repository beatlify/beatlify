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
import NextLink from "next/link";
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
          <Par title="1. Definitions">
            We/Us/Our: The creators and contributors of Beatlify <br />
            You: Our users <br />
            Content: YouTube music and/or videos accessible through the Beatlify
            system.
          </Par>
          <Par
            title="2. Your data"
            links={[
              {
                title: "Google's Privacy Policy",
                uri: "https://policies.google.com/privacy?hl=en-US",
              },
            ]}
          >
            To make it clear, we do not handle your data. Our services
            communicate with YouTube and Google servers, who handle your data.
            Please refer to their privacy policy.
          </Par>
        </Container>
        Well, that was long...
        <Box m="3">
          <Button>
            <NextLink href="/legal/privacy/user">Summary</NextLink>
          </Button>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

type ParProps = {
  title: string;
  links?: LinkProps[];
};

const Par: React.FC<ParProps> = props => (
  <Box marginBottom="10">
    <Heading size="md">{props.title}</Heading>
    <Text>{props.children}</Text>
    <Box>
      {props.links
        ? props.links.map(l => <Link title={l.title} uri={l.uri} />)
        : ""}
    </Box>
  </Box>
);

type LinkProps = {
  title: string;
  uri: string;
};

const Link: React.FC<LinkProps> = props => (
  <Button m="2">
    <ChakraLink href={props.uri}>{props.title}</ChakraLink>
  </Button>
);

export default PrivacyLawyer;
