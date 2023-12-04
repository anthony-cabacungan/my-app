import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Image, Container, Text, SimpleGrid, Flex, Stack, Box, Heading, StackDivider, VStack, List, ListItem, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const { username } = useParams("")
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [credits, setCredits] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [picture, setPicture] = useState('')

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
  useEffect(() => {
    axios.get(`http://localhost:4000/user/profile/${username}`)
    .then(res => {
      console.log(res.data)
      setFirstName(capitalizeFirstLetter(res.data.first_name))
      setLastName(capitalizeFirstLetter(res.data.last_name))
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
    <Container maxW={'6xl'} py={0} color="text.600">
      <SimpleGrid SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 14 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={`${picture}`}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {firstName} {lastName}
            </Heading>
            <Text
              fontWeight={300}
              fontSize={'2xl'}>
              {jobTitle}
            </Text>
            <Text
              fontSize={'sm'}>
              {location}
            </Text>
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
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Credits:
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {credits}
              </SimpleGrid>
            </Box>
            
          </Stack>

          <Button
            w={'full'}
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
      </SimpleGrid>
    </Container>
  )
} 
