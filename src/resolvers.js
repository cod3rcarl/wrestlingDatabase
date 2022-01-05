import { queryChampions, queryChampion } from './champions.js'
import { dateDiff } from './utils.js'

export default {
  Query: {
    champion: async (parent, args, prisma) => {
      return queryChampion(args, prisma)
    },
    champions: async (parent, args, prisma) => {
      return queryChampions(args, prisma)
    },
  },

  Champion: {
    previousChampion: async (parent, args, prisma) => {
      const champion = await prisma.champion.findUnique({
        where: { id: parent.id },
      })

      return prisma.champion.findFirst({
        where: { titleHolderNumber: champion.titleHolderNumber - 1 },
      })
    },
    daysAsChampion: async (parent, args, prisma) => {
      const champion = await prisma.champion.findUnique({
        where: { id: parent.id },
      })

      return dateDiff(new Date(champion.dateWon), new Date(champion.dateLost))
    },

    numberOfReigns: async (parent, args, prisma) => {
      const champion = await prisma.champion.findMany({
        where: { titleHolder: parent.titleHolder },
      })

      return champion.length
    },
  },

  //   Mutation: {
  //     createChampion: async (parent, args, { champion }) => {
  //       return createChampion(parent, args, champion)
  //     },
  //   },
}
