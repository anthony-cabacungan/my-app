import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react'

const JobCard = ({ username, first_name, last_name, title, description, picture }) => {
    return (
    <Link to={`/job/${username}`}>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            minW='4xl'
            minH='100px'
            maxW='4xl'
            maxH='300px'
            color="text.600"
            bg='gray.700'
        >   
            <Image 
                fallbackSrc='https://via.placeholder.com/150'
                objectFit='cover' 
                maxW={{ base: '100%', sm: '150px' }}
                src={picture}
            />
            <Stack > 
                <CardBody bg='gray.700' >
                    <Heading size='lg' py='1'>{title}</Heading>
                    <Heading size='md'>{first_name} {last_name}</Heading>

                    <Text py='2' max={50}>
                        {description && description.length > 160
                        ? `${description.slice(0, 160)}...`
                        : description}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    </Link>
  )
}

export default JobCard