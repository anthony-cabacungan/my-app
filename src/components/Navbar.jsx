import React from 'react';
import SearchBar from './SearchBar';
import {
  Flex,
  Heading,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <Flex as="nav" p="3px" bg="gray.300" alignItems="center" gap="25px" pl="7" pr="7">
        <Heading as='h3' size='lg'> Placeholder </Heading>
        <SearchBar></SearchBar>
        <Spacer></Spacer>
        <Link to="/create"><Box>Create</Box></Link>
        <Link to="/login"><Box>Login</Box></Link>
      </Flex>
      <Flex as="nav" p="3px" bg="gray.200" alignItems="center" gap="25px" pl="50px" pr="12">
        <Link to="/explore"><Box>Explore</Box></Link>
        <Link to="/community"><Box>Community</Box></Link>
        <Link to="/about"><Box>About Us</Box></Link>
        <Link to="/contact"><Box>Contact Us</Box></Link>
      </Flex>
    </>
    

    
  );
}

export default Navbar;
