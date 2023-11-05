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
      <Flex as="nav" p="3px" bg="rgb(10,10,9)" alignItems="center" gap="25px" pl="7" pr="7" color="text.300" >
        <Heading as='h3' size='lg'> Placeholder </Heading>
        <SearchBar></SearchBar>
        <Spacer></Spacer>
        <Link to="/signup"><Box>Sign Up</Box></Link>
        <Link to="/login"><Box>Login</Box></Link>
      </Flex>
      <Flex as="nav" p="3px" bg="#202020" alignItems="center" gap="25px" pl="50px" pr="12" color="text.100">
        <Link to="/"><Box>Home</Box></Link>
        <Link to="/explore"><Box>Explore</Box></Link>
        <Link to="/community"><Box>Community</Box></Link>
        <Link to="/about"><Box>About Us</Box></Link>
        <Link to="/contact"><Box>Contact Us</Box></Link>
      </Flex>
    </>
    

    
  );
}

export default Navbar;
