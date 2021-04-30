import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Dashboard = () => {
  document.title = 'Chakra Admin - Dashboard';
  
  return (
    <Box fontSize="xl" p={3}>
      <Heading>Dashboard</Heading>
    </Box>
  );
};
