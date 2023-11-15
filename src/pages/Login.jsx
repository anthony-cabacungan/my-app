import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useAuth } from '../AuthContext.jsx'
import { useToast } from '@chakra-ui/react'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, login, logout } = useAuth()
  const navigate = useNavigate()

  const toast = useToast()

  const handleSuccessToast = () => {
    toast({
      title: 'Login Successful!',
      description: `Welcome ${email}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleFailureToast = () => {
    toast({
      title: 'Invalid username or password!',
      description: ``,
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    axios.post('http://localhost:4000/user/login', {
      email: email,
      password: password
    })
    .then(res => {
      const email = res.data.email
      const token = res.data.token

      // login user in authcontext
      login(email)

      // save token in local storage
      localStorage.setItem('token', token)

      // show success toast
      handleSuccessToast()
      
      // redirect user to home page
      navigate('/')
    })
    .catch((error) => {
      // clear token in local storage
      localStorage.removeItem('token')

      // log out user in auth context
      logout()

      // show failure toast
      handleFailureToast()
    })
  }

  return (
    <Container maxW="480px" color="text.400" py={12}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="20px">
          <FormLabel>Email address</FormLabel>
            <Input                 
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
        </FormControl>
        
        <FormControl isRequired mb="20px">
          <FormLabel>Password</FormLabel>
            <Input 
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
        </FormControl>

        <Button type="submit">Sign in</Button>
      </form>
    </Container>
  )
}
