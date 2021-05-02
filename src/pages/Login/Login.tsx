import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Link,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router";

export const Login = () => {
  document.title = "Login - Chakra Dashboard";

  const history = useHistory();

  const goToAdmin = () => history.push("/admin");

  return (
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} h="100vh" w="full">
      <VStack px="32" py="20">
        <Heading as="h1" alignSelf="flex-start">
          Login
        </Heading>
        <Heading
          as="h4"
          size="sm"
          alignSelf="flex-start"
          color="blackAlpha.600"
        >
          See you growth and get consulting support!
        </Heading>

        <Grid as="form" gap="1.5em" w="full" pt="10">
          <FormControl colorScheme="purple" id="email" isRequired>
            <FormLabel fontSize="sm">Email</FormLabel>
            <Input type="email" rounded="full" placeholder="email@email.com" />
          </FormControl>
          <FormControl colorScheme="purple" id="password" isRequired>
            <FormLabel fontSize="sm">Password</FormLabel>
            <Input
              type="password"
              rounded="full"
              placeholder="Min. 8 character"
            />
          </FormControl>

          <Flex w="full" justifyContent="space-between">
            <Checkbox defaultIsChecked>Remember me</Checkbox>
            <Spacer />
            <Link fontWeight="bold" color="purple.600">
              Forget password?
            </Link>
          </Flex>

          <Button
            colorScheme="purple"
            bg="purple.600"
            rounded="full"
            size="lg"
            w="full"
            marginTop="4"
            onClick={goToAdmin}
          >
            Login
          </Button>

          <Text>
            Not registered yet?{" "}
            <Link color="purple.600">Create an account</Link>
          </Text>
        </Grid>
      </VStack>
      <Box bg="purple.600"></Box>
    </SimpleGrid>
  );
};
