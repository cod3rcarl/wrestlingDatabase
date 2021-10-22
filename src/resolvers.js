import createChampion from './createChampion.js'

export default {
  Query: {
    champions: async (
      parent,
      { championFilter, dateFilter, currentChampion },
      { champion }
    ) => {
      if (championFilter) {
        return champion.findMany({
          where: { titleHolder: championFilter },
        })
      }

      if (dateFilter) {
        return [
          champion.findFirst({
            where: {
              dateLost: { gte: new Date(dateFilter) },
              dateWon: { lte: new Date(dateFilter) },
            },
          }),
        ]
      }

      if (currentChampion) {
        return [
          champion.findFirst({
            where: { currentChampion: true },
          }),
        ]
      }

      const champions = await champion.findMany()
      return champions
    },
  },

  Mutation: {
    createChampion: async (parent, args, { prisma }) => {
      return createChampion(parent, args, { prisma })
    },
  },
}
