import { createServer } from 'http'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { wweChampions } from './champions'

const app = express()
const httpServer = createServer(app)

const startServer = async () => {
  const typeDefs = gql`
    type Champion {
      champion: String!
      dateWon: String
      dateLost: String
      Show: String!
      previousChampion: String
    }

    type Query {
      champions: [Champion]
    }
  `

  const resolvers = {
    Query: {
      champions: () => wweChampions,
    },
  }

  const server = new ApolloServer({ typeDefs, resolvers })
  const port = process.env.PORT || 4000

  await server.start()

  server.applyMiddleware({
    app,
    path: '/api',
  })

  httpServer.listen({ port }, () =>
    console.log(`Server listening on localhost:${port}${server.graphqlPath}`)
  )
}

startServer()
