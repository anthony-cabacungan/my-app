import React from 'react'
import { Container, FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import { useSubmit, Form } from "react-router-dom"

export default function Login() {
  return (
    <Container maxW="480px" color="text.400" py={12}>
      {/* <Form> */}
        <FormControl isRequired mb="20px">
          <FormLabel>Email address</FormLabel>
            <Input type='email' />
        </FormControl>
        
        <FormControl isRequired mb="20px">
          <FormLabel>Password</FormLabel>
            <Input type='password' />
        </FormControl>

        <Button type="submit">Sign in</Button>
      {/* </Form> */}
    </Container>
  )
}
