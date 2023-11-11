import * as React from 'react'
import AppNavigator from './AppNavigator'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Navbar />
      <Box bg="#24252A" minW="1000px" minH="1000px">
        <AppNavigator />
      </Box>
      <Footer/>
    </Router>
  )
}

export default App