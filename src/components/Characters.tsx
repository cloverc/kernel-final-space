import { useQueries } from '@tanstack/react-query'
import { Episodes, fetchCharacterById } from '../api/fetch'
import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

type Characters = Omit<Episodes, 'air_date'>

const Characters = ({ characters = [] }: Partial<Characters>) => {
  const characterQueries = useQueries({
    queries: characters.map((character) => {
      const characterId = Number(character[character.length - 1])
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
          key={characterQuery.data?.id}
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
