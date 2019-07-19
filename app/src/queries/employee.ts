import { employeeFragment } from './fragments'
import { Employee, EmployeeConnection } from 'Types/generated'

/* Create */

export const createEmployee = /* GraphQL */ `
	mutation CreateEmployee($data: EmployeeCreateInput!) {
		createEmployee(data: $data) {
			...EmployeeFragment
		}
	}

	${employeeFragment}
`

export interface CreateEmployeeResponse {
	createEmployee: Employee
}

/* Read */

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

/* Update */

// TODO

/* Delete */

export const deleteEmployeeMutation = /* GraphQL */ `
	mutation DeleteEmployee($id: ID!) {
		deleteEmployee(where: { id: $id }) {
			...EmployeeFragment
		}
	}
	${employeeFragment}
`
