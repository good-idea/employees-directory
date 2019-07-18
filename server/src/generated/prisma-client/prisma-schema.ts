// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `
	type AggregateDepartment {
		count: Int!
	}

	type AggregateEmployee {
		count: Int!
	}

	type AggregateOffice {
		count: Int!
	}

	type BatchPayload {
		count: Long!
	}

	type Department {
		id: ID!
		name: String!
		lead: Employee
		employees(
			where: EmployeeWhereInput
			orderBy: EmployeeOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): [Employee!]
	}

	type DepartmentConnection {
		pageInfo: PageInfo!
		edges: [DepartmentEdge]!
		aggregate: AggregateDepartment!
	}

	input DepartmentCreateInput {
		id: ID
		name: String!
		lead: EmployeeCreateOneWithoutLeadsInput
		employees: EmployeeCreateManyWithoutDepartmentInput
	}

	input DepartmentCreateOneWithoutEmployeesInput {
		create: DepartmentCreateWithoutEmployeesInput
		connect: DepartmentWhereUniqueInput
	}

	input DepartmentCreateOneWithoutLeadInput {
		create: DepartmentCreateWithoutLeadInput
		connect: DepartmentWhereUniqueInput
	}

	input DepartmentCreateWithoutEmployeesInput {
		id: ID
		name: String!
		lead: EmployeeCreateOneWithoutLeadsInput
	}

	input DepartmentCreateWithoutLeadInput {
		id: ID
		name: String!
		employees: EmployeeCreateManyWithoutDepartmentInput
	}

	type DepartmentEdge {
		node: Department!
		cursor: String!
	}

	enum DepartmentOrderByInput {
		id_ASC
		id_DESC
		name_ASC
		name_DESC
	}

	type DepartmentPreviousValues {
		id: ID!
		name: String!
	}

	type DepartmentSubscriptionPayload {
		mutation: MutationType!
		node: Department
		updatedFields: [String!]
		previousValues: DepartmentPreviousValues
	}

	input DepartmentSubscriptionWhereInput {
		mutation_in: [MutationType!]
		updatedFields_contains: String
		updatedFields_contains_every: [String!]
		updatedFields_contains_some: [String!]
		node: DepartmentWhereInput
		AND: [DepartmentSubscriptionWhereInput!]
		OR: [DepartmentSubscriptionWhereInput!]
		NOT: [DepartmentSubscriptionWhereInput!]
	}

	input DepartmentUpdateInput {
		name: String
		lead: EmployeeUpdateOneWithoutLeadsInput
		employees: EmployeeUpdateManyWithoutDepartmentInput
	}

	input DepartmentUpdateManyMutationInput {
		name: String
	}

	input DepartmentUpdateOneWithoutEmployeesInput {
		create: DepartmentCreateWithoutEmployeesInput
		update: DepartmentUpdateWithoutEmployeesDataInput
		upsert: DepartmentUpsertWithoutEmployeesInput
		delete: Boolean
		disconnect: Boolean
		connect: DepartmentWhereUniqueInput
	}

	input DepartmentUpdateOneWithoutLeadInput {
		create: DepartmentCreateWithoutLeadInput
		update: DepartmentUpdateWithoutLeadDataInput
		upsert: DepartmentUpsertWithoutLeadInput
		delete: Boolean
		disconnect: Boolean
		connect: DepartmentWhereUniqueInput
	}

	input DepartmentUpdateWithoutEmployeesDataInput {
		name: String
		lead: EmployeeUpdateOneWithoutLeadsInput
	}

	input DepartmentUpdateWithoutLeadDataInput {
		name: String
		employees: EmployeeUpdateManyWithoutDepartmentInput
	}

	input DepartmentUpsertWithoutEmployeesInput {
		update: DepartmentUpdateWithoutEmployeesDataInput!
		create: DepartmentCreateWithoutEmployeesInput!
	}

	input DepartmentUpsertWithoutLeadInput {
		update: DepartmentUpdateWithoutLeadDataInput!
		create: DepartmentCreateWithoutLeadInput!
	}

	input DepartmentWhereInput {
		id: ID
		id_not: ID
		id_in: [ID!]
		id_not_in: [ID!]
		id_lt: ID
		id_lte: ID
		id_gt: ID
		id_gte: ID
		id_contains: ID
		id_not_contains: ID
		id_starts_with: ID
		id_not_starts_with: ID
		id_ends_with: ID
		id_not_ends_with: ID
		name: String
		name_not: String
		name_in: [String!]
		name_not_in: [String!]
		name_lt: String
		name_lte: String
		name_gt: String
		name_gte: String
		name_contains: String
		name_not_contains: String
		name_starts_with: String
		name_not_starts_with: String
		name_ends_with: String
		name_not_ends_with: String
		lead: EmployeeWhereInput
		employees_every: EmployeeWhereInput
		employees_some: EmployeeWhereInput
		employees_none: EmployeeWhereInput
		AND: [DepartmentWhereInput!]
		OR: [DepartmentWhereInput!]
		NOT: [DepartmentWhereInput!]
	}

	input DepartmentWhereUniqueInput {
		id: ID
		name: String
	}

	type Employee {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		department: Department
		office: Office
		leads: Department
	}

	type EmployeeConnection {
		pageInfo: PageInfo!
		edges: [EmployeeEdge]!
		aggregate: AggregateEmployee!
	}

	input EmployeeCreateInput {
		id: ID
		firstName: String!
		lastName: String!
		email: String!
		department: DepartmentCreateOneWithoutEmployeesInput
		office: OfficeCreateOneWithoutEmployeesInput
		leads: DepartmentCreateOneWithoutLeadInput
	}

	input EmployeeCreateManyWithoutDepartmentInput {
		create: [EmployeeCreateWithoutDepartmentInput!]
		connect: [EmployeeWhereUniqueInput!]
	}

	input EmployeeCreateManyWithoutOfficeInput {
		create: [EmployeeCreateWithoutOfficeInput!]
		connect: [EmployeeWhereUniqueInput!]
	}

	input EmployeeCreateOneWithoutLeadsInput {
		create: EmployeeCreateWithoutLeadsInput
		connect: EmployeeWhereUniqueInput
	}

	input EmployeeCreateWithoutDepartmentInput {
		id: ID
		firstName: String!
		lastName: String!
		email: String!
		office: OfficeCreateOneWithoutEmployeesInput
		leads: DepartmentCreateOneWithoutLeadInput
	}

	input EmployeeCreateWithoutLeadsInput {
		id: ID
		firstName: String!
		lastName: String!
		email: String!
		department: DepartmentCreateOneWithoutEmployeesInput
		office: OfficeCreateOneWithoutEmployeesInput
	}

	input EmployeeCreateWithoutOfficeInput {
		id: ID
		firstName: String!
		lastName: String!
		email: String!
		department: DepartmentCreateOneWithoutEmployeesInput
		leads: DepartmentCreateOneWithoutLeadInput
	}

	type EmployeeEdge {
		node: Employee!
		cursor: String!
	}

	enum EmployeeOrderByInput {
		id_ASC
		id_DESC
		firstName_ASC
		firstName_DESC
		lastName_ASC
		lastName_DESC
		email_ASC
		email_DESC
	}

	type EmployeePreviousValues {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
	}

	input EmployeeScalarWhereInput {
		id: ID
		id_not: ID
		id_in: [ID!]
		id_not_in: [ID!]
		id_lt: ID
		id_lte: ID
		id_gt: ID
		id_gte: ID
		id_contains: ID
		id_not_contains: ID
		id_starts_with: ID
		id_not_starts_with: ID
		id_ends_with: ID
		id_not_ends_with: ID
		firstName: String
		firstName_not: String
		firstName_in: [String!]
		firstName_not_in: [String!]
		firstName_lt: String
		firstName_lte: String
		firstName_gt: String
		firstName_gte: String
		firstName_contains: String
		firstName_not_contains: String
		firstName_starts_with: String
		firstName_not_starts_with: String
		firstName_ends_with: String
		firstName_not_ends_with: String
		lastName: String
		lastName_not: String
		lastName_in: [String!]
		lastName_not_in: [String!]
		lastName_lt: String
		lastName_lte: String
		lastName_gt: String
		lastName_gte: String
		lastName_contains: String
		lastName_not_contains: String
		lastName_starts_with: String
		lastName_not_starts_with: String
		lastName_ends_with: String
		lastName_not_ends_with: String
		email: String
		email_not: String
		email_in: [String!]
		email_not_in: [String!]
		email_lt: String
		email_lte: String
		email_gt: String
		email_gte: String
		email_contains: String
		email_not_contains: String
		email_starts_with: String
		email_not_starts_with: String
		email_ends_with: String
		email_not_ends_with: String
		AND: [EmployeeScalarWhereInput!]
		OR: [EmployeeScalarWhereInput!]
		NOT: [EmployeeScalarWhereInput!]
	}

	type EmployeeSubscriptionPayload {
		mutation: MutationType!
		node: Employee
		updatedFields: [String!]
		previousValues: EmployeePreviousValues
	}

	input EmployeeSubscriptionWhereInput {
		mutation_in: [MutationType!]
		updatedFields_contains: String
		updatedFields_contains_every: [String!]
		updatedFields_contains_some: [String!]
		node: EmployeeWhereInput
		AND: [EmployeeSubscriptionWhereInput!]
		OR: [EmployeeSubscriptionWhereInput!]
		NOT: [EmployeeSubscriptionWhereInput!]
	}

	input EmployeeUpdateInput {
		firstName: String
		lastName: String
		email: String
		department: DepartmentUpdateOneWithoutEmployeesInput
		office: OfficeUpdateOneWithoutEmployeesInput
		leads: DepartmentUpdateOneWithoutLeadInput
	}

	input EmployeeUpdateManyDataInput {
		firstName: String
		lastName: String
		email: String
	}

	input EmployeeUpdateManyMutationInput {
		firstName: String
		lastName: String
		email: String
	}

	input EmployeeUpdateManyWithoutDepartmentInput {
		create: [EmployeeCreateWithoutDepartmentInput!]
		delete: [EmployeeWhereUniqueInput!]
		connect: [EmployeeWhereUniqueInput!]
		set: [EmployeeWhereUniqueInput!]
		disconnect: [EmployeeWhereUniqueInput!]
		update: [EmployeeUpdateWithWhereUniqueWithoutDepartmentInput!]
		upsert: [EmployeeUpsertWithWhereUniqueWithoutDepartmentInput!]
		deleteMany: [EmployeeScalarWhereInput!]
		updateMany: [EmployeeUpdateManyWithWhereNestedInput!]
	}

	input EmployeeUpdateManyWithoutOfficeInput {
		create: [EmployeeCreateWithoutOfficeInput!]
		delete: [EmployeeWhereUniqueInput!]
		connect: [EmployeeWhereUniqueInput!]
		set: [EmployeeWhereUniqueInput!]
		disconnect: [EmployeeWhereUniqueInput!]
		update: [EmployeeUpdateWithWhereUniqueWithoutOfficeInput!]
		upsert: [EmployeeUpsertWithWhereUniqueWithoutOfficeInput!]
		deleteMany: [EmployeeScalarWhereInput!]
		updateMany: [EmployeeUpdateManyWithWhereNestedInput!]
	}

	input EmployeeUpdateManyWithWhereNestedInput {
		where: EmployeeScalarWhereInput!
		data: EmployeeUpdateManyDataInput!
	}

	input EmployeeUpdateOneWithoutLeadsInput {
		create: EmployeeCreateWithoutLeadsInput
		update: EmployeeUpdateWithoutLeadsDataInput
		upsert: EmployeeUpsertWithoutLeadsInput
		delete: Boolean
		disconnect: Boolean
		connect: EmployeeWhereUniqueInput
	}

	input EmployeeUpdateWithoutDepartmentDataInput {
		firstName: String
		lastName: String
		email: String
		office: OfficeUpdateOneWithoutEmployeesInput
		leads: DepartmentUpdateOneWithoutLeadInput
	}

	input EmployeeUpdateWithoutLeadsDataInput {
		firstName: String
		lastName: String
		email: String
		department: DepartmentUpdateOneWithoutEmployeesInput
		office: OfficeUpdateOneWithoutEmployeesInput
	}

	input EmployeeUpdateWithoutOfficeDataInput {
		firstName: String
		lastName: String
		email: String
		department: DepartmentUpdateOneWithoutEmployeesInput
		leads: DepartmentUpdateOneWithoutLeadInput
	}

	input EmployeeUpdateWithWhereUniqueWithoutDepartmentInput {
		where: EmployeeWhereUniqueInput!
		data: EmployeeUpdateWithoutDepartmentDataInput!
	}

	input EmployeeUpdateWithWhereUniqueWithoutOfficeInput {
		where: EmployeeWhereUniqueInput!
		data: EmployeeUpdateWithoutOfficeDataInput!
	}

	input EmployeeUpsertWithoutLeadsInput {
		update: EmployeeUpdateWithoutLeadsDataInput!
		create: EmployeeCreateWithoutLeadsInput!
	}

	input EmployeeUpsertWithWhereUniqueWithoutDepartmentInput {
		where: EmployeeWhereUniqueInput!
		update: EmployeeUpdateWithoutDepartmentDataInput!
		create: EmployeeCreateWithoutDepartmentInput!
	}

	input EmployeeUpsertWithWhereUniqueWithoutOfficeInput {
		where: EmployeeWhereUniqueInput!
		update: EmployeeUpdateWithoutOfficeDataInput!
		create: EmployeeCreateWithoutOfficeInput!
	}

	input EmployeeWhereInput {
		id: ID
		id_not: ID
		id_in: [ID!]
		id_not_in: [ID!]
		id_lt: ID
		id_lte: ID
		id_gt: ID
		id_gte: ID
		id_contains: ID
		id_not_contains: ID
		id_starts_with: ID
		id_not_starts_with: ID
		id_ends_with: ID
		id_not_ends_with: ID
		firstName: String
		firstName_not: String
		firstName_in: [String!]
		firstName_not_in: [String!]
		firstName_lt: String
		firstName_lte: String
		firstName_gt: String
		firstName_gte: String
		firstName_contains: String
		firstName_not_contains: String
		firstName_starts_with: String
		firstName_not_starts_with: String
		firstName_ends_with: String
		firstName_not_ends_with: String
		lastName: String
		lastName_not: String
		lastName_in: [String!]
		lastName_not_in: [String!]
		lastName_lt: String
		lastName_lte: String
		lastName_gt: String
		lastName_gte: String
		lastName_contains: String
		lastName_not_contains: String
		lastName_starts_with: String
		lastName_not_starts_with: String
		lastName_ends_with: String
		lastName_not_ends_with: String
		email: String
		email_not: String
		email_in: [String!]
		email_not_in: [String!]
		email_lt: String
		email_lte: String
		email_gt: String
		email_gte: String
		email_contains: String
		email_not_contains: String
		email_starts_with: String
		email_not_starts_with: String
		email_ends_with: String
		email_not_ends_with: String
		department: DepartmentWhereInput
		office: OfficeWhereInput
		leads: DepartmentWhereInput
		AND: [EmployeeWhereInput!]
		OR: [EmployeeWhereInput!]
		NOT: [EmployeeWhereInput!]
	}

	input EmployeeWhereUniqueInput {
		id: ID
		email: String
	}

	scalar Long

	type Mutation {
		createDepartment(data: DepartmentCreateInput!): Department!
		updateDepartment(
			data: DepartmentUpdateInput!
			where: DepartmentWhereUniqueInput!
		): Department
		updateManyDepartments(
			data: DepartmentUpdateManyMutationInput!
			where: DepartmentWhereInput
		): BatchPayload!
		upsertDepartment(
			where: DepartmentWhereUniqueInput!
			create: DepartmentCreateInput!
			update: DepartmentUpdateInput!
		): Department!
		deleteDepartment(where: DepartmentWhereUniqueInput!): Department
		deleteManyDepartments(where: DepartmentWhereInput): BatchPayload!
		createEmployee(data: EmployeeCreateInput!): Employee!
		updateEmployee(
			data: EmployeeUpdateInput!
			where: EmployeeWhereUniqueInput!
		): Employee
		updateManyEmployees(
			data: EmployeeUpdateManyMutationInput!
			where: EmployeeWhereInput
		): BatchPayload!
		upsertEmployee(
			where: EmployeeWhereUniqueInput!
			create: EmployeeCreateInput!
			update: EmployeeUpdateInput!
		): Employee!
		deleteEmployee(where: EmployeeWhereUniqueInput!): Employee
		deleteManyEmployees(where: EmployeeWhereInput): BatchPayload!
		createOffice(data: OfficeCreateInput!): Office!
		updateOffice(
			data: OfficeUpdateInput!
			where: OfficeWhereUniqueInput!
		): Office
		updateManyOffices(
			data: OfficeUpdateManyMutationInput!
			where: OfficeWhereInput
		): BatchPayload!
		upsertOffice(
			where: OfficeWhereUniqueInput!
			create: OfficeCreateInput!
			update: OfficeUpdateInput!
		): Office!
		deleteOffice(where: OfficeWhereUniqueInput!): Office
		deleteManyOffices(where: OfficeWhereInput): BatchPayload!
	}

	enum MutationType {
		CREATED
		UPDATED
		DELETED
	}

	interface Node {
		id: ID!
	}

	type Office {
		id: ID!
		name: String!
		location: String!
		employees(
			where: EmployeeWhereInput
			orderBy: EmployeeOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): [Employee!]
	}

	type OfficeConnection {
		pageInfo: PageInfo!
		edges: [OfficeEdge]!
		aggregate: AggregateOffice!
	}

	input OfficeCreateInput {
		id: ID
		name: String!
		location: String!
		employees: EmployeeCreateManyWithoutOfficeInput
	}

	input OfficeCreateOneWithoutEmployeesInput {
		create: OfficeCreateWithoutEmployeesInput
		connect: OfficeWhereUniqueInput
	}

	input OfficeCreateWithoutEmployeesInput {
		id: ID
		name: String!
		location: String!
	}

	type OfficeEdge {
		node: Office!
		cursor: String!
	}

	enum OfficeOrderByInput {
		id_ASC
		id_DESC
		name_ASC
		name_DESC
		location_ASC
		location_DESC
	}

	type OfficePreviousValues {
		id: ID!
		name: String!
		location: String!
	}

	type OfficeSubscriptionPayload {
		mutation: MutationType!
		node: Office
		updatedFields: [String!]
		previousValues: OfficePreviousValues
	}

	input OfficeSubscriptionWhereInput {
		mutation_in: [MutationType!]
		updatedFields_contains: String
		updatedFields_contains_every: [String!]
		updatedFields_contains_some: [String!]
		node: OfficeWhereInput
		AND: [OfficeSubscriptionWhereInput!]
		OR: [OfficeSubscriptionWhereInput!]
		NOT: [OfficeSubscriptionWhereInput!]
	}

	input OfficeUpdateInput {
		name: String
		location: String
		employees: EmployeeUpdateManyWithoutOfficeInput
	}

	input OfficeUpdateManyMutationInput {
		name: String
		location: String
	}

	input OfficeUpdateOneWithoutEmployeesInput {
		create: OfficeCreateWithoutEmployeesInput
		update: OfficeUpdateWithoutEmployeesDataInput
		upsert: OfficeUpsertWithoutEmployeesInput
		delete: Boolean
		disconnect: Boolean
		connect: OfficeWhereUniqueInput
	}

	input OfficeUpdateWithoutEmployeesDataInput {
		name: String
		location: String
	}

	input OfficeUpsertWithoutEmployeesInput {
		update: OfficeUpdateWithoutEmployeesDataInput!
		create: OfficeCreateWithoutEmployeesInput!
	}

	input OfficeWhereInput {
		id: ID
		id_not: ID
		id_in: [ID!]
		id_not_in: [ID!]
		id_lt: ID
		id_lte: ID
		id_gt: ID
		id_gte: ID
		id_contains: ID
		id_not_contains: ID
		id_starts_with: ID
		id_not_starts_with: ID
		id_ends_with: ID
		id_not_ends_with: ID
		name: String
		name_not: String
		name_in: [String!]
		name_not_in: [String!]
		name_lt: String
		name_lte: String
		name_gt: String
		name_gte: String
		name_contains: String
		name_not_contains: String
		name_starts_with: String
		name_not_starts_with: String
		name_ends_with: String
		name_not_ends_with: String
		location: String
		location_not: String
		location_in: [String!]
		location_not_in: [String!]
		location_lt: String
		location_lte: String
		location_gt: String
		location_gte: String
		location_contains: String
		location_not_contains: String
		location_starts_with: String
		location_not_starts_with: String
		location_ends_with: String
		location_not_ends_with: String
		employees_every: EmployeeWhereInput
		employees_some: EmployeeWhereInput
		employees_none: EmployeeWhereInput
		AND: [OfficeWhereInput!]
		OR: [OfficeWhereInput!]
		NOT: [OfficeWhereInput!]
	}

	input OfficeWhereUniqueInput {
		id: ID
		name: String
	}

	type PageInfo {
		hasNextPage: Boolean!
		hasPreviousPage: Boolean!
		startCursor: String
		endCursor: String
	}

	type Query {
		department(where: DepartmentWhereUniqueInput!): Department
		departments(
			where: DepartmentWhereInput
			orderBy: DepartmentOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): [Department]!
		departmentsConnection(
			where: DepartmentWhereInput
			orderBy: DepartmentOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): DepartmentConnection!
		employee(where: EmployeeWhereUniqueInput!): Employee
		employees(
			where: EmployeeWhereInput
			orderBy: EmployeeOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): [Employee]!
		employeesConnection(
			where: EmployeeWhereInput
			orderBy: EmployeeOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): EmployeeConnection!
		office(where: OfficeWhereUniqueInput!): Office
		offices(
			where: OfficeWhereInput
			orderBy: OfficeOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): [Office]!
		officesConnection(
			where: OfficeWhereInput
			orderBy: OfficeOrderByInput
			skip: Int
			after: String
			before: String
			first: Int
			last: Int
		): OfficeConnection!
		node(id: ID!): Node
	}

	type Subscription {
		department(
			where: DepartmentSubscriptionWhereInput
		): DepartmentSubscriptionPayload
		employee(where: EmployeeSubscriptionWhereInput): EmployeeSubscriptionPayload
		office(where: OfficeSubscriptionWhereInput): OfficeSubscriptionPayload
	}
`
