export const employeeFragment = /* GraphQL */ `
	fragment EmployeeFragment on Employee {
		id
		firstName
		lastName
		email
		department {
			id
			name
		}
		office {
			id
			name
			location
		}
	}
`

export const departmentFragment = /* GraphQL */ `
	fragment DepartmentFragment on Department {
		id
		name
		lead {
			id
			firstName
			lastName
		}
	}
`

export const officeFragment = /* GraphQL */ `
	fragment OfficeFragment on Office {
		id
		name
		location
	}
`
