import {
  Flex,
  Link as ChakraLink,
  Image,
  Box,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => (
  <Box color="#666666" p="5" borderTop={["1px", "solid"]}>
    <Box>
      <Heading color="#888888" mb="1" size="xs">
        Navigation
      </Heading>
      <Box className={styles.Box}>
        <Link href="/legal">Legal</Link>
      </Box>
      <Box className={styles.Box}>
        <Link href="/legal/tos">Terms of Service</Link>
      </Box>
      <Box className={styles.Box}>
        <Link href="/legal/privacy">Privacy Policy</Link>
      </Box>
    </Box>
    <Flex as="footer" minH="100px" justifyContent="center" bottom="0">
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

export default Footer;
