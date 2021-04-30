import React from "react";
import { Divider, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Sidemenu = () => {
  return (
    <Flex
      as="aside"
      h="full"
      w="250px"
      bg="purple.600"
      direction="column"
      p={4}
    >
      <VStack direction="column" align="start" spacing={2}>
        <Heading size="md" color="white">Chakra Admin</Heading>
        <Divider />
        <Link color="white" as={RouterLink} to="/admin">
          Home
        </Link>
        <Link color="white" as={RouterLink} to="/admin/dashboard">
          Dashboard
        </Link>
      </VStack>
    </Flex>
  );
};
