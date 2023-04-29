import { useQueries } from '@tanstack/react-query'
import { fetchCharacterById } from '../api/fetch'
import { Image, SimpleGrid } from '@chakra-ui/react'
interface CharactersProps {
  characters: string[]
}

const Characters = ({ characters }: CharactersProps) => {
  const characterQueries = useQueries({
    queries: characters.map((character) => {
      const characterId = Number(character)
      return {
        queryKey: ['character', characterId],
        queryFn: () => fetchCharacterById(characterId),
      }
    }),
  })
  return (
    <SimpleGrid spacing={4} columns={3}>
      {characterQueries.map((characterQuery) => (
        <Image
          key={characterQuery.data?.name}
          src={characterQuery.data?.img_url}
          alt={characterQuery.data?.name}
          boxSize={50}
          bg="pink"
        />
      ))}
    </SimpleGrid>
  )
}

export default Characters
