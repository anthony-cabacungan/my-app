import React, {useState, useEffect} from 'react'
import { Flex, Container } from '@chakra-ui/react'
import ProfileCard from '../components/ProfileCard'
import axios from 'axios'

export default function Community() {
  const [userProfiles, setUserProfiles] = useState([
    {
      "username": "kanyewest",
      "first_name": "Kanye",
      "last_name": "West",
      "description": "I am a producer with over 20 years of experience and 10 consecutive US #1 debut albums.",
      "location": "Chicago, Illinois",
      "credits" : "Kanye West, Jay-Z, Pusha TKanye West, Jay-Z, Pusha TKanye West, Jay-Z, Pusha TKanye West, Jay-Z, Pusha T",
      "job_title": "Producer / Beatmaker",
      "picture": "https://townsquare.media/site/812/files/2023/03/attachment-kanye-west-10.jpg?w=980&q=75"
    },
    {
      "username": 1,
      "first_name": "Kanye",
      "last_name": "West",
      "description": "I am a producer with over 20 years of experience and 10 consecutive US #1 debut albums. I am a producer with over 20 years of experience and 10 consecutive US #1 debut albumsI am a producer with over 20 years of experience and 10 consecutive US #1 debut albums. I am a producer with over 20 years of experience and 10 consecutive US #1 debut albumsI am a producer with over 20 years of experience and 10 consecutive US #1 debut albums. I am a producer with over 20 years of experience and 10 consecutive US #1 debut albumsI am a producer with over 20 years of experience and 10 consecutive US #1 debut albums. I am a producer with over 20 years of experience and 10 consecutive US #1 debut albums",
      "location": "Chicago, Illinois",
      "credits" : "Kanye West, Jay-Z, Pusha T",
      "job_title": "Producer / Beatmaker",
      "picture": "https://townsquare.media/site/812/files/2023/03/attachment-kanye-west-10.jpg?w=980&q=75"
    },
    {
      "username": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "jane.smith@example.com",
      "picture": "https://example.com/avatar/jane.jpg"
    },
    {
      "username": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "jane.smith@example.com",
      "picture": "https://example.com/avatar/jane.jpg"
    },
    {
      "username": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "jane.smith@example.com",
      "picture": "https://example.com/avatar/jane.jpg"
    },
    // Add more user profiles as needed
  ])

  // const getAllUsers = async() => {
  //   try {
  //       const res = await axios.get('http://localhost:4000/user/all');
  //       setUserProfiles(res.data);
  //   } catch (error) {
  //       console.log(error);
  //       setUserProfiles(null);
  //   }
  // };

  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  return (
    <Container maxW={'6xl'} py={12} >
      <Flex alignItems={'flex-start'} justify={'space-between'} wrap="wrap" gap={"70"}>
          {userProfiles.map((profile) => (
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
          ))}
      </Flex>
    </Container>
  )
}
