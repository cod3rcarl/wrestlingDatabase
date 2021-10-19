import { createServer } from 'http'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'

import PrismaModule from '@prisma/client'

const parseDatabaseConnString = (dbName) => {
  const database = dbName ?? process.env.POSTGRES_DB
  return `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${database}?schema=public`
}

const createApolloServer = async ({ database = undefined } = {}) => {
  const { PrismaClient } = PrismaModule
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: parseDatabaseConnString(database),
      },
    },
  })

  const app = express()
  const httpServer = createServer(app)

  app.use(express.json())
  app.use(express.urlencoded({ limit: `25mb`, extended: false }))

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: prisma,
  })
  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    path: '/api',
  })

  const port = 4000

  httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/api`)
  })

  prisma.$disconnect()

  return { apolloServer, httpServer, prisma }
}

createApolloServer()
