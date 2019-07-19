import path from 'path'
/* Load env vars before importing the generated client */
require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env.development'),
})

import { ApolloServer } from 'apollo-server'
import { prisma } from './generated/prisma-client'
import { schema } from './schema'

const server = new ApolloServer({
  // typeDefs,
  // resolvers,
  schema,
  // mocks: true,
})

server.listen().then(({ url }) => {
  // @tslint-ignore
  console.log(`Server ready at ${url}`)
})
