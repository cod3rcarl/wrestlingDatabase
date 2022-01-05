import createApolloServer from './apollo-server.js'
;(async () => {
  const { prismaClient } = await createApolloServer()
  const titleHolder = `Randy Orton`
  const dateWon = '2020-10-25'
  const show = `Hell in a Cell`

  const previousChampion = await prismaClient.champion.findFirst({
    where: { currentChampion: true },
  })

  console.log(previousChampion.titleHolder)

  if (previousChampion.currentChampion) {
    // Update old champion

    const updatePreviousChampion = await prismaClient.champion.update({
      where: {
        id: previousChampion.id,
      },
      data: {
        dateLost: new Date(dateWon),
        currentChampion: false,
      },
    })

    console.log(updatePreviousChampion)

    const newChampionData = {
      titleHolder,
      titleHolderNumber: previousChampion.titleHolderNumber + 1,
      show,
      dateWon: new Date(dateWon),
      previousChampion: previousChampion?.titleHolder,
      currentChampion: true,
    }

    console.log(newChampionData)
    if (!updatePreviousChampion.currentChampion) {
      const newChampion = await prismaClient.champion.create({
        data: newChampionData,
      })

      console.log(newChampion)
    } else {
      throw new Error('Unable to create new entry')
    }
  }
  console.log(`updated`)
  prismaClient.$disconnect()
  Promise.resolve(true)
})()
