import { useQuery } from '@tanstack/react-query'
import { fetchEpisodes } from '../api/fetch'
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Characters from '../components/Characters'
import { formatLocaleDate, getCharacterIdArray } from '../utils/utils'

const Episodes = () => {
  const { data: episodes, status } = useQuery({
    queryKey: ['episodes'],
    queryFn: fetchEpisodes,
  })

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>Error :(</p>
  }

  return (
    <div>
      {episodes.map((episode) => (
        <article key={episode.id}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            padding={5}
            maxH={320}
            overflow="hidden"
            variant="outline"
          >
            <Image
              boxSize={200}
              objectFit="cover"
              margin={4}
              src={episode.img_url}
              alt={episode.name}
            />

            <CardBody>
              <Heading size="sm">{episode.name}</Heading>
              <Text py="2">{formatLocaleDate(episode.air_date)}</Text>
            </CardBody>
            <Stack>
              <Characters characters={getCharacterIdArray(episode.characters)} />
            </Stack>
          </Card>
        </article>
      ))}
    </div>
  )
}

export default Episodes
