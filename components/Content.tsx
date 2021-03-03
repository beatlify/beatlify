import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactChildren | React.ReactChild;
};

const Content: React.FC<Props> = props => <Box flex="1">{props.children}</Box>;

export default Content;
