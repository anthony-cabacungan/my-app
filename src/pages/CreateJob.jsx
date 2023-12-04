import React, {useState } from 'react'
import { Container, FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'

export default function CreateJob() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (event) => {
      event.preventDefault()
    }
    return (
        <Container maxW="480px" color="text.400" py={12}>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired mb="20px">
                <FormLabel>Title</FormLabel>
                <Input 
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </FormControl>
            <FormControl isRequired mb="20px">
              <FormLabel>Description</FormLabel>
                <Input 
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </FormControl>
            <Button type="submit">Submit Post</Button>
          </form>
        </Container>
    )
}
