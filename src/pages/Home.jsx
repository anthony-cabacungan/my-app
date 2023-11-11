import React from 'react'
import background2 from "../assets/background2.jpg";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'

const componentStyle = {
  backgroundImage: `url(${background2})`,
  backgroundSize: 'cover',
  width: '2000px',
  height: '1500px'
  /* Add other background properties as needed */
};

export default function Home() {
  return (
    // <div style={componentStyle} >
    // </div>
    <Container maxW={'6xl'} py={12} >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading color="text.200" fontWeight={'normal'} fontSize={'5xl'} >Your next project starts here.</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          A platform for musicians, audio engineers, producers, and songwriters to 
          discover exciting opportunities.
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://pbs.twimg.com/media/FE5zAkdWQAIJd7f.jpg:large'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}