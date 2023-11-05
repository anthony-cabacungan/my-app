import React from 'react'
import { Container, FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import { useSubmit, Form } from "react-router-dom"

export default function Signup() {
  return (
    <Container maxW="480px" color="text.400" py={12}>
      {/* <Form> */}
        <FormControl isRequired mb="20px">
          <FormLabel>First Name</FormLabel>
            <Input type='text' />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Last Name</FormLabel>
            <Input type='text' />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Email address</FormLabel>
            <Input type='email' />
          <FormHelperText color="text.100">We'll never share your email.</FormHelperText>
        </FormControl>
        
        <FormControl isRequired mb="20px">
          <FormLabel>Password</FormLabel>
            <Input type='password' />
        </FormControl>

        <Button type="submit">Create Account</Button>
      {/* </Form> */}
    </Container>
  )
}
