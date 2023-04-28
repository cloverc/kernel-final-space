const formatLocaleDate = (episodeDate: string) => {
  const localeDate = new Date(episodeDate).toLocaleDateString()

  return localeDate
}

export default formatLocaleDate
