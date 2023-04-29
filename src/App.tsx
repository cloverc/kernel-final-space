import Episodes from './pages/Episodes'
import { Container, Heading, Stack } from '@chakra-ui/react'

const App = () => {
  return (
    <Container maxW="3xl" p={0}>
      <Stack spacing="10">
        <Heading as="h2" size="xl" noOfLines={1}>
          Kernel Tech Test: Final Space
        </Heading>
      </Stack>
      <Episodes />
    </Container>
  )
}

export default App
