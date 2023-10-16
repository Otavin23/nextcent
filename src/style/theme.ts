import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";

const themeChakra = extendTheme({
  fonts: {
    heading: `Inter, sans-serif`,
    body: `Inter, sans-serif`,
  },

  components: {
    Container: {
      baseStyle: {
        maxW: "1400px",
        w: "95%",
      },
      variants: {
        mainLine: {
          m: "0",
          p: "0",
        },
      },
    },
    Button,
  },

  breakpoint: {
    sm: "480px",
    md: "725px",
    lg: "990px",
    xl: "1250px",
  },
});

export { themeChakra };
