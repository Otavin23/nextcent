import {
  Flex,
  Container,
  Box,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Heading,
  Input,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" justify="center" bg="#263238" py="5rem">
      <Container
        variant="mainLine"
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Image src="../assets/footer/Nexcent.svg" alt="" w="200px" />
          <Text color="#F5F7FA" my="3rem" maxW="250px">
            Copyright © 2020 Landify UI Kit. All rights reserved
          </Text>

          <Flex as="nav">
            <UnorderedList m="0" listStyleType="none" display="flex">
              <ListItem mr="1rem">
                <a href="#">
                  <Image
                    src="../assets/footer/social.svg"
                    alt=""
                    w="45px"
                    h="45px"
                  />
                </a>
              </ListItem>

              <ListItem mr="1rem">
                <a href="#">
                  <Image
                    src="../assets/footer/social1.svg"
                    alt=""
                    w="45px"
                    h="45px"
                  />
                </a>
              </ListItem>

              <ListItem mr="1rem">
                <a href="#">
                  <Image
                    src="../assets/footer/social2.svg"
                    alt=""
                    w="45px"
                    h="45px"
                  />
                </a>
              </ListItem>

              <ListItem mr="1rem">
                <a href="#">
                  <Image
                    src="../assets/footer/social3.svg"
                    alt=""
                    w="45px"
                    h="45px"
                  />
                </a>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Box>

        <Flex as="nav">
          <UnorderedList m="0" listStyleType="none" mr="8rem">
            <ListItem color="#fff" fontWeight="600" fontSize="23px">
              Company
            </ListItem>
            <ListItem mt="1.5rem" color="#F5F7FA">
              About us
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Blog
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Contact us
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Pricing
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Testimonials
            </ListItem>
          </UnorderedList>

          <UnorderedList m="0" listStyleType="none" mr="5rem">
            <ListItem color="#fff" fontWeight="600" fontSize="23px">
              Support
            </ListItem>
            <ListItem mt="1.5rem" color="#F5F7FA">
              Help center
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Terms of service
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Legal
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Privacy policy
            </ListItem>
            <ListItem mt="0.7rem" color="#F5F7FA">
              Status
            </ListItem>
          </UnorderedList>

          <Box>
            <Heading as="h4" color="#fff" fontWeight="600" fontSize="23px">
              Stay up to date
            </Heading>
            <Flex
              alignItems="center"
              mt="1.5rem"
              bg="#515B60"
              w="300px"
              h="50px"
              borderRadius="0.7rem"
            >
              <Input
                type="text"
                placeholder="Your email address"
                variant="unstyled"
                pl="1rem"
                color="#D9DBE1"
                _placeholder={{
                  color: "#D9DBE1",
                }}
              />
              <Image
                src="../assets/footer/Vector.svg"
                alt=""
                w="15px"
                mr="1rem"
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};
export { Footer };
