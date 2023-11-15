import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import '@fontsource/Montserrat/500.css'
import '@fontsource/open-sans/700.css'
import { AuthContextProvider } from './AuthContext'
import theme from './theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>
)