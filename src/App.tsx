import Episodes from './pages/Episodes'
import { Container, Heading } from '@chakra-ui/react'

const App = () => {
  return (
    <Container maxW="3xl" marginBlock={10}>
      <Heading as="h2" size="lg" mb="8">
        Kernel Tech Test: Final Space
      </Heading>
      <Episodes />
    </Container>
  )
}

export default App
