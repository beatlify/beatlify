import {
  Flex,
  Link as ChakraLink,
  Image,
  Box,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => (
  <Box
    align-self="flex-end"
    color="#666666"
    p="5"
    borderTop={["0.5cm", "solid"]}
  >
    <Box>
      <Heading color="#888888" mb="1" size="xs">
        Navigation
      </Heading>
      <Link title="Legal" uri="/legal" />
      <Link title="Terms of Service" uri="/legal/tos" />
      <Link title="Privacy Policy" uri="/legal/privacy" />
    </Box>
    <Flex minH="100px" justifyContent="center" bottom="0">
      <ChakraLink
        href="https://github.com/beatlify/beatlify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/logo.png" alt="Beatlify Logo" h="5em" />
      </ChakraLink>
    </Flex>
  </Box>
);

type LinkProps = {
  title: string;
  uri: string;
};

const Link: React.FC<LinkProps> = props => (
  <Box transition={["ease-in-out", "500ms"]} _hover={{ color: "#888888" }}>
    <NextLink href={props.uri}>
      <a className={styles.footerElement}>{props.title}</a>
    </NextLink>
  </Box>
);

export default Footer;