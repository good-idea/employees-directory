import { departmentFragment } from 'Queries'
import { DepartmentConnection } from 'Types/generated'

export const DepartmentsQuery = /* GraphQL */ `
	query DepartmentsQuery(
		$where: DepartmentWhereInput
		$orderBy: DepartmentOrderByInput
		$skip: Int
		$after: String
		$before: String
		$first: Int
		$last: Int
	) {
		departmentsConnection(
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
					...DepartmentFragment
				}
			}
		}
	}
	${departmentFragment}
`

export interface DepartmentsQueryResponse {
	departmentsConnection: DepartmentConnection
}
