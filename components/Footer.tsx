import { Flex, Link, Image } from "@chakra-ui/react";

const Footer: React.FC = () => (
  <Flex
    as="footer"
    minH="100px"
    borderTop={["1px", "solid"]}
    justifyContent="center"
    bottom="0"
  >
    <Link
      href="https://github.com/beatlify/beatlify"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/logo.png" alt="Beatlify Logo" h="5em" />
    </Link>
  </Flex>
);

export default Footer;
