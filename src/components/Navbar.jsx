import React from 'react';
import SearchBar from './SearchBar';
import {
  Flex,
  Heading,
  Button,
  Spacer
} from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex as="nav" p="10px" bg="gray.200" alightItems="center" gap="10px">
      <Heading> Placeholder </Heading>
      <SearchBar></SearchBar>
      <Spacer></Spacer>
      <Button>Create Account</Button>
      <Button>Login</Button>
    </Flex>
  );
}

export default Navbar;
