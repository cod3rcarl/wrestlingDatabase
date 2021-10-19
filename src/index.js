import dotenv from 'dotenv'
import createApolloServer from './apollo-server.js'

dotenv.config()

const playground = process.env.NODE_ENV === `development`
const { app, prismaClient } = await createApolloServer({ playground })

const port = process.env.PORT || 8080

app.listen({ port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/api`)
})

prismaClient.$disconnect()
