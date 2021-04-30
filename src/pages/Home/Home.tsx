import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Home = () => {
  document.title = 'Chakra Admin - Home';

  return (
    <Box fontSize="xl" p={3}>
      <Heading>Home</Heading>
    </Box>
  );
};
