import { departmentFragment } from './fragments'
import { Department, DepartmentConnection } from 'Types/generated'

/* Create */

export const createDepartment = /* GraphQL */ `
	mutation CreateDepartment($data: DepartmentCreateInput!) {
		createDepartment(data: $data) {
			...DepartmentFragment
		}
	}

	${departmentFragment}
`

export interface CreateDepartmentResponse {
	createDepartment: Department
}

/* Read */

export const departmentsQuery = /* GraphQL */ `
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

/* Update */

// TODO

/* Delete */

export const deleteDepartmentMutation = /* GraphQL */ `
	mutation DeleteDepartment($id: ID!) {
		deleteDepartment(where: { id: $id }) {
			...DepartmentFragment
		}
	}
	${departmentFragment}
`
