import { buildQueryFromArgs, dateDiff } from './utils.js'

export const queryChampion = async (args, prisma) => {
  const search = buildQueryFromArgs(args)

  const champion = await prisma.champion.findFirst({
    where: search.where,
  })

  return champion
}

export const queryChampions = async (args, prisma) => {
  const search = buildQueryFromArgs(args)

  const champions = await prisma.champion.findMany({
    where: search.where,
  })

  const championsLength = prisma.champion.count({
    where: search.where,
  })

  const [championRecords, count] = await Promise.all([
    champions,
    championsLength,
  ])

  if (args?.orderBy) {
    if (typeof args?.orderBy === 'number') {
      championRecords = championRecords.map((champion) => {
        const daysAsChampion = dateDiff(
          new Date(champion.dateWon),
          new Date(champion.dateLost)
        )
        return { ...champion, daysAsChampion }
      })
    }
    Object.entries(args.orderBy).forEach(([field, order]) => {
      const orderMultiplier = order === `asc` || !order ? 1 : -1

      championRecords.sort(
        (a, b) =>
          a[field].localeCompare(b[field], `en`, {
            sensitivity: `base`,
            ignorePunctuation: true,
          }) * orderMultiplier
      )
    })
  }

  return { champions: championRecords, totalCount: count }
}
