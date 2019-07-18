import { departmentFragment, officeFragment } from 'Queries'
import { DepartmentConnection, OfficeConnection } from 'Types'

export const employeeFormQuery = /* GraphQL */ `
	query EmployeeFormQuery {
		departmentsConnection {
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
		officesConnection {
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

	${departmentFragment}
	${officeFragment}
`

export interface EmployeeFormQueryResponse {
	departmentsConnection: DepartmentConnection
	officesConnection: OfficeConnection
}
