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
          <Flex justify="space-between" align="center" w="100%">
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
    </ChakraBaseProvider>
  );
};

export default App;
