import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'

import PrismaModule from '@prisma/client'

const parseDatabaseConnString = (dbName) => {
  const database = dbName ?? process.env.POSTGRES_DB
  return `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${database}?schema=public`
}

const createApolloServer = async ({
  database = undefined,
  introspection = true,
  playground = false,
} = {}) => {
  const { PrismaClient } = PrismaModule
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: parseDatabaseConnString(database),
      },
    },
  })

  const app = express()
  app.use(cors())

  app.use(express.json())
  app.use(express.urlencoded({ limit: `25mb`, extended: false }))

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground,
    introspection,
    context: prisma,
  })
  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    path: '/api',
  })

  return { apolloServer, app, prismaClient: prisma }
}

export default createApolloServer
