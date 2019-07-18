import { employeeFragment } from 'Queries'
import { EmployeeConnection } from 'Types/generated'

export const employeesQuery = /* GraphQL */ `
	query EmployeesQuery(
		$where: EmployeeWhereInput
		$orderBy: EmployeeOrderByInput
		$skip: Int
		$after: String
		$before: String
		$first: Int
		$last: Int
	) {
		employeesConnection(
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
					...EmployeeFragment
				}
			}
		}
	}
	${employeeFragment}
`

export interface EmployeesQueryResponse {
	employeesConnection: EmployeeConnection
}
