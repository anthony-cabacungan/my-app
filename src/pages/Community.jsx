import React, {useState, useEffect} from 'react'
import { Flex, Container } from '@chakra-ui/react'
import ProfileCard from '../components/ProfileCard'
import axios from 'axios'

export default function Community() {
  const [userProfiles, setUserProfiles] = useState([]);

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
    <Flex alignItems={'flex-start'} justify={'space-between'} wrap="wrap" gap={70}>
      {Array.isArray(userProfiles) ? (
        userProfiles.map((profile) => (
          <ProfileCard
            key={profile.username}
            username={profile.username}
            first_name={profile.first_name}
            last_name={profile.last_name}
            description={profile.description}
            location={profile.location}
            credits={profile.credits}
            job_title={profile.job_title}
            picture={profile.picture}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Flex>
  </Container>
  )
}
