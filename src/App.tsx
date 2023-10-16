import { ChakraBaseProvider } from "@chakra-ui/react";
import { themeChakra } from "./style/theme";
import { Header } from "./Components/Header";

const App = () => {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <Header />
    </ChakraBaseProvider>
  );
};

export default App;
