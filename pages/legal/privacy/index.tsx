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
import Lawyer from "../../../components/legal/Lawyer";

const PrivacyLawyer: React.FC = () => (
  <Lawyer
    title="Privacy Policy"
    sumUrl="/legal/privacy/sum"
    date={new Date(1614798121131)}
    pars={[
      {
        title: "1. Definitions",
        content: (
          <Text>
            We/Us/Our: The creators and contributors of Beatlify <br />
            You: Our users <br />
            Content: YouTube music and/or videos accessible through the Beatlify
            system.
          </Text>
        ),
      },
      {
        title: "2. Your Data",
        content: (
          <Text>
            To make it clear, we do not handle your data. Our services
            communicate with YouTube and Google servers, who handle your data.
            Please refer to their privacy policy.
          </Text>
        ),
        links: [
          {
            title: "Google's Privacy Policy",
            uri: "https://policies.google.com/privacy?hl=en-US",
          },
        ],
      },
    ]}
  />
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
