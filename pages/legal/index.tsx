import { Box, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Legal: React.FC = () => (
  <Box>
    <Header />
    <Box textAlign="center">
      <Heading size="lg">Legal Documents</Heading>
      <Box m="3">
        <Button bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
          <Link href="/legal/tos">Terms of Service</Link>
        </Button>
      </Box>
      <Box m="3">
        <Button bg="#2a2a2a" _hover={{ bg: "#3a3a3a" }}>
          <Link href="/legal/privacy">Privacy Policy</Link>
        </Button>
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default Legal;
