import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Image, Container, Text, SimpleGrid, Flex, Stack, Box, Heading, StackDivider, VStack, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function Job() {
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
  const { jobId } = useParams("")
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [picture, setPicture] = useState('')
  
  useEffect(() => {
    axios.get(`http://localhost:4000/job/job/${jobId}`)
    .then(res => {
      console.log(res.data)
      setFirstName(capitalizeFirstLetter(res.data.first_name))
      setLastName(capitalizeFirstLetter(res.data.last_name))
      setDescription(res.data.description)
      setTitle(res.data.title)
      setTitle(res.data.title)
      setPicture(res.data.picture)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <Container maxW={'6xl'} py={16} color="text.600">

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {title}
            </Heading>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider  />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                {description}
              </Text>
            </VStack>
            <Box> </Box>
          </Stack>
            <Button
              maxW={"300px"}
              size={'md'}
              py={'6'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Contact {firstName}
            </Button>
        </Stack>
    </Container>
  )
} 
