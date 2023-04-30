import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Characters from '../components/Characters'
import { formatLocaleDate, getCharacterIdArray } from '../utils/utils'
import { Episodes } from '../api/fetch'

interface EpisodeListProps {
  episodes: Episodes[]
}

const EpisodeList = ({ episodes }: EpisodeListProps) => {
  return (
    <div>
      {episodes.map((episode) => (
        <article key={episode.id}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            padding={6}
            overflow="hidden"
            variant="outline"
          >
            <Image
              boxSize="12rem"
              objectFit="cover"
              src={episode.img_url}
              alt={episode.name}
            />

            <CardBody pt={2}>
              <Heading as="h3" size="sm">
                {episode.name}
              </Heading>
              <Text color="gray.500">{formatLocaleDate(episode.air_date)}</Text>
            </CardBody>
            <Stack>
              <Characters
                characters={getCharacterIdArray(episode.characters)}
              />
            </Stack>
          </Card>
        </article>
      ))}
    </div>
  )
}

export default EpisodeList
