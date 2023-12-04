import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useAuth } from '../AuthContext.jsx'
import { useToast } from '@chakra-ui/react'

export default function Signup() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [credits, setCredits] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, login } = useAuth()
  const navigate = useNavigate()

  const toast = useToast()

  const handleSuccessToast = () => {
    toast({
      title: 'Account successfully created!',
      description: `Welcome ${username}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleFailureToast = () => {
    toast({
      title: 'Account with this email already exists!',
      description: `Please choose another email or proceed to login.`,
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    axios.post('http://localhost:4000/user/signup', {
      username: username,
      first_name: firstName,
      last_name: lastName,
      description: description,
      location: location,
      credits: credits,
      job_title: jobtitle,
      picture: picture,
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
      localStorage.clear()

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
          <FormHelperText color="text.100">We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Username</FormLabel>
            <Input 
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
          <FormLabel>Description</FormLabel>
            <Input 
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Location</FormLabel>
            <Input 
                type='text'
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Credits</FormLabel>
            <Input 
                type='text'
                onChange={(e) => setCredits(e.target.value)}
                value={credits}
            />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Job Title</FormLabel>
            <Input 
                type='text'
                onChange={(e) => setJobTitle(e.target.value)}
                value={jobtitle}
            />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Picture</FormLabel>
            <Input 
                type='text'
                onChange={(e) => setPicture(e.target.value)}
                value={picture}
            />
        </FormControl>

        <Button type="submit">Create Account</Button>
      </form>
    </Container>
  )
}
