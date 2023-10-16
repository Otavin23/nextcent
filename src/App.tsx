import { ChakraBaseProvider, UnorderedList } from "@chakra-ui/react";
import { themeChakra } from "./style/theme";
import { Header } from "./Components/Header";
import {
  Flex,
  Container,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <Header />

      <Flex as="main" justify="center" bg="#F5F7FA" py="8rem">
        <Container
          variant="mainLine"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Heading
              as="h1"
              fontSize="70px"
              maxW="750px"
              color="#4D4D4D"
              fontWeight="600"
            >
              Lessons and insights{" "}
              <Text as="span" color="#4CAF4F">
                from 8 year
              </Text>
            </Heading>
            <Text color="#717171" my="1rem">
              Where to grow your business as a photographer: site or social
              media?
            </Text>
            <Button variant="noOutline" size="normal">
              Register
            </Button>
          </Box>

          <Image src="../assets/Illustration.svg" alt="" w="500px" h="500px" />
        </Container>
      </Flex>

      <Flex justify="center" py="3rem">
        <Container
          variant="mainLine"
          display="Flex"
          alignItems="center"
          flexDirection="column"
        >
          <Heading color="#4D4D4D" fontWeight="600">
            Our Clients
          </Heading>
          <Text my="1rem" color="#717171">
            We have been working with some Fortune 500+ clients
          </Text>
          <Flex justify="space-between" align="center" w="100%" mt="1rem">
            <Image
              src="../assets/clients/Vector.svg"
              alt=""
              w="65px"
              h="65px"
            />
            <Image src="../assets/clients/Logo.svg" alt="" w="65px" h="65px" />
            <Image src="../assets/clients/Logo1.svg" alt="" w="65px" h="65px" />
            <Image src="../assets/clients/Logo2.svg" alt="" w="65px" h="65px" />
            <Image src="../assets/clients/Logo3.svg" alt="" w="65px" h="65px" />
            <Image src="../assets/clients/Logo4.svg" alt="" w="65px" h="65px" />
            <Image src="../assets/clients/Logo1.svg" alt="" w="65px" h="70px" />
          </Flex>
        </Container>
      </Flex>

      <Flex justify="center" py="3rem">
        <Container
          variant="mainLine"
          display="Flex"
          alignItems="center"
          flexDirection="column"
        >
          <Heading
            color="#4D4D4D"
            fontWeight="600"
            maxW="550px"
            textAlign="center"
          >
            Manage your entire community in a single system
          </Heading>
          <Text my="1rem" color="#717171">
            Who is Nextcent suitable for?
          </Text>

          <Flex justify="space-between" align="center" w="100%" mt="1rem">
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="350px"
              h="350px"
              p="1.5rem"
              borderRadius="0.5rem"
              boxShadow="1px 2px 30px #abbed130"
              border="1px solid #abbed130"
            >
              <Box>
                <Image
                  src="../assets/community/Icon.svg"
                  alt=""
                  w="70px"
                  h="70px"
                />
              </Box>

              <Heading
                as="h3"
                textAlign="center"
                mt="1rem"
                color="#4D4D4D"
                fontSize="30px"
              >
                Membership Organisations
              </Heading>

              <Text
                textAlign="center"
                color="#717171"
                mt="1rem"
                fontSize="17px"
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </Flex>

            <Flex
              direction="column"
              align="center"
              justify="center"
              w="350px"
              h="350px"
              p="1.5rem"
              borderRadius="0.5rem"
              boxShadow="1px 2px 30px #abbed130"
              border="1px solid #abbed130"
            >
              <Box>
                <Image
                  src="../assets/community/icon1.svg"
                  alt=""
                  w="70px"
                  h="70px"
                />
              </Box>

              <Heading
                as="h3"
                textAlign="center"
                mt="1rem"
                color="#4D4D4D"
                fontSize="30px"
              >
                Membership Organisations
              </Heading>

              <Text
                textAlign="center"
                color="#717171"
                mt="1rem"
                fontSize="17px"
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </Flex>

            <Flex
              direction="column"
              align="center"
              justify="center"
              w="350px"
              h="350px"
              p="1.5rem"
              borderRadius="0.5rem"
              boxShadow="1px 2px 30px #abbed130"
              border="1px solid #abbed130"
            >
              <Box>
                <Image
                  src="../assets/community/icon2.svg"
                  alt=""
                  w="70px"
                  h="70px"
                />
              </Box>

              <Heading
                as="h3"
                textAlign="center"
                mt="1rem"
                color="#4D4D4D"
                fontSize="30px"
              >
                Membership Organisations
              </Heading>

              <Text
                textAlign="center"
                color="#717171"
                mt="1rem"
                fontSize="17px"
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </ChakraBaseProvider>
  );
};

export default App;
