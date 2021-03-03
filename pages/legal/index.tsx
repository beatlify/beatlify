import { Box, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../components/header-components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

const Legal: React.FC = () => (
  <Box display="flex" flexDirection="column" minHeight="103vh">
    <Header />
    <Content>
      <Box textAlign="center">
        <Heading size="lg">Legal Documents</Heading>
        <Box m="3">
          <Button>
            <Link href="/legal/tos">Terms of Service</Link>
          </Button>
        </Box>
        <Box m="3">
          <Button>
            <Link href="/legal/privacy">Privacy Policy</Link>
          </Button>
        </Box>
      </Box>
    </Content>
    <Footer />
  </Box>
);

export default Legal;
