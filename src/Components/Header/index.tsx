import {
  Flex,
  Container,
  Image,
  UnorderedList,
  Button,
  ListItem,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex as="header" justify="center" py="1rem">
      <Container
        variant="mainLine"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src="../assets/Logo.svg" alt="" w="150px" />
        <Flex as="nav">
          <UnorderedList
            m="0"
            display="flex"
            alignItems="center"
            listStyleType="none"
          >
            <ListItem mr="3rem">Home</ListItem>
            <ListItem mr="3rem">Features</ListItem>
            <ListItem mr="3rem">Community</ListItem>
            <ListItem mr="3rem">Blog</ListItem>
            <ListItem mr="3rem">Pricing</ListItem>
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
      </Container>
    </Flex>
  );
};
export { Header };
