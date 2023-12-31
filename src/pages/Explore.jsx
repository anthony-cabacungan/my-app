import React, {useState, useEffect} from 'react'
import { Flex, Container, Text, IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import JobCard from '../components/JobCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext.jsx'

export default function Explore() {
  const { user } = useAuth()

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  const [allJobs, setAlljobs] = useState([]);

  useEffect(() => {
    const getAllJobs = async() => {
      try {
          const res = await axios.get('http://localhost:4000/job/all');
          console.log(res.data)
          setAlljobs(res.data);
      } catch (error) {
          console.log(error);
          setAlljobs(null);
      }
    };
    getAllJobs();
  }, []);

  return (
    <Container maxW={'6xl'} text- py={12}>
      {user ? (
        <Link to="/createjob"> <IconButton mb={"10px"} icon={<AddIcon />}/> </Link>
      ) : null}
      <Flex alignItems={'flex-start'} justify={'space-between'} wrap="wrap" gap={5}>
        {Array.isArray(allJobs) ? (
          allJobs.map((job) => (
            <JobCard
              key={job.username}
              jobId={job._id}
              first_name={capitalizeFirstLetter(job.first_name)}
              last_name={capitalizeFirstLetter(job.last_name)}
              title={job.title}
              description={job.description}
              picture={job.picture}
            />
          ))
        ) : (
          <Text color={'gray.500'} fontSize={'lg'}> 
            Jobs loading...
          </Text>
        )}
      </Flex>
  </Container>
  )
}
