export interface Episodes {
  id: number
  name: string
  air_date: string
  characters: string[]
  img_url: string
}

export interface Character {
  id: number
  name: string
  img_url: string
}

export const fetchEpisodes = async (): Promise<Episodes[]> => {
  const response = await fetch(`https://finalspaceapi.com/api/v0/episode`)
  if (!response.ok) {
    throw Error(response.statusText)
  }

  return response.json()
}

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const response = await fetch(
    `https://finalspaceapi.com/api/v0/character/${id}`
  )
  if (!response.ok) {
    throw Error(response.statusText)
  }

  return response.json()
}
