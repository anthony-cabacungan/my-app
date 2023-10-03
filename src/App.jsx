import * as React from 'react'
import Navbar from './components/Navbar'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
    </ChakraProvider>
  )
}

export default App