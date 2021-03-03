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
import Header from "../../../components/header-components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";
import Lawyer from "../../../components/legal/Lawyer";

const ToSLawyer: React.FC = () => (
  <Lawyer
    title="Terms of Service"
    sumUrl="/legal/tos/sum"
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
        title: "2. YouTube's Content",
        content: (
          <Text>
            Beatlify is a user-friendly interface that allows you to listen to
            music and videos uploaded to the{" "}
            <ChakraLink href="https://youtube.com">YouTube</ChakraLink> video
            sharing platform, thus we do not have access to override, delete,
            edit, or otherwise change the contents of visible videos and music
            in any way. To use Beatlify and YouTube, you have/had to register
            for a Google Account, therefore you accepted Google and YouTube's
            Terms of Service. <br />{" "}
          </Text>
        ),
        links: [
          {
            title: "Google's Terms of Service",
            uri: "https://policies.google.com/terms?hl=en-US",
          },
          {
            title: "YouTube's Terms of Service",
            uri: "https://www.youtube.com/static?template=terms",
          },
        ],
      },
      {
        title: "3. Abuse",
        content: (
          <Text>
            In case of abuse, of both our or Google and YouTube's APIs, the
            abuser might get blocked from our services in any way, shape, or
            form.
          </Text>
        ),
      },
    ]}
  />
);

export default ToSLawyer;
