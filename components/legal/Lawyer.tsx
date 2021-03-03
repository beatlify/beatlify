import React from "react";
import {
  Box,
  Container,
  Heading,
  Link as ChakraLink,
  Text,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import Header from "../header-components/Header";
import Content from "../Content";
import Footer from "../Footer";

type Props = {
  title: string;
  sumUrl: string;
  date: Date;
  pars: ParProps[];
};

const Lawyer: React.FC<Props> = props => (
  <Box>
    <Head>
      <title>{props.title} - Beatlify</title>
    </Head>
    <Header />
    <Content>
      <Box textAlign="center">
        <Box margin="10">
          <Heading size="lg">{props.title}</Heading>
          <Text>Last updated: {props.date.toDateString()}</Text>
          <Box m="3">
            <Button>
              <NextLink href={props.sumUrl}>Summary</NextLink>
            </Button>
          </Box>
        </Box>
        <Container textAlign="justify">
          {props.pars.map(p => React.createElement(Par, p))}
        </Container>
        Well, that was long...
        <Box m="3">
          <Button>
            <NextLink href={props.sumUrl}>Summary</NextLink>
          </Button>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

type ParProps = {
  title: string;
  content: React.ReactChild | React.ReactChildren;
  links?: LinkProps[];
};

const Par: React.FC<ParProps> = props => (
  <Box marginBottom="10">
    <Heading size="md">{props.title}</Heading>
    {props.content || props.children}
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

export default Lawyer;
