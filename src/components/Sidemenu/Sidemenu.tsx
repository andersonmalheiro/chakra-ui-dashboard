import React from 'react';
import { Box, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  RiDashboardLine,
  RiHome2Line,
  RiUserFill,
  RiLogoutCircleLine,
} from 'react-icons/ri';
import { IconType } from 'react-icons/lib';

interface SidemenuOption {
  url: string;
  name: string;
  icon: IconType;
}

export const Sidemenu = () => {
  const menuOptions: SidemenuOption[] = [
    {
      icon: RiHome2Line,
      name: 'Home',
      url: '/admin',
    },
    {
      icon: RiDashboardLine,
      name: 'Dashboard',
      url: '/admin/dashboard',
    },
  ];

  return (
    <Flex
      as="aside"
      h="full"
      w="250px"
      bg="purple.600"
      direction="column"
      justifyContent="space-between"
      p={4}
    >
      <VStack direction="column" align="start" spacing={4}>
        <Box p={2} bg="whiteAlpha.200" rounded="full" w="full">
          <HStack spacing="1em">
            <Flex
              h="40px"
              w="40px"
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
            >
              <Text>John Doe</Text>
              <Text as="small">johndoe@email.com</Text>
            </Flex>
          </HStack>
        </Box>

        <VStack pt="10" w="full">
          {menuOptions.map((option) => {
            const { icon: Icon, name, url } = option;

            return (
              <Link
                color="white"
                as={RouterLink}
                to={url}
                key={url}
                w="full"
                p={2}
                rounded="full"
                _hover={{
                  background: 'whiteAlpha.200',
                }}
              >
                <HStack spacing="1em">
                  <Flex
                    h="40px"
                    w="40px"
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg="whiteAlpha.400"
                  >
                    <Icon size="20" />
                  </Flex>
                  <Text>{name}</Text>
                </HStack>
              </Link>
            );
          })}
        </VStack>
      </VStack>
      <Link
        color="white"
        as={RouterLink}
        to="/"
        w="full"
        p={2}
        rounded="full"
        _hover={{
          background: 'whiteAlpha.200',
        }}
      >
        <HStack spacing="1em">
          <Flex
            h="40px"
            w="40px"
            alignItems="center"
            justifyContent="center"
            rounded="full"
            bg="whiteAlpha.400"
          >
            <RiLogoutCircleLine size="20" />
          </Flex>
          <Text>Logout</Text>
        </HStack>
      </Link>
    </Flex>
  );
};
