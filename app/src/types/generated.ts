export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
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
}

export interface EmployeeConnection {
	__typename: 'EmployeeConnection'
	pageInfo: PageInfo
	edges: Array<EmployeeEdge>
	aggregate: AggregateEmployee
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
	AND?: Maybe<Array<EmployeeWhereInput>>
	OR?: Maybe<Array<EmployeeWhereInput>>
	NOT?: Maybe<Array<EmployeeWhereInput>>
}

export type EmployeeWhereUniqueInput = {
	id?: Maybe<Scalars['ID']>
	email?: Maybe<Scalars['String']>
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
