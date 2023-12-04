import React, {useState, useEffect} from 'react'
import { Flex, Container, Text } from '@chakra-ui/react'
import ProfileCard from '../components/ProfileCard'
import axios from 'axios'

export default function Community() {
  const [userProfiles, setUserProfiles] = useState([]);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  useEffect(() => {
    const getAllUsers = async() => {
      try {
          const res = await axios.get('http://localhost:4000/user/all');
          console.log(res.data)
          setUserProfiles(res.data);
      } catch (error) {
          console.log(error);
          setUserProfiles(null);
      }
    };
    getAllUsers();
  }, []);

  return (
    <Container maxW={'6xl'} py={12}>
    <Flex alignItems={'flex-start'} justify={'space-between'} wrap="wrap" gap={35}>
      {Array.isArray(userProfiles) ? (
        userProfiles.map((profile) => (
          <ProfileCard
            key={profile.username}
            username={profile.username}
            first_name={capitalizeFirstLetter(profile.first_name)}
            last_name={capitalizeFirstLetter(profile.last_name)}
            description={profile.description}
            location={profile.location}
            credits={profile.credits}
            job_title={profile.job_title}
            picture={profile.picture}
          />
        ))
      ) : (
        <Text color={'gray.500'} fontSize={'lg'}> 
          Profiles loading...
        </Text>
      )}
    </Flex>
  </Container>
  )
}
