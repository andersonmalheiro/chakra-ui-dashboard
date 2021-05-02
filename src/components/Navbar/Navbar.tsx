import React from "react";
import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { BreadcumbBuilder } from "../BreadcumbBuilder/BreadcumbBuilder";

export const Navbar = () => {
  return (
    <Flex
      bg="white"
      w="100%"
      h="50px"
      p={4}
      as="nav"
      shadow="md"
      align="center"
      justify="space-between"
      flex="1"
    >
      <BreadcumbBuilder basePath="admin" />

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};
