import { Box, Container, Heading, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "../../../components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";
import Head from "next/head";

const Privacy: React.FC = () => (
  <Box>
    <Head>
      <title>Privacy Policy - Beatlify</title>
    </Head>
    <Header />
    <Content>
      <Box textAlign="center">
        <Heading m="1.5rem" size="lg">
          Privacy Policy
        </Heading>
        <Link title="Summary" uri="/legal/privacy/user" />
        <Link title="For lawyers" uri="/legal/privacy/lawyer" />
      </Box>
    </Content>
    <Footer />
  </Box>
);

type LinkProps = {
  title: string;
  uri: string;
};

const Link: React.FC<LinkProps> = props => (
  <Box m="2">
    <NextLink href={props.uri}>
      <Button>{props.title}</Button>
    </NextLink>
  </Box>
);

export default Privacy;
