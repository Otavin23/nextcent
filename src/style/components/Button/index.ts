import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  variants: {
    noOutline: {
      border: "none",
      fontSize: "16px",
    },
  },

  sizes: {
    largePR: {
      px: "1.5rem",
      py: "0.7rem",
      h: "100%",
    },
  },

  baseStyle: {
    bg: "#4CAF4F",
    color: "#fff",
    fontWeight: "400",
    borderRadius: "0.3rem",
    _hover: {
      bg: "#2d662f",
    },
  },
});

export { Button };
