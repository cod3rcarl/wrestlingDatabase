const buildQueryFromArgs = (args) => {
  const query = {
    where: {},
  }

  if (args?.titleHolder) {
    query.where.titleHolder = {
      in: args?.titleHolder,
    }
  }

  if (args?.dateFilter) {
    query.where = {
      dateLost: { gte: new Date(args.dateFilter) },
      dateWon: { lte: new Date(args.dateFilter) },
    }
  }

  if (args?.currentChampion) {
    query.where.currentChampion = args.currentChampion
  }

  return query
}

const dateDiff = (dateOne, dateTwo) => {
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const firstDate = new Date(dateOne)
  const secondDate = new Date(dateTwo)

  return Math.round(Math.abs((firstDate - secondDate) / oneDay))
}

export { buildQueryFromArgs, dateDiff }
