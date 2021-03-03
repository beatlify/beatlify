import React from "react";
import { Box, Image, Link} from "@chakra-ui/react";

const Logo: React.FC = (props) => {
  return (
    <Box {...props}>
      <Link
        href="https://github.com/beatlify/beatlify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/logo.png" alt="Beatlify Logo" h="3em" />
      </Link>
    </Box>
  );
}
export default Logo;
