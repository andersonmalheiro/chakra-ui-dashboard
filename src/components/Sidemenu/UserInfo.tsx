import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import { RiArrowDownSLine, RiUserFill } from 'react-icons/ri';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/popover';
import { Portal } from '@chakra-ui/portal';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode';

export const UserInfo = () => {
  const { colorMode } = useColorMode();
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Popover placement="right-start">
      <PopoverTrigger>
        <Box
          p={2}
          bg="whiteAlpha.200"
          rounded="full"
          w={{ base: 'full', sm: 'fit-content', md: 'full' }}
          cursor="pointer"
          color="white"
        >
          <HStack spacing={{ base: '1em', sm: '0', md: '1em' }}>
            <Flex
              h={{ sm: '30px', md: '40px' }}
              w={{ sm: '30px', md: '40px' }}
              alignItems="center"
              justifyContent="center"
              rounded="full"
              bg="whiteAlpha.400"
            >
              <RiUserFill size="20" color="white" />
            </Flex>
            <Flex
              color="white"
              flexDirection="column"
              alignContent="flex-start"
              textAlign="left"
              display={{ base: 'block', sm: 'none', md: 'block' }}
            >
              <Text
                color={
                  colorMode === 'dark' ? 'darkMode.foreground' : 'white'
                }
              >
                John Doe
              </Text>
              <Text
                color={
                  colorMode === 'dark' ? 'darkMode.foreground' : 'white'
                }
                as="small"
              >
                johndoe@email.com
              </Text>
            </Flex>
            {!isSmallScreen && <RiArrowDownSLine size={20} />}
          </HStack>
        </Box>
      </PopoverTrigger>

      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Details</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>content</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
