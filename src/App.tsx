import Episodes from './pages/Episodes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5*(60*1000), // 5 mins
      cacheTime: 10*(60*1000), // 10 mins
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS={true}>
        <Episodes />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
