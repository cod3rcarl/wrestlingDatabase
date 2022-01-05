export default async (parent, args, champion) => {
  const { titleHolder, dateWon, show } = args.input
  const previousChampion = await champion.findFirst({
    where: { currentChampion: true },
  })

  if (previousChampion.currentChampion) {
    const updateOldChamp = await champion.update({
      where: {
        id: previousChampion.id,
      },
      data: {
        dateLost: new Date(dateWon),
        currentChampion: false,
      },
    })

    const newChamp = {
      titleHolder,
      show,
      dateWon: new Date(dateWon),
      previousChampion,
      currentChampion: true,
    }
    if (!updateOldChamp.currentChampion) {
      await champion.create({
        data: newChamp,
      })
    } else {
      throw new Error('Unable to create new entry')
    }
  }

  return {
    success: true,
    champion: newChamp,
  }
}
