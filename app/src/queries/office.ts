import { officeFragment } from './fragments'
import { Office, OfficeConnection } from '../types/generated'

/* Create */

export const createOffice = /* GraphQL */ `
  mutation CreateOffice($data: OfficeCreateInput!) {
    createOffice(data: $data) {
      ...OfficeFragment
    }
  }

  ${officeFragment}
`

export interface CreateOfficeResponse {
  createOffice: Office
}

/* Read */

export const officesQuery = /* GraphQL */ `
  query OfficesQuery(
    $where: OfficeWhereInput
    $orderBy: OfficeOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    officesConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...OfficeFragment
        }
      }
    }
  }
  ${officeFragment}
`

export interface OfficesQueryResponse {
  officesConnection: OfficeConnection
}

/* Update */

// TODO

/* Delete */

export const deleteOfficeMutation = /* GraphQL */ `
  mutation DeleteOfficeMutation($where: OfficeWhereUniqueInput!) {
    deleteOffice(where: $where) {
      ...OfficeFragment
    }
  }
  ${officeFragment}
`
