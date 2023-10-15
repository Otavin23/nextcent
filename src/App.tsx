import { ChakraBaseProvider } from "@chakra-ui/react";
import { themeChakra } from "./style/theme";

const App = () => {
  return <ChakraBaseProvider theme={themeChakra}></ChakraBaseProvider>;
};

export default App;
