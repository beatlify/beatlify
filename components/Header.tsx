import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Header: React.FC = () => (
  <Box textAlign="center" alignItems="center" bg="#2a2a2a" marginBottom="5">
    <Heading size="md" p="2">
      <Link href="/">Beatlify</Link>
    </Heading>
  </Box>
);

export default Header;
