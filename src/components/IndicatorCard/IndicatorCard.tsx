import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { RiBitCoinFill, RiMore2Fill } from 'react-icons/ri';

export const IndicatorCard = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      minH="80px"
      minW="150px"
      borderRadius="2xl"
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      boxShadow="sm"
      p={4}
    >
      <Flex justifyContent="space-between">
        <Box
          bg={colorMode === 'dark' ? 'whiteAlpha.400' : 'gray.700'}
          h="40px"
          w="40px"
          borderRadius="full"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            p={2}
            w="full"
            h="full"
          >
            <RiBitCoinFill
              color={colorMode === 'dark' ? '#a9b1d6' : 'white'}
              size={30}
            />
          </Flex>
        </Box>

        <RiMore2Fill size={20} />
      </Flex>
      <VStack alignItems="flex-start" spacing="sm" mt="10px">
        <Heading
          fontSize="lg"
          color={colorMode === 'dark' ? 'darkMode.foreground' : 'gray.700'}
        >
          Value
        </Heading>
        <Text
          fontSize="sm"
          color={colorMode === 'dark' ? 'darkMode.foreground' : 'gray.700'}
        >
          Primary text
        </Text>
      </VStack>
    </Box>
  );
};
