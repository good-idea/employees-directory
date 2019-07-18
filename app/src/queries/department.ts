import { departmentFragment } from './fragments'
import { Department } from 'Types/generated'

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
