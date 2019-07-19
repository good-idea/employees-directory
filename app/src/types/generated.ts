export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
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
  employees?: Maybe<Employee[]>
}

export interface DepartmentEmployeesArgs {
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
  edges: DepartmentEdge[]
  aggregate: AggregateDepartment
}

export interface DepartmentCreateInput {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  lead?: Maybe<EmployeeCreateOneWithoutLeadsInput>
  employees?: Maybe<EmployeeCreateManyWithoutDepartmentInput>
}

export interface DepartmentCreateOneWithoutEmployeesInput {
  create?: Maybe<DepartmentCreateWithoutEmployeesInput>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export interface DepartmentCreateOneWithoutLeadInput {
  create?: Maybe<DepartmentCreateWithoutLeadInput>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export interface DepartmentCreateWithoutEmployeesInput {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  lead?: Maybe<EmployeeCreateOneWithoutLeadsInput>
}

export interface DepartmentCreateWithoutLeadInput {
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

export interface DepartmentUpdateInput {
  name?: Maybe<Scalars['String']>
  lead?: Maybe<EmployeeUpdateOneWithoutLeadsInput>
  employees?: Maybe<EmployeeUpdateManyWithoutDepartmentInput>
}

export interface DepartmentUpdateManyMutationInput {
  name?: Maybe<Scalars['String']>
}

export interface DepartmentUpdateOneWithoutEmployeesInput {
  create?: Maybe<DepartmentCreateWithoutEmployeesInput>
  update?: Maybe<DepartmentUpdateWithoutEmployeesDataInput>
  upsert?: Maybe<DepartmentUpsertWithoutEmployeesInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export interface DepartmentUpdateOneWithoutLeadInput {
  create?: Maybe<DepartmentCreateWithoutLeadInput>
  update?: Maybe<DepartmentUpdateWithoutLeadDataInput>
  upsert?: Maybe<DepartmentUpsertWithoutLeadInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export interface DepartmentUpdateWithoutEmployeesDataInput {
  name?: Maybe<Scalars['String']>
  lead?: Maybe<EmployeeUpdateOneWithoutLeadsInput>
}

export interface DepartmentUpdateWithoutLeadDataInput {
  name?: Maybe<Scalars['String']>
  employees?: Maybe<EmployeeUpdateManyWithoutDepartmentInput>
}

export interface DepartmentUpsertWithoutEmployeesInput {
  update: DepartmentUpdateWithoutEmployeesDataInput
  create: DepartmentCreateWithoutEmployeesInput
}

export interface DepartmentUpsertWithoutLeadInput {
  update: DepartmentUpdateWithoutLeadDataInput
  create: DepartmentCreateWithoutLeadInput
}

export interface DepartmentWhereInput {
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
  AND?: Maybe<DepartmentWhereInput[]>
  OR?: Maybe<DepartmentWhereInput[]>
  NOT?: Maybe<DepartmentWhereInput[]>
}

export interface DepartmentWhereUniqueInput {
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
  edges: EmployeeEdge[]
  aggregate: AggregateEmployee
}

export interface EmployeeCreateInput {
  id?: Maybe<Scalars['ID']>
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
  office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export interface EmployeeCreateManyWithoutDepartmentInput {
  create?: Maybe<EmployeeCreateWithoutDepartmentInput[]>
  connect?: Maybe<EmployeeWhereUniqueInput[]>
}

export interface EmployeeCreateManyWithoutOfficeInput {
  create?: Maybe<EmployeeCreateWithoutOfficeInput[]>
  connect?: Maybe<EmployeeWhereUniqueInput[]>
}

export interface EmployeeCreateOneWithoutLeadsInput {
  create?: Maybe<EmployeeCreateWithoutLeadsInput>
  connect?: Maybe<EmployeeWhereUniqueInput>
}

export interface EmployeeCreateWithoutDepartmentInput {
  id?: Maybe<Scalars['ID']>
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export interface EmployeeCreateWithoutLeadsInput {
  id?: Maybe<Scalars['ID']>
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
  office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
}

export interface EmployeeCreateWithoutOfficeInput {
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

export interface EmployeeScalarWhereInput {
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
  AND?: Maybe<EmployeeScalarWhereInput[]>
  OR?: Maybe<EmployeeScalarWhereInput[]>
  NOT?: Maybe<EmployeeScalarWhereInput[]>
}

export interface EmployeeUpdateInput {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
  office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export interface EmployeeUpdateManyDataInput {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export interface EmployeeUpdateManyMutationInput {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export interface EmployeeUpdateManyWithoutDepartmentInput {
  create?: Maybe<EmployeeCreateWithoutDepartmentInput[]>
  delete?: Maybe<EmployeeWhereUniqueInput[]>
  connect?: Maybe<EmployeeWhereUniqueInput[]>
  set?: Maybe<EmployeeWhereUniqueInput[]>
  disconnect?: Maybe<EmployeeWhereUniqueInput[]>
  update?: Maybe<EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]>
  upsert?: Maybe<EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]>
  deleteMany?: Maybe<EmployeeScalarWhereInput[]>
  updateMany?: Maybe<EmployeeUpdateManyWithWhereNestedInput[]>
}

export interface EmployeeUpdateManyWithoutOfficeInput {
  create?: Maybe<EmployeeCreateWithoutOfficeInput[]>
  delete?: Maybe<EmployeeWhereUniqueInput[]>
  connect?: Maybe<EmployeeWhereUniqueInput[]>
  set?: Maybe<EmployeeWhereUniqueInput[]>
  disconnect?: Maybe<EmployeeWhereUniqueInput[]>
  update?: Maybe<EmployeeUpdateWithWhereUniqueWithoutOfficeInput[]>
  upsert?: Maybe<EmployeeUpsertWithWhereUniqueWithoutOfficeInput[]>
  deleteMany?: Maybe<EmployeeScalarWhereInput[]>
  updateMany?: Maybe<EmployeeUpdateManyWithWhereNestedInput[]>
}

export interface EmployeeUpdateManyWithWhereNestedInput {
  where: EmployeeScalarWhereInput
  data: EmployeeUpdateManyDataInput
}

export interface EmployeeUpdateOneWithoutLeadsInput {
  create?: Maybe<EmployeeCreateWithoutLeadsInput>
  update?: Maybe<EmployeeUpdateWithoutLeadsDataInput>
  upsert?: Maybe<EmployeeUpsertWithoutLeadsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<EmployeeWhereUniqueInput>
}

export interface EmployeeUpdateWithoutDepartmentDataInput {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export interface EmployeeUpdateWithoutLeadsDataInput {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
  office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
}

export interface EmployeeUpdateWithoutOfficeDataInput {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export interface EmployeeUpdateWithWhereUniqueWithoutDepartmentInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutDepartmentDataInput
}

export interface EmployeeUpdateWithWhereUniqueWithoutOfficeInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutOfficeDataInput
}

export interface EmployeeUpsertWithoutLeadsInput {
  update: EmployeeUpdateWithoutLeadsDataInput
  create: EmployeeCreateWithoutLeadsInput
}

export interface EmployeeUpsertWithWhereUniqueWithoutDepartmentInput {
  where: EmployeeWhereUniqueInput
  update: EmployeeUpdateWithoutDepartmentDataInput
  create: EmployeeCreateWithoutDepartmentInput
}

export interface EmployeeUpsertWithWhereUniqueWithoutOfficeInput {
  where: EmployeeWhereUniqueInput
  update: EmployeeUpdateWithoutOfficeDataInput
  create: EmployeeCreateWithoutOfficeInput
}

export interface EmployeeWhereInput {
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
  AND?: Maybe<EmployeeWhereInput[]>
  OR?: Maybe<EmployeeWhereInput[]>
  NOT?: Maybe<EmployeeWhereInput[]>
}

export interface EmployeeWhereUniqueInput {
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

export interface MutationCreateEmployeeArgs {
  data: EmployeeCreateInput
}

export interface MutationUpdateEmployeeArgs {
  data: EmployeeUpdateInput
  where: EmployeeWhereUniqueInput
}

export interface MutationUpdateManyEmployeesArgs {
  data: EmployeeUpdateManyMutationInput
  where?: Maybe<EmployeeWhereInput>
}

export interface MutationUpsertEmployeeArgs {
  where: EmployeeWhereUniqueInput
  create: EmployeeCreateInput
  update: EmployeeUpdateInput
}

export interface MutationDeleteEmployeeArgs {
  where: EmployeeWhereUniqueInput
}

export interface MutationDeleteManyEmployeesArgs {
  where?: Maybe<EmployeeWhereInput>
}

export interface MutationCreateOfficeArgs {
  data: OfficeCreateInput
}

export interface MutationUpdateOfficeArgs {
  data: OfficeUpdateInput
  where: OfficeWhereUniqueInput
}

export interface MutationUpdateManyOfficesArgs {
  data: OfficeUpdateManyMutationInput
  where?: Maybe<OfficeWhereInput>
}

export interface MutationUpsertOfficeArgs {
  where: OfficeWhereUniqueInput
  create: OfficeCreateInput
  update: OfficeUpdateInput
}

export interface MutationDeleteOfficeArgs {
  where: OfficeWhereUniqueInput
}

export interface MutationDeleteManyOfficesArgs {
  where?: Maybe<OfficeWhereInput>
}

export interface MutationCreateDepartmentArgs {
  data: DepartmentCreateInput
}

export interface MutationUpdateDepartmentArgs {
  data: DepartmentUpdateInput
  where: DepartmentWhereUniqueInput
}

export interface MutationUpdateManyDepartmentsArgs {
  data: DepartmentUpdateManyMutationInput
  where?: Maybe<DepartmentWhereInput>
}

export interface MutationUpsertDepartmentArgs {
  where: DepartmentWhereUniqueInput
  create: DepartmentCreateInput
  update: DepartmentUpdateInput
}

export interface MutationDeleteDepartmentArgs {
  where: DepartmentWhereUniqueInput
}

export interface MutationDeleteManyDepartmentsArgs {
  where?: Maybe<DepartmentWhereInput>
}

export interface Office {
  __typename: 'Office'
  id: Scalars['ID']
  name: Scalars['String']
  location: Scalars['String']
  employees?: Maybe<Employee[]>
}

export interface OfficeEmployeesArgs {
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
  edges: OfficeEdge[]
  aggregate: AggregateOffice
}

export interface OfficeCreateInput {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  location: Scalars['String']
  employees?: Maybe<EmployeeCreateManyWithoutOfficeInput>
}

export interface OfficeCreateOneWithoutEmployeesInput {
  create?: Maybe<OfficeCreateWithoutEmployeesInput>
  connect?: Maybe<OfficeWhereUniqueInput>
}

export interface OfficeCreateWithoutEmployeesInput {
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

export interface OfficeUpdateInput {
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  employees?: Maybe<EmployeeUpdateManyWithoutOfficeInput>
}

export interface OfficeUpdateManyMutationInput {
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
}

export interface OfficeUpdateOneWithoutEmployeesInput {
  create?: Maybe<OfficeCreateWithoutEmployeesInput>
  update?: Maybe<OfficeUpdateWithoutEmployeesDataInput>
  upsert?: Maybe<OfficeUpsertWithoutEmployeesInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  connect?: Maybe<OfficeWhereUniqueInput>
}

export interface OfficeUpdateWithoutEmployeesDataInput {
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
}

export interface OfficeUpsertWithoutEmployeesInput {
  update: OfficeUpdateWithoutEmployeesDataInput
  create: OfficeCreateWithoutEmployeesInput
}

export interface OfficeWhereInput {
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
  AND?: Maybe<OfficeWhereInput[]>
  OR?: Maybe<OfficeWhereInput[]>
  NOT?: Maybe<OfficeWhereInput[]>
}

export interface OfficeWhereUniqueInput {
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
  employees: Employee[]
  employeesConnection: EmployeeConnection
  office?: Maybe<Office>
  offices: Office[]
  officesConnection: OfficeConnection
  department?: Maybe<Department>
  departments: Department[]
  departmentsConnection: DepartmentConnection
}

export interface QueryEmployeeArgs {
  where: EmployeeWhereUniqueInput
}

export interface QueryEmployeesArgs {
  where?: Maybe<EmployeeWhereInput>
  orderBy?: Maybe<EmployeeOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryEmployeesConnectionArgs {
  where?: Maybe<EmployeeWhereInput>
  orderBy?: Maybe<EmployeeOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryOfficeArgs {
  where: OfficeWhereUniqueInput
}

export interface QueryOfficesArgs {
  where?: Maybe<OfficeWhereInput>
  orderBy?: Maybe<OfficeOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryOfficesConnectionArgs {
  where?: Maybe<OfficeWhereInput>
  orderBy?: Maybe<OfficeOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryDepartmentArgs {
  where: DepartmentWhereUniqueInput
}

export interface QueryDepartmentsArgs {
  where?: Maybe<DepartmentWhereInput>
  orderBy?: Maybe<DepartmentOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryDepartmentsConnectionArgs {
  where?: Maybe<DepartmentWhereInput>
  orderBy?: Maybe<DepartmentOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}
