import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Image, Container, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const { username } = useParams()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [profilePic, setProfilePic] = useState('')
  // const [description, setDescription] = useState('')
  
  useEffect(() => {
    axios.get(`http://localhost:4000/user/profile/${username}`)
    .then(res => {
      console.log(res.data)
      setFirstName(res.data.first_name)
      setLastName(res.data.last_name)
      // setProfilePic(res.data.profile_pic)
      // setDescription(res.data.description)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <Container maxW={'6xl'} py={12} >
      <Text color={'gray.500'} fontSize={'lg'}> 
        Name: {firstName} {lastName}
      </Text>
    </Container>
  )
} 
