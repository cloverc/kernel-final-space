import { ITEMS_PER_PAGE as items } from '../utils/utils'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchEpisodes } from '../api/fetch'

import EpisodeList from '../components/EpisodeList'
import { Button, ButtonGroup, Container, Heading, Text } from '@chakra-ui/react'

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const {
    data: episodes,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['episode', currentPage],
    queryFn: () => fetchEpisodes(currentPage),
    keepPreviousData: true,
  })

  const episodesOffsetStart = currentPage * items
  const episodesOffsetEnd = episodesOffsetStart + items

  const paginatedEpisodes =
    episodes?.slice(episodesOffsetStart, episodesOffsetEnd) || []

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  if (isError) return <p>Oops Error</p>

  return (
    <Container maxW="3xl" marginBlock={10}>
      <Heading as="h2" size="lg" mb="8">
        Kernel Tech Test: Final Space
      </Heading>
      <EpisodeList episodes={paginatedEpisodes} />
      <ButtonGroup
        spacing="6"
        size="sm"
        colorScheme="green"
        mt="6"
        display="flex"
        justifyContent="flex-end"
      >
        <Button isDisabled={currentPage < 1} onClick={prevPage}>
          « Previous
        </Button>
        <Text mt="1" fontSize="sm">
          Page {currentPage + 1}
        </Text>
        <Button
          isDisabled={paginatedEpisodes.length < items - 1}
          onClick={nextPage}
        >
          Next »
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default Episodes
