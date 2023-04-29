import { useQueries } from '@tanstack/react-query'
import { fetchCharacterById } from '../api/fetch'
import { Image, SimpleGrid } from '@chakra-ui/react'
interface CharactersProps {
  characters: string[]
}

const Characters = ({ characters }: CharactersProps) => {
  const characterResults = useQueries({
    queries: characters.map((character) => {
      const characterId = Number(character)
      return {
        queryKey: [character],
        queryFn: () => fetchCharacterById(characterId),
      }
    }),
  })
  
  return (
    <SimpleGrid spacing={4} columns={3}>
      {characterResults.map(
        (characterResult) =>
          characterResult.data && (
              <Image
                key={characterResult.data.id}
                src={characterResult.data.img_url}
                alt={characterResult.data.name}
                boxSize="50"
                objectFit="cover"
                bg="pink"
              />
          )
      )}
    </SimpleGrid>
  )
}

export default Characters
