import { employeeFragment } from './fragments'
import { Employee } from 'Types/generated'

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
