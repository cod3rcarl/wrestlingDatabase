import { gql } from 'apollo-server-express'

export default gql`
  scalar Date

  type Query {
    champion(dateFilter: Date, currentChampion: Boolean): Champion!

    champions(
      titleHolder: [String!]
      filter: String
      orderBy: ChampionOrderByInput
    ): ChampionPayload!
  }

  type Mutation {
    createChampion(input: CreateChampionInput!): CreateChampionPayload!
  }

  type Champion {
    titleHolder: String!
    titleHolderNumber: Int
    dateWon: Date!
    dateLost: Date
    show: String!
    numberOfReigns: Int
    daysAsChampion: Int
    previousChampion: String
    currentChampion: Boolean
  }

  type ChampionPayload {
    champions: [Champion!]
    totalCount: Int
  }

  type CreateChampionPayload {
    success: Boolean!
    champion: Champion!
  }

  input CreateChampionInput {
    titleHolder: String!
    dateWon: String
    show: String!
  }

  input ChampionOrderByInput {
    titleHolder: Sort
    daysAsChampion: Sort
  }

  enum Sort {
    asc
    desc
  }
`
