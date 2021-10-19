export default async (_, args, { prisma }) => {
  const { champion, dateWon, show } = args.input
  const previousChampion = await prisma.client.champion.findFirst()

  return {
    champion,
    show,
    dateWon,
    previousChampion: previousChampion?.champion,
  }
}
