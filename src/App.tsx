import { ChakraBaseProvider, ListItem, UnorderedList } from "@chakra-ui/react";
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

      <Flex justify="center" py="2rem">
        <Container variant="mainLine" display="Flex" alignItems="center">
          <Image src="../assets/illustration2.svg" alt="" w="600px" h="600px" />
          <Box>
            <Heading fontWeight="600" maxW="600px" color="#4D4D4D">
              The unseen of spending three years at Pixelgrade
            </Heading>
            <Text color="#717171" my="1.5rem">
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
          </Box>
        </Container>
      </Flex>

      <Flex justify="center" bg="#F5F7FA" py="5rem">
        <Container
          variant="mainLine"
          display="Flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Heading
              fontSize="40px"
              maxW="450px"
              fontWeight="600"
              color="#4D4D4D"
            >
              Helping a local{" "}
              <Text as="span" color="#4CAF4F">
                business reinvent itself
              </Text>
            </Heading>
            <Text color="#18191F" fontSize="20px" mt="1rem">
              We reached here with our hard work and dedication
            </Text>
          </Box>
          <Box>
            <UnorderedList m="0" display="flex" flexWrap="wrap">
              <ListItem display="flex" alignItems="center" mr="7rem">
                <Box>
                  <Image
                    src="../assets/company/icon.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box ml="1rem">
                  <Heading color="#4D4D4D" fontSize="30px">
                    2,245,341
                  </Heading>
                  <Text as="span" color="#717171">
                    Members
                  </Text>
                </Box>
              </ListItem>

              <ListItem display="flex" alignItems="center">
                <Box>
                  <Image
                    src="../assets/company/icon2.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box ml="1rem">
                  <Heading color="#4D4D4D" fontSize="30px">
                    46,328
                  </Heading>
                  <Text as="span" color="#717171">
                    Clubs
                  </Text>
                </Box>
              </ListItem>
            </UnorderedList>

            <UnorderedList m="0" display="flex" flexWrap="wrap" mt="5rem">
              <ListItem display="flex" alignItems="center" mr="7rem">
                <Box>
                  <Image
                    src="../assets/company/icon3.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box ml="1rem">
                  <Heading color="#4D4D4D" fontSize="30px">
                    828,867
                  </Heading>
                  <Text as="span" color="#717171">
                    Members
                  </Text>
                </Box>
              </ListItem>

              <ListItem display="flex" alignItems="center">
                <Box>
                  <Image
                    src="../assets/company/icon4.svg"
                    alt=""
                    w="55px"
                    h="55px"
                  />
                </Box>

                <Box ml="1rem">
                  <Heading color="#4D4D4D" fontSize="30px">
                    1,926,436
                  </Heading>
                  <Text as="span" color="#717171">
                    Payments
                  </Text>
                </Box>
              </ListItem>
            </UnorderedList>
          </Box>
        </Container>
      </Flex>

      <Flex justify="center" py="2rem">
        <Container variant="mainLine" display="Flex" alignItems="center">
          <Image src="../assets/pana.svg" alt="" w="600px" h="600px" />
          <Box>
            <Heading fontWeight="600" maxW="600px" color="#4D4D4D">
              How to design your site footer like we did{" "}
            </Heading>
            <Text color="#717171" my="1.5rem">
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
          </Box>
        </Container>
      </Flex>

      <Flex justify="center" bg="#F5F7FA" py="2rem">
        <Container
          variant="mainLine"
          display="flex"
          justifyContent="space-between"
        >
          <Image src="../assets/image9.svg" alt="" w="400px" h="400px" />
          <Box ml="3rem">
            <Text fontSize="17px" color="#717171" mb="1rem">
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

      <Flex justify="center" py="3.5rem" pb="8rem">
        <Container
          variant="mainLine"
          display="flex"
          flexDirection="column"
          alignItems="center"
          h="100%"
        >
          <Heading color="#4D4D4D" fontWeight="600">
            Caring is the new marketing
          </Heading>
          <Text textAlign="center" color="#717171" maxW="650px" my="0.5rem">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </Text>
          <Flex w="100%" justify="space-between" mt="1rem">
            <Flex
              justify="center"
              w="450px"
              maxH="300px"
              h="100%"
              mr="2rem"
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
                w="70%"
              >
                <Heading
                  as="h4"
                  fontSize="18px"
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
              w="450px"
              maxH="300px"
              h="100%"
              mr="2rem"
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
                w="70%"
              >
                <Heading
                  as="h4"
                  fontSize="18px"
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
              w="450px"
              maxH="300px"
              h="100%"
              mr="2rem"
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
                w="70%"
              >
                <Heading
                  as="h4"
                  fontSize="18px"
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
    </ChakraBaseProvider>
  );
};

export default App;
