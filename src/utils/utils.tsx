export const formatLocaleDate = (episodeDate: string) => {
  const localeDate = new Date(episodeDate).toLocaleDateString()

  return localeDate
}

export const getCharacterIdArray = (characters: string[]) => {
  const characterIdArray = Array<string>()

  characters.map((character) => {
    characterIdArray.push(character.slice(character.lastIndexOf('/') + 1))
  })

  return characterIdArray
}
