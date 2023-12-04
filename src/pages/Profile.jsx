import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Image, Container, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const { username } = useParams("kanyewest")
  const [firstName, setFirstName] = useState('Kanye')
  const [lastName, setLastName] = useState('West')
  const [description, setDescription] = useState('I am a producer with over 20 years of experience and 10 consecutive US #1 debut albums.')
  const [location, setLocation] = useState('Chicago, Illinois')
  const [credits, setCredits] = useState('Kanye West, Jay-Z, Pusha T')
  const [jobTitle, setJobTitle] = useState('Producer / Beatmaker')
  const [picture, setPicture] = useState('https://townsquare.media/site/812/files/2023/03/attachment-kanye-west-10.jpg?w=980&q=75')
  
  useEffect(() => {
    axios.get(`http://localhost:4000/user/profile/${username}`)
    .then(res => {
      console.log(res.data)
      setFirstName(res.data.first_name)
      setLastName(res.data.last_name)
      setDescription(res.data.description)
      setLocation(res.data.location)
      setCredits(res.data.credits)
      setJobTitle(res.data.job_title)
      setPicture(res.data.picture)
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
