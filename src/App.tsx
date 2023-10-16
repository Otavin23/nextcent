import { ChakraBaseProvider } from "@chakra-ui/react";
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
    </ChakraBaseProvider>
  );
};

export default App;
