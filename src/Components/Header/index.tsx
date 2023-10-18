import {
  Flex,
  Container,
  Image,
  UnorderedList,
  Button,
  ListItem,
  Box,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      justify="center"
      py="1rem"
      pos="fixed"
      w="100%"
      bg="#fff"
      zIndex="1"
      borderBottom="1px solid #c1c1c147"
    >
      <Container
        variant="mainLine"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src="../assets/Logo.svg" alt="" w="150px" />

        <Flex as="nav" align="center" display={{ base: "none", md: "flex" }}>
          <UnorderedList
            m="0"
            display="flex"
            alignItems="center"
            listStyleType="none"
          >
            <ListItem mr={{ lg: "3rem", md: "1rem", sm: "0.8rem" }}>
              Home
            </ListItem>
            <ListItem mr={{ lg: "3rem", md: "1rem", sm: "0.8rem" }}>
              Features
            </ListItem>
            <ListItem mr={{ lg: "3rem", md: "1rem", sm: "0.8rem" }}>
              Community
            </ListItem>
            <ListItem mr={{ lg: "3rem", md: "1rem", sm: "0.8rem" }}>
              Blog
            </ListItem>
            <ListItem mr={{ lg: "3rem", md: "1rem", sm: "0.8rem" }}>
              Pricing
            </ListItem>
          </UnorderedList>

          <Button variant="noOutline" size="largePR">
            Register Now
            <Image
              src="../assets/arrow.png"
              alt=""
              w="15px"
              h="15px"
              ml="0.5rem"
            />
          </Button>
        </Flex>

        <Box
          display={{ base: "flex", md: "none", sm: "flex" }}
          cursor="pointer"
        >
          <Image src="../assets/menu.png" alt="" w="30px" h="30px" />
        </Box>
      </Container>
    </Flex>
  );
};
export { Header };
