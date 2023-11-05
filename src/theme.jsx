import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Mukta', sans-serif`,
    body: `'Mukta', sans-serif`,
  },
  colors: {
    text: {
      100: '#C0C0C0',
      200: '#FFFFFF',
      300: '#A0AEC0',
      400: '#E2E8F0'
    },
  }
})

export default theme