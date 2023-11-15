import React from 'react';
import SearchBar from './SearchBar';
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

function Navbar() {
  const {user, logout } = useAuth()
  const navigate = useNavigate()

  const toast = useToast()

  const handleLogout = () => {
    logout()

    toast({
      title: 'Logout Successful!',
      description: ``,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

    navigate('/')
  }

  return (
    <Heading fontWeight={"normal"}>
      <Flex as="nav" p="30px" bg="#24252A" alignItems="center" gap="25px" pl="10%" pr="10%" color="text.500" fontSize={"sm"}>
        <Link to="/"><Box fontSize={"xl"}>Placeholder</Box></Link>
          <Spacer></Spacer>
        <Link to="/explore"><Box>Explore</Box></Link>
        <Link to="/community"><Box>Community</Box></Link>
        <Link to="/about"><Box>About Us</Box></Link>
        {user ? (
          <Button bg={"rgba(0,136,169,1)"} color="text.500" fontSize={"sm"} fontWeight={"normal"} onClick={handleLogout}>Logout</Button>
        ) : (
          <Link to="/login"><Button bg={"rgba(0,136,169,1)"} color="text.500" fontSize={"sm"} fontWeight={"normal"}>Login</Button></Link>
        )}
      </Flex>
    </Heading>
  );
}

export default Navbar;
