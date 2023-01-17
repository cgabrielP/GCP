import { Container, Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Container maxW="container" bg="gray.100">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        py={5}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["gray", "gray", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    </Container>
  );
};
export default NavBarContainer;
