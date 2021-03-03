import Link from "next/link";
import { Box, Image } from "@chakra-ui/react";

const Logo: React.FC = props => {
  return (
    <Box {...props}>
      <Link href="/">
        <Image src="/logo.png" alt="Beatlify Logo" h="3em" />
      </Link>
    </Box>
  );
};
export default Logo;
