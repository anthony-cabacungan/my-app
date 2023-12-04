import React, {useState } from 'react'
import { Container, FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext.jsx'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'

export default function CreateJob() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { user, login } = useAuth()
    const navigate = useNavigate()

    const toast = useToast()

    const handleSuccessToast = () => {
      toast({
        title: 'Post created!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  
    const handleFailureToast = () => {
      toast({
        title: 'Could not create post',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }

    const handleSubmit = async (event) => {
      event.preventDefault()

      axios.post('http://localhost:4000/job/create', {
      email: user,
      title: title,
      description: description,
    })
    .then(res => {
      // show success toast
      handleSuccessToast()
      
      // redirect user to home page
      navigate('/explore')
    })
    .catch((error) => {
      // show failure toast
      handleFailureToast()
    })
    }
    return (
        <Container maxW="480px" color="text.400" py={12}>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired mb="20px">
                <FormLabel>Title</FormLabel>
                <Input 
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
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
            <Button type="submit">Submit Post</Button>
          </form>
        </Container>
    )
}
