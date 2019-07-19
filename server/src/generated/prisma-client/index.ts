// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from 'graphql'
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model,
} from 'prisma-client-lib'
import { typeDefs } from './prisma-schema'

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U]

export type Maybe<T> = T | undefined | null

export interface Exists {
  department: (where?: DepartmentWhereInput) => Promise<boolean>
  employee: (where?: EmployeeWhereInput) => Promise<boolean>
  office: (where?: OfficeWhereInput) => Promise<boolean>
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>
}

export interface Prisma {
  $exists: Exists
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any },
  ) => Promise<T>

  /**
   * Queries
   */

  department: (where: DepartmentWhereUniqueInput) => DepartmentNullablePromise
  departments: (args?: {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => FragmentableArray<Department>
  departmentsConnection: (args?: {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => DepartmentConnectionPromise
  employee: (where: EmployeeWhereUniqueInput) => EmployeeNullablePromise
  employees: (args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => FragmentableArray<Employee>
  employeesConnection: (args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => EmployeeConnectionPromise
  office: (where: OfficeWhereUniqueInput) => OfficeNullablePromise
  offices: (args?: {
    where?: OfficeWhereInput
    orderBy?: OfficeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => FragmentableArray<Office>
  officesConnection: (args?: {
    where?: OfficeWhereInput
    orderBy?: OfficeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => OfficeConnectionPromise
  node: (args: { id: ID_Output }) => Node

  /**
   * Mutations
   */

  createDepartment: (data: DepartmentCreateInput) => DepartmentPromise
  updateDepartment: (args: {
    data: DepartmentUpdateInput
    where: DepartmentWhereUniqueInput
  }) => DepartmentPromise
  updateManyDepartments: (args: {
    data: DepartmentUpdateManyMutationInput
    where?: DepartmentWhereInput
  }) => BatchPayloadPromise
  upsertDepartment: (args: {
    where: DepartmentWhereUniqueInput
    create: DepartmentCreateInput
    update: DepartmentUpdateInput
  }) => DepartmentPromise
  deleteDepartment: (where: DepartmentWhereUniqueInput) => DepartmentPromise
  deleteManyDepartments: (where?: DepartmentWhereInput) => BatchPayloadPromise
  createEmployee: (data: EmployeeCreateInput) => EmployeePromise
  updateEmployee: (args: {
    data: EmployeeUpdateInput
    where: EmployeeWhereUniqueInput
  }) => EmployeePromise
  updateManyEmployees: (args: {
    data: EmployeeUpdateManyMutationInput
    where?: EmployeeWhereInput
  }) => BatchPayloadPromise
  upsertEmployee: (args: {
    where: EmployeeWhereUniqueInput
    create: EmployeeCreateInput
    update: EmployeeUpdateInput
  }) => EmployeePromise
  deleteEmployee: (where: EmployeeWhereUniqueInput) => EmployeePromise
  deleteManyEmployees: (where?: EmployeeWhereInput) => BatchPayloadPromise
  createOffice: (data: OfficeCreateInput) => OfficePromise
  updateOffice: (args: {
    data: OfficeUpdateInput
    where: OfficeWhereUniqueInput
  }) => OfficePromise
  updateManyOffices: (args: {
    data: OfficeUpdateManyMutationInput
    where?: OfficeWhereInput
  }) => BatchPayloadPromise
  upsertOffice: (args: {
    where: OfficeWhereUniqueInput
    create: OfficeCreateInput
    update: OfficeUpdateInput
  }) => OfficePromise
  deleteOffice: (where: OfficeWhereUniqueInput) => OfficePromise
  deleteManyOffices: (where?: OfficeWhereInput) => BatchPayloadPromise

  /**
   * Subscriptions
   */

  $subscribe: Subscription
}

export interface Subscription {
  department: (
    where?: DepartmentSubscriptionWhereInput,
  ) => DepartmentSubscriptionPayloadSubscription
  employee: (
    where?: EmployeeSubscriptionWhereInput,
  ) => EmployeeSubscriptionPayloadSubscription
  office: (
    where?: OfficeSubscriptionWhereInput,
  ) => OfficeSubscriptionPayloadSubscription
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T
}

/**
 * Types
 */

export type EmployeeOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'email_ASC'
  | 'email_DESC'

export type DepartmentOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'

export type OfficeOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'location_ASC'
  | 'location_DESC'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export interface DepartmentUpdateOneWithoutEmployeesInput {
  create?: Maybe<DepartmentCreateWithoutEmployeesInput>
  update?: Maybe<DepartmentUpdateWithoutEmployeesDataInput>
  upsert?: Maybe<DepartmentUpsertWithoutEmployeesInput>
  delete?: Maybe<Boolean>
  disconnect?: Maybe<Boolean>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export type DepartmentWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>
  name?: Maybe<String>
}>

export interface OfficeUpdateOneWithoutEmployeesInput {
  create?: Maybe<OfficeCreateWithoutEmployeesInput>
  update?: Maybe<OfficeUpdateWithoutEmployeesDataInput>
  upsert?: Maybe<OfficeUpsertWithoutEmployeesInput>
  delete?: Maybe<Boolean>
  disconnect?: Maybe<Boolean>
  connect?: Maybe<OfficeWhereUniqueInput>
}

export interface EmployeeWhereInput {
  id?: Maybe<ID_Input>
  id_not?: Maybe<ID_Input>
  id_in?: Maybe<ID_Input[] | ID_Input>
  id_not_in?: Maybe<ID_Input[] | ID_Input>
  id_lt?: Maybe<ID_Input>
  id_lte?: Maybe<ID_Input>
  id_gt?: Maybe<ID_Input>
  id_gte?: Maybe<ID_Input>
  id_contains?: Maybe<ID_Input>
  id_not_contains?: Maybe<ID_Input>
  id_starts_with?: Maybe<ID_Input>
  id_not_starts_with?: Maybe<ID_Input>
  id_ends_with?: Maybe<ID_Input>
  id_not_ends_with?: Maybe<ID_Input>
  firstName?: Maybe<String>
  firstName_not?: Maybe<String>
  firstName_in?: Maybe<String[] | String>
  firstName_not_in?: Maybe<String[] | String>
  firstName_lt?: Maybe<String>
  firstName_lte?: Maybe<String>
  firstName_gt?: Maybe<String>
  firstName_gte?: Maybe<String>
  firstName_contains?: Maybe<String>
  firstName_not_contains?: Maybe<String>
  firstName_starts_with?: Maybe<String>
  firstName_not_starts_with?: Maybe<String>
  firstName_ends_with?: Maybe<String>
  firstName_not_ends_with?: Maybe<String>
  lastName?: Maybe<String>
  lastName_not?: Maybe<String>
  lastName_in?: Maybe<String[] | String>
  lastName_not_in?: Maybe<String[] | String>
  lastName_lt?: Maybe<String>
  lastName_lte?: Maybe<String>
  lastName_gt?: Maybe<String>
  lastName_gte?: Maybe<String>
  lastName_contains?: Maybe<String>
  lastName_not_contains?: Maybe<String>
  lastName_starts_with?: Maybe<String>
  lastName_not_starts_with?: Maybe<String>
  lastName_ends_with?: Maybe<String>
  lastName_not_ends_with?: Maybe<String>
  email?: Maybe<String>
  email_not?: Maybe<String>
  email_in?: Maybe<String[] | String>
  email_not_in?: Maybe<String[] | String>
  email_lt?: Maybe<String>
  email_lte?: Maybe<String>
  email_gt?: Maybe<String>
  email_gte?: Maybe<String>
  email_contains?: Maybe<String>
  email_not_contains?: Maybe<String>
  email_starts_with?: Maybe<String>
  email_not_starts_with?: Maybe<String>
  email_ends_with?: Maybe<String>
  email_not_ends_with?: Maybe<String>
  department?: Maybe<DepartmentWhereInput>
  office?: Maybe<OfficeWhereInput>
  leads?: Maybe<DepartmentWhereInput>
  AND?: Maybe<EmployeeWhereInput[] | EmployeeWhereInput>
  OR?: Maybe<EmployeeWhereInput[] | EmployeeWhereInput>
  NOT?: Maybe<EmployeeWhereInput[] | EmployeeWhereInput>
}

export interface OfficeUpdateWithoutEmployeesDataInput {
  name?: Maybe<String>
  location?: Maybe<String>
}

export interface OfficeWhereInput {
  id?: Maybe<ID_Input>
  id_not?: Maybe<ID_Input>
  id_in?: Maybe<ID_Input[] | ID_Input>
  id_not_in?: Maybe<ID_Input[] | ID_Input>
  id_lt?: Maybe<ID_Input>
  id_lte?: Maybe<ID_Input>
  id_gt?: Maybe<ID_Input>
  id_gte?: Maybe<ID_Input>
  id_contains?: Maybe<ID_Input>
  id_not_contains?: Maybe<ID_Input>
  id_starts_with?: Maybe<ID_Input>
  id_not_starts_with?: Maybe<ID_Input>
  id_ends_with?: Maybe<ID_Input>
  id_not_ends_with?: Maybe<ID_Input>
  name?: Maybe<String>
  name_not?: Maybe<String>
  name_in?: Maybe<String[] | String>
  name_not_in?: Maybe<String[] | String>
  name_lt?: Maybe<String>
  name_lte?: Maybe<String>
  name_gt?: Maybe<String>
  name_gte?: Maybe<String>
  name_contains?: Maybe<String>
  name_not_contains?: Maybe<String>
  name_starts_with?: Maybe<String>
  name_not_starts_with?: Maybe<String>
  name_ends_with?: Maybe<String>
  name_not_ends_with?: Maybe<String>
  location?: Maybe<String>
  location_not?: Maybe<String>
  location_in?: Maybe<String[] | String>
  location_not_in?: Maybe<String[] | String>
  location_lt?: Maybe<String>
  location_lte?: Maybe<String>
  location_gt?: Maybe<String>
  location_gte?: Maybe<String>
  location_contains?: Maybe<String>
  location_not_contains?: Maybe<String>
  location_starts_with?: Maybe<String>
  location_not_starts_with?: Maybe<String>
  location_ends_with?: Maybe<String>
  location_not_ends_with?: Maybe<String>
  employees_every?: Maybe<EmployeeWhereInput>
  employees_some?: Maybe<EmployeeWhereInput>
  employees_none?: Maybe<EmployeeWhereInput>
  AND?: Maybe<OfficeWhereInput[] | OfficeWhereInput>
  OR?: Maybe<OfficeWhereInput[] | OfficeWhereInput>
  NOT?: Maybe<OfficeWhereInput[] | OfficeWhereInput>
}

export interface EmployeeCreateWithoutDepartmentInput {
  id?: Maybe<ID_Input>
  firstName: String
  lastName: String
  email: String
  office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export interface DepartmentUpdateManyMutationInput {
  name?: Maybe<String>
}

export interface DepartmentCreateOneWithoutLeadInput {
  create?: Maybe<DepartmentCreateWithoutLeadInput>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export interface OfficeUpsertWithoutEmployeesInput {
  update: OfficeUpdateWithoutEmployeesDataInput
  create: OfficeCreateWithoutEmployeesInput
}

export interface DepartmentCreateWithoutLeadInput {
  id?: Maybe<ID_Input>
  name: String
  employees?: Maybe<EmployeeCreateManyWithoutDepartmentInput>
}

export interface EmployeeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>
  updatedFields_contains?: Maybe<String>
  updatedFields_contains_every?: Maybe<String[] | String>
  updatedFields_contains_some?: Maybe<String[] | String>
  node?: Maybe<EmployeeWhereInput>
  AND?: Maybe<EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput>
  OR?: Maybe<EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput>
  NOT?: Maybe<EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput>
}

export interface DepartmentUpdateInput {
  name?: Maybe<String>
  lead?: Maybe<EmployeeUpdateOneWithoutLeadsInput>
  employees?: Maybe<EmployeeUpdateManyWithoutDepartmentInput>
}

export interface OfficeUpdateManyMutationInput {
  name?: Maybe<String>
  location?: Maybe<String>
}

export interface EmployeeUpdateOneWithoutLeadsInput {
  create?: Maybe<EmployeeCreateWithoutLeadsInput>
  update?: Maybe<EmployeeUpdateWithoutLeadsDataInput>
  upsert?: Maybe<EmployeeUpsertWithoutLeadsInput>
  delete?: Maybe<Boolean>
  disconnect?: Maybe<Boolean>
  connect?: Maybe<EmployeeWhereUniqueInput>
}

export type EmployeeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>
  email?: Maybe<String>
}>

export interface EmployeeUpdateWithoutLeadsDataInput {
  firstName?: Maybe<String>
  lastName?: Maybe<String>
  email?: Maybe<String>
  department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
  office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
}

export interface EmployeeUpdateWithWhereUniqueWithoutOfficeInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutOfficeDataInput
}

export interface EmployeeUpdateManyMutationInput {
  firstName?: Maybe<String>
  lastName?: Maybe<String>
  email?: Maybe<String>
}

export type OfficeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>
  name?: Maybe<String>
}>

export interface DepartmentUpdateWithoutEmployeesDataInput {
  name?: Maybe<String>
  lead?: Maybe<EmployeeUpdateOneWithoutLeadsInput>
}

export interface EmployeeCreateWithoutOfficeInput {
  id?: Maybe<ID_Input>
  firstName: String
  lastName: String
  email: String
  department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export interface DepartmentUpsertWithoutEmployeesInput {
  update: DepartmentUpdateWithoutEmployeesDataInput
  create: DepartmentCreateWithoutEmployeesInput
}

export interface OfficeCreateInput {
  id?: Maybe<ID_Input>
  name: String
  location: String
  employees?: Maybe<EmployeeCreateManyWithoutOfficeInput>
}

export interface DepartmentWhereInput {
  id?: Maybe<ID_Input>
  id_not?: Maybe<ID_Input>
  id_in?: Maybe<ID_Input[] | ID_Input>
  id_not_in?: Maybe<ID_Input[] | ID_Input>
  id_lt?: Maybe<ID_Input>
  id_lte?: Maybe<ID_Input>
  id_gt?: Maybe<ID_Input>
  id_gte?: Maybe<ID_Input>
  id_contains?: Maybe<ID_Input>
  id_not_contains?: Maybe<ID_Input>
  id_starts_with?: Maybe<ID_Input>
  id_not_starts_with?: Maybe<ID_Input>
  id_ends_with?: Maybe<ID_Input>
  id_not_ends_with?: Maybe<ID_Input>
  name?: Maybe<String>
  name_not?: Maybe<String>
  name_in?: Maybe<String[] | String>
  name_not_in?: Maybe<String[] | String>
  name_lt?: Maybe<String>
  name_lte?: Maybe<String>
  name_gt?: Maybe<String>
  name_gte?: Maybe<String>
  name_contains?: Maybe<String>
  name_not_contains?: Maybe<String>
  name_starts_with?: Maybe<String>
  name_not_starts_with?: Maybe<String>
  name_ends_with?: Maybe<String>
  name_not_ends_with?: Maybe<String>
  lead?: Maybe<EmployeeWhereInput>
  employees_every?: Maybe<EmployeeWhereInput>
  employees_some?: Maybe<EmployeeWhereInput>
  employees_none?: Maybe<EmployeeWhereInput>
  AND?: Maybe<DepartmentWhereInput[] | DepartmentWhereInput>
  OR?: Maybe<DepartmentWhereInput[] | DepartmentWhereInput>
  NOT?: Maybe<DepartmentWhereInput[] | DepartmentWhereInput>
}

export interface DepartmentCreateInput {
  id?: Maybe<ID_Input>
  name: String
  lead?: Maybe<EmployeeCreateOneWithoutLeadsInput>
  employees?: Maybe<EmployeeCreateManyWithoutDepartmentInput>
}

export interface EmployeeUpdateInput {
  firstName?: Maybe<String>
  lastName?: Maybe<String>
  email?: Maybe<String>
  department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
  office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export interface EmployeeCreateWithoutLeadsInput {
  id?: Maybe<ID_Input>
  firstName: String
  lastName: String
  email: String
  department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
  office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
}

export interface EmployeeCreateInput {
  id?: Maybe<ID_Input>
  firstName: String
  lastName: String
  email: String
  department?: Maybe<DepartmentCreateOneWithoutEmployeesInput>
  office?: Maybe<OfficeCreateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentCreateOneWithoutLeadInput>
}

export interface DepartmentCreateWithoutEmployeesInput {
  id?: Maybe<ID_Input>
  name: String
  lead?: Maybe<EmployeeCreateOneWithoutLeadsInput>
}

export interface EmployeeUpsertWithoutLeadsInput {
  update: EmployeeUpdateWithoutLeadsDataInput
  create: EmployeeCreateWithoutLeadsInput
}

export interface OfficeCreateWithoutEmployeesInput {
  id?: Maybe<ID_Input>
  name: String
  location: String
}

export interface EmployeeUpdateManyWithoutDepartmentInput {
  create?: Maybe<
    | EmployeeCreateWithoutDepartmentInput[]
    | EmployeeCreateWithoutDepartmentInput
  >
  delete?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  connect?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  set?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  disconnect?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  update?: Maybe<
    | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput
  >
  upsert?: Maybe<
    | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput
  >
  deleteMany?: Maybe<EmployeeScalarWhereInput[] | EmployeeScalarWhereInput>
  updateMany?: Maybe<
    | EmployeeUpdateManyWithWhereNestedInput[]
    | EmployeeUpdateManyWithWhereNestedInput
  >
}

export interface OfficeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>
  updatedFields_contains?: Maybe<String>
  updatedFields_contains_every?: Maybe<String[] | String>
  updatedFields_contains_some?: Maybe<String[] | String>
  node?: Maybe<OfficeWhereInput>
  AND?: Maybe<OfficeSubscriptionWhereInput[] | OfficeSubscriptionWhereInput>
  OR?: Maybe<OfficeSubscriptionWhereInput[] | OfficeSubscriptionWhereInput>
  NOT?: Maybe<OfficeSubscriptionWhereInput[] | OfficeSubscriptionWhereInput>
}

export interface EmployeeUpdateWithWhereUniqueWithoutDepartmentInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutDepartmentDataInput
}

export interface EmployeeUpsertWithWhereUniqueWithoutOfficeInput {
  where: EmployeeWhereUniqueInput
  update: EmployeeUpdateWithoutOfficeDataInput
  create: EmployeeCreateWithoutOfficeInput
}

export interface EmployeeUpdateWithoutDepartmentDataInput {
  firstName?: Maybe<String>
  lastName?: Maybe<String>
  email?: Maybe<String>
  office?: Maybe<OfficeUpdateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export interface EmployeeUpdateManyWithoutOfficeInput {
  create?: Maybe<
    EmployeeCreateWithoutOfficeInput[] | EmployeeCreateWithoutOfficeInput
  >
  delete?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  connect?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  set?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  disconnect?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
  update?: Maybe<
    | EmployeeUpdateWithWhereUniqueWithoutOfficeInput[]
    | EmployeeUpdateWithWhereUniqueWithoutOfficeInput
  >
  upsert?: Maybe<
    | EmployeeUpsertWithWhereUniqueWithoutOfficeInput[]
    | EmployeeUpsertWithWhereUniqueWithoutOfficeInput
  >
  deleteMany?: Maybe<EmployeeScalarWhereInput[] | EmployeeScalarWhereInput>
  updateMany?: Maybe<
    | EmployeeUpdateManyWithWhereNestedInput[]
    | EmployeeUpdateManyWithWhereNestedInput
  >
}

export interface DepartmentUpdateOneWithoutLeadInput {
  create?: Maybe<DepartmentCreateWithoutLeadInput>
  update?: Maybe<DepartmentUpdateWithoutLeadDataInput>
  upsert?: Maybe<DepartmentUpsertWithoutLeadInput>
  delete?: Maybe<Boolean>
  disconnect?: Maybe<Boolean>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export interface EmployeeCreateManyWithoutOfficeInput {
  create?: Maybe<
    EmployeeCreateWithoutOfficeInput[] | EmployeeCreateWithoutOfficeInput
  >
  connect?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
}

export interface DepartmentUpdateWithoutLeadDataInput {
  name?: Maybe<String>
  employees?: Maybe<EmployeeUpdateManyWithoutDepartmentInput>
}

export interface EmployeeCreateOneWithoutLeadsInput {
  create?: Maybe<EmployeeCreateWithoutLeadsInput>
  connect?: Maybe<EmployeeWhereUniqueInput>
}

export interface DepartmentUpsertWithoutLeadInput {
  update: DepartmentUpdateWithoutLeadDataInput
  create: DepartmentCreateWithoutLeadInput
}

export interface OfficeCreateOneWithoutEmployeesInput {
  create?: Maybe<OfficeCreateWithoutEmployeesInput>
  connect?: Maybe<OfficeWhereUniqueInput>
}

export interface DepartmentSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>
  updatedFields_contains?: Maybe<String>
  updatedFields_contains_every?: Maybe<String[] | String>
  updatedFields_contains_some?: Maybe<String[] | String>
  node?: Maybe<DepartmentWhereInput>
  AND?: Maybe<
    DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  >
  OR?: Maybe<
    DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  >
  NOT?: Maybe<
    DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  >
}

export interface EmployeeUpdateManyDataInput {
  firstName?: Maybe<String>
  lastName?: Maybe<String>
  email?: Maybe<String>
}

export interface EmployeeUpdateManyWithWhereNestedInput {
  where: EmployeeScalarWhereInput
  data: EmployeeUpdateManyDataInput
}

export interface EmployeeScalarWhereInput {
  id?: Maybe<ID_Input>
  id_not?: Maybe<ID_Input>
  id_in?: Maybe<ID_Input[] | ID_Input>
  id_not_in?: Maybe<ID_Input[] | ID_Input>
  id_lt?: Maybe<ID_Input>
  id_lte?: Maybe<ID_Input>
  id_gt?: Maybe<ID_Input>
  id_gte?: Maybe<ID_Input>
  id_contains?: Maybe<ID_Input>
  id_not_contains?: Maybe<ID_Input>
  id_starts_with?: Maybe<ID_Input>
  id_not_starts_with?: Maybe<ID_Input>
  id_ends_with?: Maybe<ID_Input>
  id_not_ends_with?: Maybe<ID_Input>
  firstName?: Maybe<String>
  firstName_not?: Maybe<String>
  firstName_in?: Maybe<String[] | String>
  firstName_not_in?: Maybe<String[] | String>
  firstName_lt?: Maybe<String>
  firstName_lte?: Maybe<String>
  firstName_gt?: Maybe<String>
  firstName_gte?: Maybe<String>
  firstName_contains?: Maybe<String>
  firstName_not_contains?: Maybe<String>
  firstName_starts_with?: Maybe<String>
  firstName_not_starts_with?: Maybe<String>
  firstName_ends_with?: Maybe<String>
  firstName_not_ends_with?: Maybe<String>
  lastName?: Maybe<String>
  lastName_not?: Maybe<String>
  lastName_in?: Maybe<String[] | String>
  lastName_not_in?: Maybe<String[] | String>
  lastName_lt?: Maybe<String>
  lastName_lte?: Maybe<String>
  lastName_gt?: Maybe<String>
  lastName_gte?: Maybe<String>
  lastName_contains?: Maybe<String>
  lastName_not_contains?: Maybe<String>
  lastName_starts_with?: Maybe<String>
  lastName_not_starts_with?: Maybe<String>
  lastName_ends_with?: Maybe<String>
  lastName_not_ends_with?: Maybe<String>
  email?: Maybe<String>
  email_not?: Maybe<String>
  email_in?: Maybe<String[] | String>
  email_not_in?: Maybe<String[] | String>
  email_lt?: Maybe<String>
  email_lte?: Maybe<String>
  email_gt?: Maybe<String>
  email_gte?: Maybe<String>
  email_contains?: Maybe<String>
  email_not_contains?: Maybe<String>
  email_starts_with?: Maybe<String>
  email_not_starts_with?: Maybe<String>
  email_ends_with?: Maybe<String>
  email_not_ends_with?: Maybe<String>
  AND?: Maybe<EmployeeScalarWhereInput[] | EmployeeScalarWhereInput>
  OR?: Maybe<EmployeeScalarWhereInput[] | EmployeeScalarWhereInput>
  NOT?: Maybe<EmployeeScalarWhereInput[] | EmployeeScalarWhereInput>
}

export interface EmployeeUpsertWithWhereUniqueWithoutDepartmentInput {
  where: EmployeeWhereUniqueInput
  update: EmployeeUpdateWithoutDepartmentDataInput
  create: EmployeeCreateWithoutDepartmentInput
}

export interface EmployeeUpdateWithoutOfficeDataInput {
  firstName?: Maybe<String>
  lastName?: Maybe<String>
  email?: Maybe<String>
  department?: Maybe<DepartmentUpdateOneWithoutEmployeesInput>
  leads?: Maybe<DepartmentUpdateOneWithoutLeadInput>
}

export interface EmployeeCreateManyWithoutDepartmentInput {
  create?: Maybe<
    | EmployeeCreateWithoutDepartmentInput[]
    | EmployeeCreateWithoutDepartmentInput
  >
  connect?: Maybe<EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput>
}

export interface DepartmentCreateOneWithoutEmployeesInput {
  create?: Maybe<DepartmentCreateWithoutEmployeesInput>
  connect?: Maybe<DepartmentWhereUniqueInput>
}

export interface OfficeUpdateInput {
  name?: Maybe<String>
  location?: Maybe<String>
  employees?: Maybe<EmployeeUpdateManyWithoutOfficeInput>
}

export interface NodeNode {
  id: ID_Output
}

export interface OfficePreviousValues {
  id: ID_Output
  name: String
  location: String
}

export interface OfficePreviousValuesPromise
  extends Promise<OfficePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
  location: () => Promise<String>
}

export interface OfficePreviousValuesSubscription
  extends Promise<AsyncIterator<OfficePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  name: () => Promise<AsyncIterator<String>>
  location: () => Promise<AsyncIterator<String>>
}

export interface AggregateDepartment {
  count: Int
}

export interface AggregateDepartmentPromise
  extends Promise<AggregateDepartment>,
    Fragmentable {
  count: () => Promise<Int>
}

export interface AggregateDepartmentSubscription
  extends Promise<AsyncIterator<AggregateDepartment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}

export interface BatchPayload {
  count: Long
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>
}

export interface DepartmentEdge {
  node: Department
  cursor: String
}

export interface DepartmentEdgePromise
  extends Promise<DepartmentEdge>,
    Fragmentable {
  node: <T = DepartmentPromise>() => T
  cursor: () => Promise<String>
}

export interface DepartmentEdgeSubscription
  extends Promise<AsyncIterator<DepartmentEdge>>,
    Fragmentable {
  node: <T = DepartmentSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}

export interface Employee {
  id: ID_Output
  firstName: String
  lastName: String
  email: String
}

export interface EmployeePromise extends Promise<Employee>, Fragmentable {
  id: () => Promise<ID_Output>
  firstName: () => Promise<String>
  lastName: () => Promise<String>
  email: () => Promise<String>
  department: <T = DepartmentPromise>() => T
  office: <T = OfficePromise>() => T
  leads: <T = DepartmentPromise>() => T
}

export interface EmployeeSubscription
  extends Promise<AsyncIterator<Employee>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  firstName: () => Promise<AsyncIterator<String>>
  lastName: () => Promise<AsyncIterator<String>>
  email: () => Promise<AsyncIterator<String>>
  department: <T = DepartmentSubscription>() => T
  office: <T = OfficeSubscription>() => T
  leads: <T = DepartmentSubscription>() => T
}

export interface EmployeeNullablePromise
  extends Promise<Employee | null>,
    Fragmentable {
  id: () => Promise<ID_Output>
  firstName: () => Promise<String>
  lastName: () => Promise<String>
  email: () => Promise<String>
  department: <T = DepartmentPromise>() => T
  office: <T = OfficePromise>() => T
  leads: <T = DepartmentPromise>() => T
}

export interface Office {
  id: ID_Output
  name: String
  location: String
}

export interface OfficePromise extends Promise<Office>, Fragmentable {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
  location: () => Promise<String>
  employees: <T = FragmentableArray<Employee>>(args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface OfficeSubscription
  extends Promise<AsyncIterator<Office>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  name: () => Promise<AsyncIterator<String>>
  location: () => Promise<AsyncIterator<String>>
  employees: <T = Promise<AsyncIterator<EmployeeSubscription>>>(args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface OfficeNullablePromise
  extends Promise<Office | null>,
    Fragmentable {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
  location: () => Promise<String>
  employees: <T = FragmentableArray<Employee>>(args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface EmployeePreviousValues {
  id: ID_Output
  firstName: String
  lastName: String
  email: String
}

export interface EmployeePreviousValuesPromise
  extends Promise<EmployeePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>
  firstName: () => Promise<String>
  lastName: () => Promise<String>
  email: () => Promise<String>
}

export interface EmployeePreviousValuesSubscription
  extends Promise<AsyncIterator<EmployeePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  firstName: () => Promise<AsyncIterator<String>>
  lastName: () => Promise<AsyncIterator<String>>
  email: () => Promise<AsyncIterator<String>>
}

export interface AggregateOffice {
  count: Int
}

export interface AggregateOfficePromise
  extends Promise<AggregateOffice>,
    Fragmentable {
  count: () => Promise<Int>
}

export interface AggregateOfficeSubscription
  extends Promise<AsyncIterator<AggregateOffice>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}

export interface OfficeConnection {
  pageInfo: PageInfo
  edges: OfficeEdge[]
}

export interface OfficeConnectionPromise
  extends Promise<OfficeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<OfficeEdge>>() => T
  aggregate: <T = AggregateOfficePromise>() => T
}

export interface OfficeConnectionSubscription
  extends Promise<AsyncIterator<OfficeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<OfficeEdgeSubscription>>>() => T
  aggregate: <T = AggregateOfficeSubscription>() => T
}

export interface DepartmentConnection {
  pageInfo: PageInfo
  edges: DepartmentEdge[]
}

export interface DepartmentConnectionPromise
  extends Promise<DepartmentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<DepartmentEdge>>() => T
  aggregate: <T = AggregateDepartmentPromise>() => T
}

export interface DepartmentConnectionSubscription
  extends Promise<AsyncIterator<DepartmentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<DepartmentEdgeSubscription>>>() => T
  aggregate: <T = AggregateDepartmentSubscription>() => T
}

export interface AggregateEmployee {
  count: Int
}

export interface AggregateEmployeePromise
  extends Promise<AggregateEmployee>,
    Fragmentable {
  count: () => Promise<Int>
}

export interface AggregateEmployeeSubscription
  extends Promise<AsyncIterator<AggregateEmployee>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}

export interface EmployeeSubscriptionPayload {
  mutation: MutationType
  node: Employee
  updatedFields: String[]
  previousValues: EmployeePreviousValues
}

export interface EmployeeSubscriptionPayloadPromise
  extends Promise<EmployeeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = EmployeePromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = EmployeePreviousValuesPromise>() => T
}

export interface EmployeeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EmployeeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = EmployeeSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = EmployeePreviousValuesSubscription>() => T
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>
  hasPreviousPage: () => Promise<Boolean>
  startCursor: () => Promise<String>
  endCursor: () => Promise<String>
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>
  startCursor: () => Promise<AsyncIterator<String>>
  endCursor: () => Promise<AsyncIterator<String>>
}

export interface DepartmentPreviousValues {
  id: ID_Output
  name: String
}

export interface DepartmentPreviousValuesPromise
  extends Promise<DepartmentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
}

export interface DepartmentPreviousValuesSubscription
  extends Promise<AsyncIterator<DepartmentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  name: () => Promise<AsyncIterator<String>>
}

export interface DepartmentSubscriptionPayload {
  mutation: MutationType
  node: Department
  updatedFields: String[]
  previousValues: DepartmentPreviousValues
}

export interface DepartmentSubscriptionPayloadPromise
  extends Promise<DepartmentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = DepartmentPromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = DepartmentPreviousValuesPromise>() => T
}

export interface DepartmentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DepartmentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = DepartmentSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = DepartmentPreviousValuesSubscription>() => T
}

export interface EmployeeEdge {
  node: Employee
  cursor: String
}

export interface EmployeeEdgePromise
  extends Promise<EmployeeEdge>,
    Fragmentable {
  node: <T = EmployeePromise>() => T
  cursor: () => Promise<String>
}

export interface EmployeeEdgeSubscription
  extends Promise<AsyncIterator<EmployeeEdge>>,
    Fragmentable {
  node: <T = EmployeeSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}

export interface Department {
  id: ID_Output
  name: String
}

export interface DepartmentPromise extends Promise<Department>, Fragmentable {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
  lead: <T = EmployeePromise>() => T
  employees: <T = FragmentableArray<Employee>>(args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface DepartmentSubscription
  extends Promise<AsyncIterator<Department>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  name: () => Promise<AsyncIterator<String>>
  lead: <T = EmployeeSubscription>() => T
  employees: <T = Promise<AsyncIterator<EmployeeSubscription>>>(args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface DepartmentNullablePromise
  extends Promise<Department | null>,
    Fragmentable {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
  lead: <T = EmployeePromise>() => T
  employees: <T = FragmentableArray<Employee>>(args?: {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface OfficeEdge {
  node: Office
  cursor: String
}

export interface OfficeEdgePromise extends Promise<OfficeEdge>, Fragmentable {
  node: <T = OfficePromise>() => T
  cursor: () => Promise<String>
}

export interface OfficeEdgeSubscription
  extends Promise<AsyncIterator<OfficeEdge>>,
    Fragmentable {
  node: <T = OfficeSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}

export interface OfficeSubscriptionPayload {
  mutation: MutationType
  node: Office
  updatedFields: String[]
  previousValues: OfficePreviousValues
}

export interface OfficeSubscriptionPayloadPromise
  extends Promise<OfficeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = OfficePromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = OfficePreviousValuesPromise>() => T
}

export interface OfficeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<OfficeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = OfficeSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = OfficePreviousValuesSubscription>() => T
}

export interface EmployeeConnection {
  pageInfo: PageInfo
  edges: EmployeeEdge[]
}

export interface EmployeeConnectionPromise
  extends Promise<EmployeeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<EmployeeEdge>>() => T
  aggregate: <T = AggregateEmployeePromise>() => T
}

export interface EmployeeConnectionSubscription
  extends Promise<AsyncIterator<EmployeeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<EmployeeEdgeSubscription>>>() => T
  aggregate: <T = AggregateEmployeeSubscription>() => T
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: 'Employee',
    embedded: false,
  },
  {
    name: 'Office',
    embedded: false,
  },
  {
    name: 'Department',
    embedded: false,
  },
]

/**
 * Type Defs
 */

console.log(process.env.PRISMA_ENDPOINT)
export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env['PRISMA_ENDPOINT']}`,
})
export const prisma = new Prisma()
