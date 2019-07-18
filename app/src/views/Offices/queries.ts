import { officeFragment } from 'Queries'
import { OfficeConnection } from 'Types/generated'

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
