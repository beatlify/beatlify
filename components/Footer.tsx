import {
  Flex,
  Link as ChakraLink,
  Image,
  Box,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => (
  <Box align-self="flex-end" color="#666666" p="5" borderTop={["0.5cm", "solid"]}>
    <Box>
      <Heading color="#888888" mb="1" size="xs">
        Navigation
      </Heading>
      <Box width="1.5cm" className={styles.footerElement}>
        <Link href="/">Home</Link>
      </Box>
      <Box width="1.5cm" className={styles.footerElement}>
        <Link href="/legal">Legal</Link>
      </Box>
      <Box width="3.5cm"className={styles.footerElement}>
        <Link href="/legal/tos">Terms of Service</Link>
      </Box>
      <Box width="3cm" className={styles.footerElement}>
        <Link href="/legal/privacy" >Privacy Policy</Link>
      </Box>
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

export default Footer;
