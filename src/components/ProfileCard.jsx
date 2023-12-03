import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Heading, Stack, Image, Text } from '@chakra-ui/react'

const ProfileCard = ({ username, first_name, last_name, description, credits, job_title, picture, location }) => {
    return (
    <Link to={`/profile/${username}`}>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            minW='4xl'
            minH='250px'
            maxW='4xl'
            maxH='300px'
            color="text.600"
            bg='gray.700'
        >       
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={picture}
                alt='Profile Picture'
            />
            <Stack > 
                <CardBody bg='gray.700' >
                    <Heading size='lg' py='1'>{job_title}</Heading>
                    <Heading size='md'>{first_name} {last_name}</Heading>
                    <Text fontSize='sm' >
                        {location}
                    </Text>
                    <Text py='2' max={50}>
                        {description && description.length > 160
                        ? `${description.slice(0, 160)}...`
                        : description}
                    </Text>
                    <Text py='2'>
                        Credits: {credits && credits.length > 10
                        ? `${credits.slice(0, 70)}...`
                        : credits}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    </Link>
  )
}

export default ProfileCard