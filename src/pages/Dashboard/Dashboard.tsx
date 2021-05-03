import React from 'react';
import { Box, Button, Grid, Heading, HStack, Text } from '@chakra-ui/react';
import { IndicatorCard } from '../../components/IndicatorCard';
import { RiEqualizerLine } from 'react-icons/ri';

export const Dashboard = () => {
  document.title = 'Chakra Admin - Dashboard';

  return (
    <Box
      w="full"
      h="full"
      overflow="hidden"
      overflowY="auto"
      p={4}
      bg="gray.100"
    >
      <HStack justifyContent="space-between" mb="20px">
        <Heading fontSize="xl">Dashboard</Heading>
        <Button size="sm">
          <HStack spacing="5px">
            <RiEqualizerLine size="18" />
            <Text>Filters</Text>
          </HStack>
        </Button>
      </HStack>

      <Grid
        gap="4"
        w="full"
        templateRows="auto auto"
        alignItems="unset"
        spacing="4"
      >
        <Grid gap="4" templateColumns="repeat(auto-fill, minmax(150px, 1fr))">
          <IndicatorCard />
          <IndicatorCard />
          <IndicatorCard />
        </Grid>

        <Grid gap="4" templateColumns="repeat(auto-fill, minmax(350px, 1fr))">
          <Box
            borderRadius="2xl"
            bg="white"
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          ></Box>
          <Box
            borderRadius="2xl"
            bg="white"
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          ></Box>
          <Box
            borderRadius="2xl"
            bg="white"
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};
