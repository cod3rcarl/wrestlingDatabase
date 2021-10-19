import { gql } from 'apollo-server-express'

export default gql`
  scalar Date

  type Query {
    champions(
      currentChampion: Boolean
      dateFilter: Date
      championFilter: String
    ): [Champion]
  }

  type Mutation {
    createChampion(input: CreateChampionInput!): Champion!
  }

  type Champion {
    titleHolder: String!
    dateWon: Date!
    dateLost: Date
    show: String!
    previousChampion: String
    currentChampion: Boolean!
  }

  input CreateChampionInput {
    champion: String!
    dateWon: String
    show: String!
  }
`
