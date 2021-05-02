import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from './style/theme'
import { Routes } from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>
);
