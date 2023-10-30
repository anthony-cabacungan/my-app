import * as React from 'react'
import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Navbar />
      <Container bg="blue.50" maxW="1200px" maxL="1000px" p="50px">
        <Routes />
      </Container>
      <Footer/>
    </Router>
  )
}

export default App