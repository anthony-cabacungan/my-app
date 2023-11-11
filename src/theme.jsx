import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'open-sans', sans-serif`,
  },
  colors: {
    text: {
      100: '#C0C0C0',
      200: '#FFFFFF',
      300: '#A0AEC0',
      400: '#E2E8F0',
      500: '#EDF0F1'
    },
  }
})

export default theme