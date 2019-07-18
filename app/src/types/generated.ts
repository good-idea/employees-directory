export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	Long: any
	DateTime: Date
	JSON: { [key: string]: any }
}

export interface AggregateDepartment {
	__typename: 'AggregateDepartment'
	count: Scalars['Int']
}

export interface AggregateEmployee {
	__typename: 'AggregateEmployee'
	count: Scalars['Int']
}

export interface AggregateOffice {
	__typename: 'AggregateOffice'
	count: Scalars['Int']
}

export interface BatchPayload {
	__typename: 'BatchPayload'
	count: Scalars['Long']
}

export interface Department {
	__typename: 'Department'
	id: Scalars['ID']
	name: Scalars['String']
	lead?: Maybe<Employee>
	employees?: Maybe<Array<Employee>>
}

export type DepartmentEmployeesArgs = {
	where?: Maybe<EmployeeWhereInput>
	orderBy?: Maybe<EmployeeOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}

export interface DepartmentConnection {
	__typename: 'DepartmentConnection'
	pageInfo: PageInfo
	edges: Array<DepartmentEdge>
	aggregate: AggregateDepartment
}

export type DepartmentCreateInput = {
	id?: Maybe<Scalars['ID']>
	name: Scalars['String']
	lead?: Maybe<EmployeeCreateOneWithoutLeadsInput>
	employees?: Maybe<EmployeeCreateManyWithoutDepartmentInput>
}

export type DepartmentCreateOneWithoutEmployeesInput = {
	create?: Maybe<DepartmentCreateWithoutEmployeesInput>
	connect?: Maybe<DepartmentWhereUniqueInput>
}

export type DepartmentCreateOneWithoutLeadInput = {
	create?: Maybe<DepartmentCreateWithoutLeadInput>
	connect?: Maybe<DepartmentWhereUniqueInput>
}

export type DepartmentCreateWithoutEmployeesInput = {
	id?: Maybe<Scalars['ID']>
	name: Scalars['String']
	lead?: Maybe<EmployeeCreateOneWithoutLeadsInput>
}

export type DepartmentCreateWithoutLeadInput = {
	id?: Maybe<Scalars['ID']>
	name: Scalars['String']
	employees?: Maybe<EmployeeCreateManyWithoutDepartmentInput>
}

export interface DepartmentEdge {
	__typename: 'DepartmentEdge'
	node: Department
	cursor: Scalars['String']
}

export enum DepartmentOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type DepartmentUpdateInput = {
	name?: Maybe<Scalars['String']>
	lead?: Maybe<EmployeeUpdateOneWithoutLeadsInput>
	employees?: Maybe<EmployeeUpdateManyWithoutDepartmentInput>
}

export type DepartmentUpdateManyMutationInput = {
	name?: Maybe<Scalars['String']>
}

export type DepartmentUpdateOneWithoutEmployeesInput = {
	create?: Maybe<DepartmentCreateWithoutEmployeesInput>
	update?: Maybe<DepartmentUpdateWithoutEmployeesDataInput>
	upsert?: Maybe<DepartmentUpsertWithoutEmployeesInput>
	delete?: Maybe<Scalars['Boolean']>
	disconnect?: Maybe<Scalars['Boolean']>
	connect?: Maybe<DepartmentWhereUniqueInput>
}

export type DepartmentUpdateOneWithoutLeadInput = {
	create?: Maybe<DepartmentCreateWithoutLeadInput>
	update?: Maybe<DepartmentUpdateWithoutLeadDataInput>
	upsert?: Maybe<DepartmentUpsertWithoutLeadInput>
	delete?: Maybe<Scalars['Boolean']>
	disconnect?: Maybe<Scalars['Boolean']>
	connect?: Maybe<DepartmentWhereUniqueInput>
}

export type DepartmentUpdateWithoutEmployeesDataInput = {
	name?: Maybe<Scalars['String']>
	lead?: Maybe<EmployeeUpdateOneWithoutLeadsInput>
}

export type DepartmentUpdateWithoutLeadDataInput = {
	name?: Maybe<Scalars['String']>
	employees?: Maybe<EmployeeUpdateManyWithoutDepartmentInput>
}

export type DepartmentUpsertWithoutEmployeesInput = {
	update: DepartmentUpdateWithoutEmployeesDataInput
	create: DepartmentCreateWithoutEmployeesInput
}

export type DepartmentUpsertWithoutLeadInput = {
	update: DepartmentUpdateWithoutLeadDataInput
	create: DepartmentCreateWithoutLeadInput
}

export type DepartmentWhereInput = {
	id?: Maybe<Scalars['ID']>
	id_not?: Maybe<Scalars['ID']>
	id_in?: Maybe<Array<Scalars['ID']>>
	id_not_in?: Maybe<Array<Scalars['ID']>>
	id_lt?: Maybe<Scalars['ID']>
	id_lte?: Maybe<Scalars['ID']>
	id_gt?: Maybe<Scalars['ID']>
	id_gte?: Maybe<Scalars['ID']>
	id_contains?: Maybe<Scalars['ID']>
	id_not_contains?: Maybe<Scalars['ID']>
	id_starts_with?: Maybe<Scalars['ID']>
	id_not_starts_with?: Maybe<Scalars['ID']>
	id_ends_with?: Maybe<Scalars['ID']>
	id_not_ends_with?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	name_not?: Maybe<Scalars['String']>
	name_in?: Maybe<Array<Scalars['String']>>
	name_not_in?: Maybe<Array<Scalars['String']>>
	name_lt?: Maybe<Scalars['String']>
	name_lte?: Maybe<Scalars['String']>
	name_gt?: Maybe<Scalars['String']>
	name_gte?: Maybe<Scalars['String']>
	name_contains?: Maybe<Scalars['String']>
	name_not_contains?: Maybe<Scalars['String']>
	name_starts_with?: Maybe<Scalars['String']>
	name_not_starts_with?: Maybe<Scalars['String']>
	name_ends_with?: Maybe<Scalars['String']>
	name_not_ends_with?: Maybe<Scalars['String']>
	lead?: Maybe<EmployeeWhereInput>
	employees_every?: Maybe<EmployeeWhereInput>
	employees_some?: Maybe<EmployeeWhereInput>
	employees_none?: Maybe<EmployeeWhereInput>
	AND?: Maybe<Array<DepartmentWhereInput>>
	OR?: Maybe<Array<DepartmentWhereInput>>
	NOT?: Maybe<Array<DepartmentWhereInput>>
}

export type DepartmentWhereUniqueInput = {
	id?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
}

export interface Employee {
	__typename: 'Employee'
	id: Scalars['ID']
	firstName: Scalars['String']
	lastName: Scalars['String']
	email: Scalars['String']
	department?: Maybe<Department>
	office?: Maybe<Office>
	leads?: Maybe<Department>
}

export interface EmployeeConnection {
	__typename: 'EmployeeConnection'
	pageInfo: PageInfo
	edges: Array<EmployeeEdge>
	aggregate: AggregateEmployee
}

export type EmployeeCreateInput = {
	id?: Maybe<Scalars['ID']>
	firstName: Scalars['String']
	lastName: Scalars['String']
	email: Scalars['String']
	department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
	office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
	leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export type EmployeeCreateManyWithoutDepartmentInput = {
	create?: Maybe<Array<EmployeeCreateWithoutDepartmentInput>>
	connect?: Maybe<Array<EmployeeWhereUniqueInput>>
}

export type EmployeeCreateManyWithoutOfficeInput = {
	create?: Maybe<Array<EmployeeCreateWithoutOfficeInput>>
	connect?: Maybe<Array<EmployeeWhereUniqueInput>>
}

export type EmployeeCreateOneWithoutLeadsInput = {
	create?: Maybe<EmployeeCreateWithoutLeadsInput>
	connect?: Maybe<EmployeeWhereUniqueInput>
}

export type EmployeeCreateWithoutDepartmentInput = {
	id?: Maybe<Scalars['ID']>
	firstName: Scalars['String']
	lastName: Scalars['String']
	email: Scalars['String']
	office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
	leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export type EmployeeCreateWithoutLeadsInput = {
	id?: Maybe<Scalars['ID']>
	firstName: Scalars['String']
	lastName: Scalars['String']
	email: Scalars['String']
	department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
	office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
}

export type EmployeeCreateWithoutOfficeInput = {
	id?: Maybe<Scalars['ID']>
	firstName: Scalars['String']
	lastName: Scalars['String']
	email: Scalars['String']
	department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
	leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export interface EmployeeEdge {
	__typename: 'EmployeeEdge'
	node: Employee
	cursor: Scalars['String']
}

export enum EmployeeOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	FirstNameAsc = 'firstName_ASC',
	FirstNameDesc = 'firstName_DESC',
	LastNameAsc = 'lastName_ASC',
	LastNameDesc = 'lastName_DESC',
	EmailAsc = 'email_ASC',
	EmailDesc = 'email_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type EmployeeScalarWhereInput = {
	id?: Maybe<Scalars['ID']>
	id_not?: Maybe<Scalars['ID']>
	id_in?: Maybe<Array<Scalars['ID']>>
	id_not_in?: Maybe<Array<Scalars['ID']>>
	id_lt?: Maybe<Scalars['ID']>
	id_lte?: Maybe<Scalars['ID']>
	id_gt?: Maybe<Scalars['ID']>
	id_gte?: Maybe<Scalars['ID']>
	id_contains?: Maybe<Scalars['ID']>
	id_not_contains?: Maybe<Scalars['ID']>
	id_starts_with?: Maybe<Scalars['ID']>
	id_not_starts_with?: Maybe<Scalars['ID']>
	id_ends_with?: Maybe<Scalars['ID']>
	id_not_ends_with?: Maybe<Scalars['ID']>
	firstName?: Maybe<Scalars['String']>
	firstName_not?: Maybe<Scalars['String']>
	firstName_in?: Maybe<Array<Scalars['String']>>
	firstName_not_in?: Maybe<Array<Scalars['String']>>
	firstName_lt?: Maybe<Scalars['String']>
	firstName_lte?: Maybe<Scalars['String']>
	firstName_gt?: Maybe<Scalars['String']>
	firstName_gte?: Maybe<Scalars['String']>
	firstName_contains?: Maybe<Scalars['String']>
	firstName_not_contains?: Maybe<Scalars['String']>
	firstName_starts_with?: Maybe<Scalars['String']>
	firstName_not_starts_with?: Maybe<Scalars['String']>
	firstName_ends_with?: Maybe<Scalars['String']>
	firstName_not_ends_with?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	lastName_not?: Maybe<Scalars['String']>
	lastName_in?: Maybe<Array<Scalars['String']>>
	lastName_not_in?: Maybe<Array<Scalars['String']>>
	lastName_lt?: Maybe<Scalars['String']>
	lastName_lte?: Maybe<Scalars['String']>
	lastName_gt?: Maybe<Scalars['String']>
	lastName_gte?: Maybe<Scalars['String']>
	lastName_contains?: Maybe<Scalars['String']>
	lastName_not_contains?: Maybe<Scalars['String']>
	lastName_starts_with?: Maybe<Scalars['String']>
	lastName_not_starts_with?: Maybe<Scalars['String']>
	lastName_ends_with?: Maybe<Scalars['String']>
	lastName_not_ends_with?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	email_not?: Maybe<Scalars['String']>
	email_in?: Maybe<Array<Scalars['String']>>
	email_not_in?: Maybe<Array<Scalars['String']>>
	email_lt?: Maybe<Scalars['String']>
	email_lte?: Maybe<Scalars['String']>
	email_gt?: Maybe<Scalars['String']>
	email_gte?: Maybe<Scalars['String']>
	email_contains?: Maybe<Scalars['String']>
	email_not_contains?: Maybe<Scalars['String']>
	email_starts_with?: Maybe<Scalars['String']>
	email_not_starts_with?: Maybe<Scalars['String']>
	email_ends_with?: Maybe<Scalars['String']>
	email_not_ends_with?: Maybe<Scalars['String']>
	AND?: Maybe<Array<EmployeeScalarWhereInput>>
	OR?: Maybe<Array<EmployeeScalarWhereInput>>
	NOT?: Maybe<Array<EmployeeScalarWhereInput>>
}

export type EmployeeUpdateInput = {
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
	office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
	leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export type EmployeeUpdateManyDataInput = {
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
}

export type EmployeeUpdateManyMutationInput = {
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
}

export type EmployeeUpdateManyWithoutDepartmentInput = {
	create?: Maybe<Array<EmployeeCreateWithoutDepartmentInput>>
	delete?: Maybe<Array<EmployeeWhereUniqueInput>>
	connect?: Maybe<Array<EmployeeWhereUniqueInput>>
	set?: Maybe<Array<EmployeeWhereUniqueInput>>
	disconnect?: Maybe<Array<EmployeeWhereUniqueInput>>
	update?: Maybe<Array<EmployeeUpdateWithWhereUniqueWithoutDepartmentInput>>
	upsert?: Maybe<Array<EmployeeUpsertWithWhereUniqueWithoutDepartmentInput>>
	deleteMany?: Maybe<Array<EmployeeScalarWhereInput>>
	updateMany?: Maybe<Array<EmployeeUpdateManyWithWhereNestedInput>>
}

export type EmployeeUpdateManyWithoutOfficeInput = {
	create?: Maybe<Array<EmployeeCreateWithoutOfficeInput>>
	delete?: Maybe<Array<EmployeeWhereUniqueInput>>
	connect?: Maybe<Array<EmployeeWhereUniqueInput>>
	set?: Maybe<Array<EmployeeWhereUniqueInput>>
	disconnect?: Maybe<Array<EmployeeWhereUniqueInput>>
	update?: Maybe<Array<EmployeeUpdateWithWhereUniqueWithoutOfficeInput>>
	upsert?: Maybe<Array<EmployeeUpsertWithWhereUniqueWithoutOfficeInput>>
	deleteMany?: Maybe<Array<EmployeeScalarWhereInput>>
	updateMany?: Maybe<Array<EmployeeUpdateManyWithWhereNestedInput>>
}

export type EmployeeUpdateManyWithWhereNestedInput = {
	where: EmployeeScalarWhereInput
	data: EmployeeUpdateManyDataInput
}

export type EmployeeUpdateOneWithoutLeadsInput = {
	create?: Maybe<EmployeeCreateWithoutLeadsInput>
	update?: Maybe<EmployeeUpdateWithoutLeadsDataInput>
	upsert?: Maybe<EmployeeUpsertWithoutLeadsInput>
	delete?: Maybe<Scalars['Boolean']>
	disconnect?: Maybe<Scalars['Boolean']>
	connect?: Maybe<EmployeeWhereUniqueInput>
}

export type EmployeeUpdateWithoutDepartmentDataInput = {
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
	leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export type EmployeeUpdateWithoutLeadsDataInput = {
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
	office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
}

export type EmployeeUpdateWithoutOfficeDataInput = {
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
	leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
	where: EmployeeWhereUniqueInput
	data: EmployeeUpdateWithoutDepartmentDataInput
}

export type EmployeeUpdateWithWhereUniqueWithoutOfficeInput = {
	where: EmployeeWhereUniqueInput
	data: EmployeeUpdateWithoutOfficeDataInput
}

export type EmployeeUpsertWithoutLeadsInput = {
	update: EmployeeUpdateWithoutLeadsDataInput
	create: EmployeeCreateWithoutLeadsInput
}

export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
	where: EmployeeWhereUniqueInput
	update: EmployeeUpdateWithoutDepartmentDataInput
	create: EmployeeCreateWithoutDepartmentInput
}

export type EmployeeUpsertWithWhereUniqueWithoutOfficeInput = {
	where: EmployeeWhereUniqueInput
	update: EmployeeUpdateWithoutOfficeDataInput
	create: EmployeeCreateWithoutOfficeInput
}

export type EmployeeWhereInput = {
	id?: Maybe<Scalars['ID']>
	id_not?: Maybe<Scalars['ID']>
	id_in?: Maybe<Array<Scalars['ID']>>
	id_not_in?: Maybe<Array<Scalars['ID']>>
	id_lt?: Maybe<Scalars['ID']>
	id_lte?: Maybe<Scalars['ID']>
	id_gt?: Maybe<Scalars['ID']>
	id_gte?: Maybe<Scalars['ID']>
	id_contains?: Maybe<Scalars['ID']>
	id_not_contains?: Maybe<Scalars['ID']>
	id_starts_with?: Maybe<Scalars['ID']>
	id_not_starts_with?: Maybe<Scalars['ID']>
	id_ends_with?: Maybe<Scalars['ID']>
	id_not_ends_with?: Maybe<Scalars['ID']>
	firstName?: Maybe<Scalars['String']>
	firstName_not?: Maybe<Scalars['String']>
	firstName_in?: Maybe<Array<Scalars['String']>>
	firstName_not_in?: Maybe<Array<Scalars['String']>>
	firstName_lt?: Maybe<Scalars['String']>
	firstName_lte?: Maybe<Scalars['String']>
	firstName_gt?: Maybe<Scalars['String']>
	firstName_gte?: Maybe<Scalars['String']>
	firstName_contains?: Maybe<Scalars['String']>
	firstName_not_contains?: Maybe<Scalars['String']>
	firstName_starts_with?: Maybe<Scalars['String']>
	firstName_not_starts_with?: Maybe<Scalars['String']>
	firstName_ends_with?: Maybe<Scalars['String']>
	firstName_not_ends_with?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	lastName_not?: Maybe<Scalars['String']>
	lastName_in?: Maybe<Array<Scalars['String']>>
	lastName_not_in?: Maybe<Array<Scalars['String']>>
	lastName_lt?: Maybe<Scalars['String']>
	lastName_lte?: Maybe<Scalars['String']>
	lastName_gt?: Maybe<Scalars['String']>
	lastName_gte?: Maybe<Scalars['String']>
	lastName_contains?: Maybe<Scalars['String']>
	lastName_not_contains?: Maybe<Scalars['String']>
	lastName_starts_with?: Maybe<Scalars['String']>
	lastName_not_starts_with?: Maybe<Scalars['String']>
	lastName_ends_with?: Maybe<Scalars['String']>
	lastName_not_ends_with?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	email_not?: Maybe<Scalars['String']>
	email_in?: Maybe<Array<Scalars['String']>>
	email_not_in?: Maybe<Array<Scalars['String']>>
	email_lt?: Maybe<Scalars['String']>
	email_lte?: Maybe<Scalars['String']>
	email_gt?: Maybe<Scalars['String']>
	email_gte?: Maybe<Scalars['String']>
	email_contains?: Maybe<Scalars['String']>
	email_not_contains?: Maybe<Scalars['String']>
	email_starts_with?: Maybe<Scalars['String']>
	email_not_starts_with?: Maybe<Scalars['String']>
	email_ends_with?: Maybe<Scalars['String']>
	email_not_ends_with?: Maybe<Scalars['String']>
	department?: Maybe<DepartmentWhereInput>
	office?: Maybe<OfficeWhereInput>
	leads?: Maybe<DepartmentWhereInput>
	AND?: Maybe<Array<EmployeeWhereInput>>
	OR?: Maybe<Array<EmployeeWhereInput>>
	NOT?: Maybe<Array<EmployeeWhereInput>>
}

export type EmployeeWhereUniqueInput = {
	id?: Maybe<Scalars['ID']>
	email?: Maybe<Scalars['String']>
}

export interface Mutation {
	__typename: 'Mutation'
	createEmployee: Employee
	updateEmployee?: Maybe<Employee>
	updateManyEmployees: BatchPayload
	upsertEmployee: Employee
	deleteEmployee?: Maybe<Employee>
	deleteManyEmployees: BatchPayload
	createOffice: Office
	updateOffice?: Maybe<Office>
	updateManyOffices: BatchPayload
	upsertOffice: Office
	deleteOffice?: Maybe<Office>
	deleteManyOffices: BatchPayload
	createDepartment: Department
	updateDepartment?: Maybe<Department>
	updateManyDepartments: BatchPayload
	upsertDepartment: Department
	deleteDepartment?: Maybe<Department>
	deleteManyDepartments: BatchPayload
}

export type MutationCreateEmployeeArgs = {
	data: EmployeeCreateInput
}

export type MutationUpdateEmployeeArgs = {
	data: EmployeeUpdateInput
	where: EmployeeWhereUniqueInput
}

export type MutationUpdateManyEmployeesArgs = {
	data: EmployeeUpdateManyMutationInput
	where?: Maybe<EmployeeWhereInput>
}

export type MutationUpsertEmployeeArgs = {
	where: EmployeeWhereUniqueInput
	create: EmployeeCreateInput
	update: EmployeeUpdateInput
}

export type MutationDeleteEmployeeArgs = {
	where: EmployeeWhereUniqueInput
}

export type MutationDeleteManyEmployeesArgs = {
	where?: Maybe<EmployeeWhereInput>
}

export type MutationCreateOfficeArgs = {
	data: OfficeCreateInput
}

export type MutationUpdateOfficeArgs = {
	data: OfficeUpdateInput
	where: OfficeWhereUniqueInput
}

export type MutationUpdateManyOfficesArgs = {
	data: OfficeUpdateManyMutationInput
	where?: Maybe<OfficeWhereInput>
}

export type MutationUpsertOfficeArgs = {
	where: OfficeWhereUniqueInput
	create: OfficeCreateInput
	update: OfficeUpdateInput
}

export type MutationDeleteOfficeArgs = {
	where: OfficeWhereUniqueInput
}

export type MutationDeleteManyOfficesArgs = {
	where?: Maybe<OfficeWhereInput>
}

export type MutationCreateDepartmentArgs = {
	data: DepartmentCreateInput
}

export type MutationUpdateDepartmentArgs = {
	data: DepartmentUpdateInput
	where: DepartmentWhereUniqueInput
}

export type MutationUpdateManyDepartmentsArgs = {
	data: DepartmentUpdateManyMutationInput
	where?: Maybe<DepartmentWhereInput>
}

export type MutationUpsertDepartmentArgs = {
	where: DepartmentWhereUniqueInput
	create: DepartmentCreateInput
	update: DepartmentUpdateInput
}

export type MutationDeleteDepartmentArgs = {
	where: DepartmentWhereUniqueInput
}

export type MutationDeleteManyDepartmentsArgs = {
	where?: Maybe<DepartmentWhereInput>
}

export interface Office {
	__typename: 'Office'
	id: Scalars['ID']
	name: Scalars['String']
	location: Scalars['String']
	employees?: Maybe<Array<Employee>>
}

export type OfficeEmployeesArgs = {
	where?: Maybe<EmployeeWhereInput>
	orderBy?: Maybe<EmployeeOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}

export interface OfficeConnection {
	__typename: 'OfficeConnection'
	pageInfo: PageInfo
	edges: Array<OfficeEdge>
	aggregate: AggregateOffice
}

export type OfficeCreateInput = {
	id?: Maybe<Scalars['ID']>
	name: Scalars['String']
	location: Scalars['String']
	employees?: Maybe<EmployeeCreateManyWithoutOfficeInput>
}

export type OfficeCreateOneWithoutEmployeesInput = {
	create?: Maybe<OfficeCreateWithoutEmployeesInput>
	connect?: Maybe<OfficeWhereUniqueInput>
}

export type OfficeCreateWithoutEmployeesInput = {
	id?: Maybe<Scalars['ID']>
	name: Scalars['String']
	location: Scalars['String']
}

export interface OfficeEdge {
	__typename: 'OfficeEdge'
	node: Office
	cursor: Scalars['String']
}

export enum OfficeOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	LocationAsc = 'location_ASC',
	LocationDesc = 'location_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type OfficeUpdateInput = {
	name?: Maybe<Scalars['String']>
	location?: Maybe<Scalars['String']>
	employees?: Maybe<EmployeeUpdateManyWithoutOfficeInput>
}

export type OfficeUpdateManyMutationInput = {
	name?: Maybe<Scalars['String']>
	location?: Maybe<Scalars['String']>
}

export type OfficeUpdateOneWithoutEmployeesInput = {
	create?: Maybe<OfficeCreateWithoutEmployeesInput>
	update?: Maybe<OfficeUpdateWithoutEmployeesDataInput>
	upsert?: Maybe<OfficeUpsertWithoutEmployeesInput>
	delete?: Maybe<Scalars['Boolean']>
	disconnect?: Maybe<Scalars['Boolean']>
	connect?: Maybe<OfficeWhereUniqueInput>
}

export type OfficeUpdateWithoutEmployeesDataInput = {
	name?: Maybe<Scalars['String']>
	location?: Maybe<Scalars['String']>
}

export type OfficeUpsertWithoutEmployeesInput = {
	update: OfficeUpdateWithoutEmployeesDataInput
	create: OfficeCreateWithoutEmployeesInput
}

export type OfficeWhereInput = {
	id?: Maybe<Scalars['ID']>
	id_not?: Maybe<Scalars['ID']>
	id_in?: Maybe<Array<Scalars['ID']>>
	id_not_in?: Maybe<Array<Scalars['ID']>>
	id_lt?: Maybe<Scalars['ID']>
	id_lte?: Maybe<Scalars['ID']>
	id_gt?: Maybe<Scalars['ID']>
	id_gte?: Maybe<Scalars['ID']>
	id_contains?: Maybe<Scalars['ID']>
	id_not_contains?: Maybe<Scalars['ID']>
	id_starts_with?: Maybe<Scalars['ID']>
	id_not_starts_with?: Maybe<Scalars['ID']>
	id_ends_with?: Maybe<Scalars['ID']>
	id_not_ends_with?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	name_not?: Maybe<Scalars['String']>
	name_in?: Maybe<Array<Scalars['String']>>
	name_not_in?: Maybe<Array<Scalars['String']>>
	name_lt?: Maybe<Scalars['String']>
	name_lte?: Maybe<Scalars['String']>
	name_gt?: Maybe<Scalars['String']>
	name_gte?: Maybe<Scalars['String']>
	name_contains?: Maybe<Scalars['String']>
	name_not_contains?: Maybe<Scalars['String']>
	name_starts_with?: Maybe<Scalars['String']>
	name_not_starts_with?: Maybe<Scalars['String']>
	name_ends_with?: Maybe<Scalars['String']>
	name_not_ends_with?: Maybe<Scalars['String']>
	location?: Maybe<Scalars['String']>
	location_not?: Maybe<Scalars['String']>
	location_in?: Maybe<Array<Scalars['String']>>
	location_not_in?: Maybe<Array<Scalars['String']>>
	location_lt?: Maybe<Scalars['String']>
	location_lte?: Maybe<Scalars['String']>
	location_gt?: Maybe<Scalars['String']>
	location_gte?: Maybe<Scalars['String']>
	location_contains?: Maybe<Scalars['String']>
	location_not_contains?: Maybe<Scalars['String']>
	location_starts_with?: Maybe<Scalars['String']>
	location_not_starts_with?: Maybe<Scalars['String']>
	location_ends_with?: Maybe<Scalars['String']>
	location_not_ends_with?: Maybe<Scalars['String']>
	employees_every?: Maybe<EmployeeWhereInput>
	employees_some?: Maybe<EmployeeWhereInput>
	employees_none?: Maybe<EmployeeWhereInput>
	AND?: Maybe<Array<OfficeWhereInput>>
	OR?: Maybe<Array<OfficeWhereInput>>
	NOT?: Maybe<Array<OfficeWhereInput>>
}

export type OfficeWhereUniqueInput = {
	id?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
}

export interface PageInfo {
	__typename: 'PageInfo'
	hasNextPage: Scalars['Boolean']
	hasPreviousPage: Scalars['Boolean']
	startCursor?: Maybe<Scalars['String']>
	endCursor?: Maybe<Scalars['String']>
}

export interface Query {
	__typename: 'Query'
	employee?: Maybe<Employee>
	employees: Array<Employee>
	employeesConnection: EmployeeConnection
	office?: Maybe<Office>
	offices: Array<Office>
	officesConnection: OfficeConnection
	department?: Maybe<Department>
	departments: Array<Department>
	departmentsConnection: DepartmentConnection
}

export type QueryEmployeeArgs = {
	where: EmployeeWhereUniqueInput
}

export type QueryEmployeesArgs = {
	where?: Maybe<EmployeeWhereInput>
	orderBy?: Maybe<EmployeeOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}

export type QueryEmployeesConnectionArgs = {
	where?: Maybe<EmployeeWhereInput>
	orderBy?: Maybe<EmployeeOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}

export type QueryOfficeArgs = {
	where: OfficeWhereUniqueInput
}

export type QueryOfficesArgs = {
	where?: Maybe<OfficeWhereInput>
	orderBy?: Maybe<OfficeOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}

export type QueryOfficesConnectionArgs = {
	where?: Maybe<OfficeWhereInput>
	orderBy?: Maybe<OfficeOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}

export type QueryDepartmentArgs = {
	where: DepartmentWhereUniqueInput
}

export type QueryDepartmentsArgs = {
	where?: Maybe<DepartmentWhereInput>
	orderBy?: Maybe<DepartmentOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}

export type QueryDepartmentsConnectionArgs = {
	where?: Maybe<DepartmentWhereInput>
	orderBy?: Maybe<DepartmentOrderByInput>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	before?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	last?: Maybe<Scalars['Int']>
}
