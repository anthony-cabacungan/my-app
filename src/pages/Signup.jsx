import React, { useState } from 'react'
import { Container, FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import axios from 'axios'

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    axios.post('http://localhost:4000/user/signup', {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    })
    .then(res => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <Container maxW="480px" color="text.400" py={12}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="20px">
          <FormLabel>First Name</FormLabel>
            <Input 
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Last Name</FormLabel>
            <Input 
                type='text'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Email address</FormLabel>
            <Input 
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
          <FormHelperText color="text.100">We'll never share your email.</FormHelperText>
        </FormControl>
        
        <FormControl isRequired mb="20px">
          <FormLabel>Password</FormLabel>
            <Input 
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
        </FormControl>

        <Button type="submit">Create Account</Button>
      </form>
    </Container>
  )
}
