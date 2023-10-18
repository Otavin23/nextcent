import { ChakraBaseProvider, ListItem, UnorderedList } from "@chakra-ui/react";
import { themeChakra } from "./style/theme";
import { Header } from "./Components/Header";
import { Footer } from "./Components/footer";
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

      <Flex
        as="main"
        justify="center"
        bg="#F5F7FA"
        py="8rem"
        pb={{ base: "3rem", lg: "8rem" }}
      >
        <Container
          variant="mainLine"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{
            base: "column-reverse",
            md: "row",
            sm: "column-reverse",
          }}
        >
          <Flex
            direction="column"
            align={{ base: "center", lg: "start", md: "start" }}
          >
            <Heading
              as="h1"
              fontSize="clamp(30px, 5vw, 70px)"
              maxW="750px"
              color="#4D4D4D"
              fontWeight="600"
              textAlign={{
                base: "center",
                md: "start",
              }}
            >
              Lessons and insights{" "}
              <Text as="span" color="#4CAF4F">
                from 8 year
              </Text>
            </Heading>
            <Text
              color="#717171"
              my="1rem"
              textAlign={{
                base: "center",
                md: "start",
              }}
            >
              Where to grow your business as a photographer: site or social
              media?
            </Text>
            <Button variant="noOutline" size="normal">
              Register
            </Button>
          </Flex>

          <Image
            src="../assets/Illustration.svg"
            alt=""
            w={{ base: "400px", lg: "500px", md: "300px" }}
            h={{ base: "400px", lg: "500px", md: "300px" }}
          />
        </Container>
      </Flex>

      <Flex as="section" justify="center" py="3rem">
        <Container
          variant="mainLine"
          display="Flex"
          alignItems="center"
          flexDirection="column"
        >
          <Heading color="#4D4D4D" fontWeight="600" textAlign="center">
            Our Clients
          </Heading>
          <Text my="1rem" color="#717171" textAlign="center">
            We have been working with some Fortune 500+ clients
          </Text>
          <Flex
            justify="space-between"
            align="center"
            wrap="wrap"
            w="100%"
            mt="1rem"
          >
            <Image
              src="../assets/clients/Vector.svg"
              alt=""
              w="65px"
              h="65px"
            />
            <Image
              src="../assets/clients/Logo.svg"
              alt=""
              w="65px"
              h="65px"
              flex="1"
            />
            <Image
              src="../assets/clients/Logo1.svg"
              alt=""
              w="65px"
              h="65px"
              flex="1"
            />
            <Image
              src="../assets/clients/Logo2.svg"
              alt=""
              w="65px"
              h="65px"
              flex="1"
            />
            <Image
              src="../assets/clients/Logo3.svg"
              alt=""
              w="65px"
              h="65px"
              flex="1"
            />
            <Image
              src="../assets/clients/Logo4.svg"
              alt=""
              w="65px"
              h="65px"
              flex="1"
            />
            <Image
              src="../assets/clients/Logo1.svg"
              alt=""
              w="65px"
              h="70px"
              flex="1"
            />
          </Flex>
        </Container>
      </Flex>

      <Flex as="section" justify="center" py="3rem">
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
          <Text my="1rem" color="#717171" textAlign="center">
            Who is Nextcent suitable for?
          </Text>

          <Flex
            justify="space-between"
            direction={{ base: "column", lg: "row" }}
            align="center"
            w="100%"
            mt="1rem"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              w={{ base: "100%", md: "350px" }}
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
              w={{ base: "100%", md: "350px" }}
              h="350px"
              p="1.5rem"
              mx="1rem"
              borderRadius="0.5rem"
              boxShadow="1px 2px 30px #abbed130"
              border="1px solid #abbed130"
              my={{ base: "2rem", lg: "0" }}
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
                National Associations
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
              w={{ base: "100%", md: "350px" }}
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
                maxW="200px"
              >
                Clubs And Groups
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

      <Flex as="section" justify="center" py="2rem">
        <Container
          variant="mainLine"
          display="Flex"
          alignItems="center"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Image
            src="../assets/illustration2.svg"
            alt=""
            w={{ base: "500px", lg: "600px" }}
            h={{ base: "500px", lg: "600px" }}
          />
          <Flex direction="column" align={{ base: "center", lg: "start" }}>
            <Heading
              fontWeight="600"
              maxW="600px"
              color="#4D4D4D"
              textAlign={{
                base: "center",
                lg: "start",
              }}
            >
              The unseen of spending three years at Pixelgrade
            </Heading>
            <Text
              color="#717171"
              my="1.5rem"
              textAlign={{
                base: "center",
                lg: "start",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </Text>
            <Button variant="noOutline" size="normal">
              Learn More
            </Button>
          </Flex>
        </Container>
      </Flex>

      <Flex as="section" justify="center" bg="#F5F7FA" py="5rem">
        <Container
          variant="mainLine"
          display="Flex"
          justifyContent="space-between"
          alignItems="start"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box w={{ base: "100%", lg: "auto" }}>
            <Heading
              fontSize="40px"
              maxW={{ base: "100%", lg: "450px" }}
              textAlign={{ base: "center", lg: "start" }}
              fontWeight="600"
              color="#4D4D4D"
            >
              Helping a local{" "}
              <Text as="span" color="#4CAF4F">
                business reinvent itself
              </Text>
            </Heading>
            <Text
              color="#18191F"
              fontSize="20px"
              mt="1rem"
              textAlign={{ base: "center", lg: "start" }}
            >
              We reached here with our hard work and dedication
            </Text>
          </Box>

          <Flex
            direction="column"
            w={{ base: "100%", lg: "auto" }}
            align={{ base: "center", lg: "start" }}
            mt={{ base: "3rem", lg: "0" }}
          >
            <UnorderedList
              m="0"
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "center", lg: "start" }}
            >
              <ListItem
                display="flex"
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
                mr={{ base: "0", lg: "7rem" }}
              >
                <Box>
                  <Image
                    src="../assets/company/icon.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box
                  ml={{ base: "0", sm: "1rem" }}
                  textAlign={{ base: "center", sm: "start" }}
                >
                  <Heading color="#4D4D4D" fontSize="30px">
                    2,245,341
                  </Heading>
                  <Text as="span" color="#717171">
                    Members
                  </Text>
                </Box>
              </ListItem>

              <ListItem
                display="flex"
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
                mr={{ base: "0", lg: "7rem" }}
              >
                <Box>
                  <Image
                    src="../assets/company/icon2.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box
                  ml={{ base: "0", sm: "1rem" }}
                  textAlign={{ base: "center", sm: "start" }}
                >
                  <Heading color="#4D4D4D" fontSize="30px">
                    46,328
                  </Heading>
                  <Text as="span" color="#717171">
                    Clubs
                  </Text>
                </Box>
              </ListItem>
            </UnorderedList>

            <UnorderedList
              m="0"
              display="flex"
              mt={{ base: "2rem", lg: "5rem" }}
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "center", lg: "start" }}
            >
              <ListItem
                display="flex"
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
                mr={{ base: "0", lg: "7rem" }}
              >
                <Box>
                  <Image
                    src="../assets/company/icon3.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box
                  ml={{ base: "0", sm: "1rem" }}
                  textAlign={{ base: "center", sm: "start" }}
                >
                  <Heading color="#4D4D4D" fontSize="30px">
                    828,867
                  </Heading>
                  <Text as="span" color="#717171">
                    Members
                  </Text>
                </Box>
              </ListItem>

              <ListItem
                display="flex"
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
                mr={{ base: "0", lg: "7rem" }}
              >
                <Box>
                  <Image
                    src="../assets/company/icon4.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box
                  ml={{ base: "0", sm: "1rem" }}
                  textAlign={{ base: "center", sm: "start" }}
                >
                  <Heading color="#4D4D4D" fontSize="30px">
                    1,926,436
                  </Heading>
                  <Text as="span" color="#717171">
                    Payments
                  </Text>
                </Box>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Container>
      </Flex>

      <Flex as="section" justify="center" py="2rem">
        <Container
          variant="mainLine"
          display="Flex"
          alignItems="center"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Image
            src="../assets/pana.svg"
            alt=""
            w={{ base: "500px", lg: "600px" }}
            h={{ base: "500px", lg: "600px" }}
          />
          <Flex direction="column" align={{ base: "center", lg: "start" }}>
            <Heading
              fontWeight="600"
              maxW="600px"
              color="#4D4D4D"
              textAlign={{
                base: "center",
                lg: "start",
              }}
            >
              How to design your site footer like we did{" "}
            </Heading>
            <Text
              color="#717171"
              my="1.5rem"
              textAlign={{
                base: "center",
                lg: "start",
              }}
            >
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </Text>
            <Button variant="noOutline" size="normal">
              Learn More
            </Button>
          </Flex>
        </Container>
      </Flex>

      <Flex as="section" justify="center" bg="#F5F7FA" py="2rem">
        <Container
          variant="mainLine"
          display="flex"
          justifyContent="space-between"
          alignItems={{ base: "center", lg: "start" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Image src="../assets/image9.svg" alt="" w="400px" h="400px" />
          <Box ml="3rem">
            <Text
              fontSize="17px"
              color="#717171"
              mb="1rem"
              textAlign={{ base: "center", lg: "start" }}
            >
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </Text>

            <Text as="span" color="#4CAF4F" fontWeight="600" fontSize="23px">
              Tim Smith
            </Text>

            <Text color="#89939E" mt="0.3rem">
              British Dragon Boat Racing Association
            </Text>

            <UnorderedList
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              justifyContent="space-between"
              listStyleType="none"
              m="2rem 0 0 0"
            >
              <ListItem>
                <Image
                  src="../assets/clients/logo1Blue.svg"
                  alt=""
                  w="45px"
                  h="45px"
                />
              </ListItem>
              <ListItem>
                <Image
                  src="../assets/clients/Logo.svg"
                  alt=""
                  w="45px"
                  h="45px"
                />
              </ListItem>
              <ListItem>
                <Image
                  src="../assets/clients/Logo1.svg"
                  alt=""
                  w="45px"
                  h="45px"
                />
              </ListItem>
              <ListItem>
                <Image
                  src="../assets/clients/Logo2.svg"
                  alt=""
                  w="45px"
                  h="45px"
                />
              </ListItem>
              <ListItem>
                <Image
                  src="../assets/clients/Logo3.svg"
                  alt=""
                  w="45px"
                  h="45px"
                />
              </ListItem>
              <ListItem>
                <Image
                  src="../assets/clients/Logo4.svg"
                  alt=""
                  w="45px"
                  h="45px"
                />
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                color="#4CAF4F"
                fontWeight="600"
                fontSize="20px"
                cursor="pointer"
              >
                Meet all customers
                <Image
                  src="../assets/arrowGreen.png"
                  alt=""
                  w="20px"
                  h="20px"
                  ml="1.5rem"
                />
              </ListItem>
            </UnorderedList>
          </Box>
        </Container>
      </Flex>

      <Flex as="section" justify="center" py="3.5rem" pb="8rem">
        <Container
          variant="mainLine"
          display="flex"
          flexDirection="column"
          alignItems="center"
          h="100%"
        >
          <Heading color="#4D4D4D" fontWeight="600" textAlign="center">
            Caring is the new marketing
          </Heading>
          <Text textAlign="center" color="#717171" maxW="650px" my="0.5rem">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </Text>
          <Flex
            as="article"
            w="100%"
            justify="space-between"
            align={{ base: "center", lg: "row" }}
            flexDirection={{ base: "column", lg: "row" }}
            mt="1rem"
          >
            <Flex
              justify="center"
              w={{ base: "100%", md: "450px" }}
              maxH="300px"
              h="100%"
              mr={{ base: "0", lg: "2rem" }}
              pos="relative"
            >
              <Image src="../assets/marketing/image1.svg" alt="" w="100%" />

              <Box
                bg="#F5F7FA"
                boxShadow="0px 4px 14px #00000045"
                borderRadius="0.5rem"
                p="1.5rem"
                pos="absolute"
                bottom="-50px"
                w={{ base: "100%", md: "70%" }}
                maxW={{ base: "350px", lg: "auto" }}
              >
                <Heading
                  as="h4"
                  fontSize="clamp(14px, 2vw, 18px)"
                  textAlign="center"
                  color="#717171"
                  fontWeight="600"
                >
                  Creating Streamlined Safeguarding Processes with OneRen
                </Heading>
                <Text
                  as="span"
                  display="Flex"
                  justifyContent="center"
                  alignItems="center"
                  mt="1.5rem"
                  color="#4CAF4F"
                  fontWeight="600"
                  fontSize="20px"
                >
                  Readmore
                  <Image
                    src="../assets/arrowGreen.png"
                    alt=""
                    w="25px"
                    h="25px"
                    ml="1rem"
                  />
                </Text>
              </Box>
            </Flex>

            <Flex
              justify="center"
              w={{ base: "100%", md: "450px" }}
              maxH="300px"
              h="100%"
              my="5rem"
              mr={{ base: "0", lg: "2rem" }}
              pos="relative"
            >
              <Image src="../assets/marketing/image2.svg" alt="" w="100%" />

              <Box
                bg="#F5F7FA"
                boxShadow="0px 4px 14px #00000045"
                borderRadius="0.5rem"
                p="1.5rem"
                pos="absolute"
                bottom="-50px"
                w={{ base: "100%", md: "70%" }}
                maxW={{ base: "350px", lg: "auto" }}
              >
                <Heading
                  as="h4"
                  fontSize="clamp(14px, 2vw, 18px)"
                  textAlign="center"
                  color="#717171"
                  fontWeight="600"
                >
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </Heading>
                <Text
                  as="span"
                  display="Flex"
                  justifyContent="center"
                  alignItems="center"
                  mt="1.5rem"
                  color="#4CAF4F"
                  fontWeight="600"
                  fontSize="20px"
                >
                  Readmore
                  <Image
                    src="../assets/arrowGreen.png"
                    alt=""
                    w="25px"
                    h="25px"
                    ml="1rem"
                  />
                </Text>
              </Box>
            </Flex>

            <Flex
              justify="center"
              w={{ base: "100%", md: "450px" }}
              maxH="300px"
              h="100%"
              mr={{ base: "0", lg: "2rem" }}
              pos="relative"
            >
              <Image src="../assets/marketing/image3.svg" alt="" w="100%" />

              <Box
                bg="#F5F7FA"
                boxShadow="0px 4px 14px #00000045"
                borderRadius="0.5rem"
                p="1.5rem"
                pos="absolute"
                bottom="-50px"
                w={{ base: "100%", md: "70%" }}
                maxW={{ base: "350px", lg: "auto" }}
              >
                <Heading
                  as="h4"
                  fontSize="clamp(14px, 2vw, 18px)"
                  textAlign="center"
                  color="#717171"
                  fontWeight="600"
                >
                  Revamping the Membership Model with Triathlon Australia
                </Heading>
                <Text
                  as="span"
                  display="Flex"
                  justifyContent="center"
                  alignItems="center"
                  mt="1.5rem"
                  color="#4CAF4F"
                  fontWeight="600"
                  fontSize="20px"
                >
                  Readmore
                  <Image
                    src="../assets/arrowGreen.png"
                    alt=""
                    w="25px"
                    h="25px"
                    ml="1rem"
                  />
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Flex justify="center" bg="#F5F7FA" py="3rem">
        <Container
          variant="mainLine"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="#263238"
            fontSize="clamp(30px, 3vw, 65px)"
            fontWeight="600"
            maxW="800px"
            textAlign="center"
          >
            Pellentesque suscipit fringilla libero eu.
          </Heading>
          <Button variant="noOutline" size="normal" mt="3rem">
            Get a Demo
            <Image
              src="../assets/arrow.png"
              alt=""
              w="20px"
              h="20px"
              ml="0.5rem"
            />
          </Button>
        </Container>
      </Flex>

      <Footer />
    </ChakraBaseProvider>
  );
};

export default App;
