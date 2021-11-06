import { queryChampions, queryChampion } from './champions.js'

export default {
  Query: {
    champion: async (parent, args, prisma) => {
      return queryChampion(args, prisma)
    },
    champions: async (parent, args, prisma) => {
      return queryChampions(args, prisma)
    },
  },

  //   Mutation: {
  //     createChampion: async (parent, args, { champion }) => {
  //       return createChampion(parent, args, champion)
  //     },
  //   },
}
