import { stringArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

// @ts-ignore - related issue: https://github.com/prisma/nexus-prisma/issues/291
export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*'])
  },
})
