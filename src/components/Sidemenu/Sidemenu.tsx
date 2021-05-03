import React from 'react';
import { Flex, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  RiDashboardLine,
  RiHome2Line,
  RiLogoutCircleLine,
} from 'react-icons/ri';
import { IconType } from 'react-icons/lib';
import { UserInfo } from './UserInfo';

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
      w={{ lg: '250px', sm: '70px', md: '250px' }}
      bg="purple.600"
      direction="column"
      justifyContent="space-between"
      p={{ base: 4, sm: 2 }}
    >
      <VStack
        direction="column"
        alignContent={{ base: 'start', sm: 'center', md: 'start' }}
        spacing={4}
      >
        <UserInfo />

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
                alignContent={{ sm: 'center' }}
                _hover={{
                  background: 'whiteAlpha.200',
                }}
              >
                <HStack
                  spacing="1em"
                  justifyContent={{
                    base: 'unset',
                    sm: 'center',
                    md: 'unset',
                  }}
                >
                  <Flex
                    h={{ sm: '35px', md: '40px' }}
                    w={{ sm: '35px', md: '40px' }}
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg="whiteAlpha.400"
                  >
                    <Icon size="20" />
                  </Flex>
                  <Text
                    display={{
                      sm: 'none',
                      md: 'block',
                    }}
                  >
                    {name}
                  </Text>
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
        <HStack spacing="1em" justifyContent={{ sm: 'center', md: 'unset' }}>
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
          <Text
            display={{
              sm: 'none',
              md: 'block',
            }}
          >
            Logout
          </Text>
        </HStack>
      </Link>
    </Flex>
  );
};
