export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	uuid: any
	DateTime: Date
	JSON: { [key: string]: any }
}

/** conflict action */
export enum Conflict_Action {
	/** ignore the insert on this row */
	Ignore = 'ignore',
	/** update the row with the given values */
	Update = 'update',
}

/** columns and relationships of "departments" */
export interface Departments {
	__typename: 'departments'
	id: Scalars['uuid']
	lead: Scalars['uuid']
	name: Scalars['String']
	test?: Maybe<Scalars['String']>
}

/** aggregated selection of "departments" */
export interface Departments_Aggregate {
	__typename: 'departments_aggregate'
	aggregate?: Maybe<Departments_Aggregate_Fields>
	nodes: Array<Departments>
}

/** aggregate fields of "departments" */
export interface Departments_Aggregate_Fields {
	__typename: 'departments_aggregate_fields'
	count?: Maybe<Scalars['Int']>
	max?: Maybe<Departments_Max_Fields>
	min?: Maybe<Departments_Min_Fields>
}

/** aggregate fields of "departments" */
export type Departments_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Departments_Select_Column>>
	distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "departments" */
export type Departments_Aggregate_Order_By = {
	count?: Maybe<Order_By>
	max?: Maybe<Departments_Max_Order_By>
	min?: Maybe<Departments_Min_Order_By>
}

/** input type for inserting array relation for remote table "departments" */
export type Departments_Arr_Rel_Insert_Input = {
	data: Array<Departments_Insert_Input>
	on_conflict?: Maybe<Departments_On_Conflict>
}

/** Boolean expression to filter rows from the table "departments". All fields are combined with a logical 'AND'. */
export type Departments_Bool_Exp = {
	_and?: Maybe<Array<Maybe<Departments_Bool_Exp>>>
	_not?: Maybe<Departments_Bool_Exp>
	_or?: Maybe<Array<Maybe<Departments_Bool_Exp>>>
	id?: Maybe<Uuid_Comparison_Exp>
	lead?: Maybe<Uuid_Comparison_Exp>
	name?: Maybe<Text_Comparison_Exp>
	test?: Maybe<Text_Comparison_Exp>
}

/** unique or primary key constraints on table "departments" */
export enum Departments_Constraint {
	/** unique or primary key constraint */
	DepartmentsPkey = 'departments_pkey',
}

/** input type for inserting data into table "departments" */
export type Departments_Insert_Input = {
	id?: Maybe<Scalars['uuid']>
	lead?: Maybe<Scalars['uuid']>
	name?: Maybe<Scalars['String']>
	test?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export interface Departments_Max_Fields {
	__typename: 'departments_max_fields'
	name?: Maybe<Scalars['String']>
	test?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "departments" */
export type Departments_Max_Order_By = {
	name?: Maybe<Order_By>
	test?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface Departments_Min_Fields {
	__typename: 'departments_min_fields'
	name?: Maybe<Scalars['String']>
	test?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "departments" */
export type Departments_Min_Order_By = {
	name?: Maybe<Order_By>
	test?: Maybe<Order_By>
}

/** response of any mutation on the table "departments" */
export interface Departments_Mutation_Response {
	__typename: 'departments_mutation_response'
	/** number of affected rows by the mutation */
	affected_rows: Scalars['Int']
	/** data of the affected rows by the mutation */
	returning: Array<Departments>
}

/** input type for inserting object relation for remote table "departments" */
export type Departments_Obj_Rel_Insert_Input = {
	data: Departments_Insert_Input
	on_conflict?: Maybe<Departments_On_Conflict>
}

/** on conflict condition type for table "departments" */
export type Departments_On_Conflict = {
	constraint: Departments_Constraint
	update_columns: Array<Departments_Update_Column>
}

/** ordering options when selecting data from "departments" */
export type Departments_Order_By = {
	id?: Maybe<Order_By>
	lead?: Maybe<Order_By>
	name?: Maybe<Order_By>
	test?: Maybe<Order_By>
}

/** select columns of table "departments" */
export enum Departments_Select_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Lead = 'lead',
	/** column name */
	Name = 'name',
	/** column name */
	Test = 'test',
}

/** input type for updating data in table "departments" */
export type Departments_Set_Input = {
	id?: Maybe<Scalars['uuid']>
	lead?: Maybe<Scalars['uuid']>
	name?: Maybe<Scalars['String']>
	test?: Maybe<Scalars['String']>
}

/** update columns of table "departments" */
export enum Departments_Update_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Lead = 'lead',
	/** column name */
	Name = 'name',
	/** column name */
	Test = 'test',
}

/** columns and relationships of "employees" */
export interface Employees {
	__typename: 'employees'
	/** An object relationship */
	department: Departments
	departmentId: Scalars['uuid']
	email: Scalars['String']
	firstName: Scalars['String']
	id: Scalars['uuid']
	lastName: Scalars['String']
	officeId: Scalars['uuid']
	username: Scalars['String']
}

/** aggregated selection of "employees" */
export interface Employees_Aggregate {
	__typename: 'employees_aggregate'
	aggregate?: Maybe<Employees_Aggregate_Fields>
	nodes: Array<Employees>
}

/** aggregate fields of "employees" */
export interface Employees_Aggregate_Fields {
	__typename: 'employees_aggregate_fields'
	count?: Maybe<Scalars['Int']>
	max?: Maybe<Employees_Max_Fields>
	min?: Maybe<Employees_Min_Fields>
}

/** aggregate fields of "employees" */
export type Employees_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Employees_Select_Column>>
	distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "employees" */
export type Employees_Aggregate_Order_By = {
	count?: Maybe<Order_By>
	max?: Maybe<Employees_Max_Order_By>
	min?: Maybe<Employees_Min_Order_By>
}

/** input type for inserting array relation for remote table "employees" */
export type Employees_Arr_Rel_Insert_Input = {
	data: Array<Employees_Insert_Input>
	on_conflict?: Maybe<Employees_On_Conflict>
}

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export type Employees_Bool_Exp = {
	_and?: Maybe<Array<Maybe<Employees_Bool_Exp>>>
	_not?: Maybe<Employees_Bool_Exp>
	_or?: Maybe<Array<Maybe<Employees_Bool_Exp>>>
	department?: Maybe<Departments_Bool_Exp>
	departmentId?: Maybe<Uuid_Comparison_Exp>
	email?: Maybe<Text_Comparison_Exp>
	firstName?: Maybe<Text_Comparison_Exp>
	id?: Maybe<Uuid_Comparison_Exp>
	lastName?: Maybe<Text_Comparison_Exp>
	officeId?: Maybe<Uuid_Comparison_Exp>
	username?: Maybe<Text_Comparison_Exp>
}

/** unique or primary key constraints on table "employees" */
export enum Employees_Constraint {
	/** unique or primary key constraint */
	EmployeesEmailKey = 'employees_email_key',
	/** unique or primary key constraint */
	EmployeesIdKey = 'employees_id_key',
	/** unique or primary key constraint */
	EmployeesPkey = 'employees_pkey',
	/** unique or primary key constraint */
	EmployeesUsernameKey = 'employees_username_key',
}

/** input type for inserting data into table "employees" */
export type Employees_Insert_Input = {
	department?: Maybe<Departments_Obj_Rel_Insert_Input>
	departmentId?: Maybe<Scalars['uuid']>
	email?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['uuid']>
	lastName?: Maybe<Scalars['String']>
	officeId?: Maybe<Scalars['uuid']>
	username?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export interface Employees_Max_Fields {
	__typename: 'employees_max_fields'
	email?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	username?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "employees" */
export type Employees_Max_Order_By = {
	email?: Maybe<Order_By>
	firstName?: Maybe<Order_By>
	lastName?: Maybe<Order_By>
	username?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface Employees_Min_Fields {
	__typename: 'employees_min_fields'
	email?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	username?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "employees" */
export type Employees_Min_Order_By = {
	email?: Maybe<Order_By>
	firstName?: Maybe<Order_By>
	lastName?: Maybe<Order_By>
	username?: Maybe<Order_By>
}

/** response of any mutation on the table "employees" */
export interface Employees_Mutation_Response {
	__typename: 'employees_mutation_response'
	/** number of affected rows by the mutation */
	affected_rows: Scalars['Int']
	/** data of the affected rows by the mutation */
	returning: Array<Employees>
}

/** input type for inserting object relation for remote table "employees" */
export type Employees_Obj_Rel_Insert_Input = {
	data: Employees_Insert_Input
	on_conflict?: Maybe<Employees_On_Conflict>
}

/** on conflict condition type for table "employees" */
export type Employees_On_Conflict = {
	constraint: Employees_Constraint
	update_columns: Array<Employees_Update_Column>
}

/** ordering options when selecting data from "employees" */
export type Employees_Order_By = {
	department?: Maybe<Departments_Order_By>
	departmentId?: Maybe<Order_By>
	email?: Maybe<Order_By>
	firstName?: Maybe<Order_By>
	id?: Maybe<Order_By>
	lastName?: Maybe<Order_By>
	officeId?: Maybe<Order_By>
	username?: Maybe<Order_By>
}

/** select columns of table "employees" */
export enum Employees_Select_Column {
	/** column name */
	DepartmentId = 'departmentId',
	/** column name */
	Email = 'email',
	/** column name */
	FirstName = 'firstName',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'lastName',
	/** column name */
	OfficeId = 'officeId',
	/** column name */
	Username = 'username',
}

/** input type for updating data in table "employees" */
export type Employees_Set_Input = {
	departmentId?: Maybe<Scalars['uuid']>
	email?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['uuid']>
	lastName?: Maybe<Scalars['String']>
	officeId?: Maybe<Scalars['uuid']>
	username?: Maybe<Scalars['String']>
}

/** update columns of table "employees" */
export enum Employees_Update_Column {
	/** column name */
	DepartmentId = 'departmentId',
	/** column name */
	Email = 'email',
	/** column name */
	FirstName = 'firstName',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'lastName',
	/** column name */
	OfficeId = 'officeId',
	/** column name */
	Username = 'username',
}

/** mutation root */
export interface Mutation_Root {
	__typename: 'mutation_root'
	/** delete data from the table: "departments" */
	delete_departments?: Maybe<Departments_Mutation_Response>
	/** delete data from the table: "employees" */
	delete_employees?: Maybe<Employees_Mutation_Response>
	/** delete data from the table: "offices" */
	delete_offices?: Maybe<Offices_Mutation_Response>
	/** insert data into the table: "departments" */
	insert_departments?: Maybe<Departments_Mutation_Response>
	/** insert data into the table: "employees" */
	insert_employees?: Maybe<Employees_Mutation_Response>
	/** insert data into the table: "offices" */
	insert_offices?: Maybe<Offices_Mutation_Response>
	/** update data of the table: "departments" */
	update_departments?: Maybe<Departments_Mutation_Response>
	/** update data of the table: "employees" */
	update_employees?: Maybe<Employees_Mutation_Response>
	/** update data of the table: "offices" */
	update_offices?: Maybe<Offices_Mutation_Response>
}

/** mutation root */
export type Mutation_RootDelete_DepartmentsArgs = {
	where: Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_EmployeesArgs = {
	where: Employees_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_OfficesArgs = {
	where: Offices_Bool_Exp
}

/** mutation root */
export type Mutation_RootInsert_DepartmentsArgs = {
	objects: Array<Departments_Insert_Input>
	on_conflict?: Maybe<Departments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_EmployeesArgs = {
	objects: Array<Employees_Insert_Input>
	on_conflict?: Maybe<Employees_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OfficesArgs = {
	objects: Array<Offices_Insert_Input>
	on_conflict?: Maybe<Offices_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_DepartmentsArgs = {
	_set?: Maybe<Departments_Set_Input>
	where: Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_EmployeesArgs = {
	_set?: Maybe<Employees_Set_Input>
	where: Employees_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_OfficesArgs = {
	_set?: Maybe<Offices_Set_Input>
	where: Offices_Bool_Exp
}

/** columns and relationships of "offices" */
export interface Offices {
	__typename: 'offices'
	id: Scalars['uuid']
	location?: Maybe<Scalars['String']>
	name: Scalars['String']
}

/** aggregated selection of "offices" */
export interface Offices_Aggregate {
	__typename: 'offices_aggregate'
	aggregate?: Maybe<Offices_Aggregate_Fields>
	nodes: Array<Offices>
}

/** aggregate fields of "offices" */
export interface Offices_Aggregate_Fields {
	__typename: 'offices_aggregate_fields'
	count?: Maybe<Scalars['Int']>
	max?: Maybe<Offices_Max_Fields>
	min?: Maybe<Offices_Min_Fields>
}

/** aggregate fields of "offices" */
export type Offices_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Offices_Select_Column>>
	distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "offices" */
export type Offices_Aggregate_Order_By = {
	count?: Maybe<Order_By>
	max?: Maybe<Offices_Max_Order_By>
	min?: Maybe<Offices_Min_Order_By>
}

/** input type for inserting array relation for remote table "offices" */
export type Offices_Arr_Rel_Insert_Input = {
	data: Array<Offices_Insert_Input>
	on_conflict?: Maybe<Offices_On_Conflict>
}

/** Boolean expression to filter rows from the table "offices". All fields are combined with a logical 'AND'. */
export type Offices_Bool_Exp = {
	_and?: Maybe<Array<Maybe<Offices_Bool_Exp>>>
	_not?: Maybe<Offices_Bool_Exp>
	_or?: Maybe<Array<Maybe<Offices_Bool_Exp>>>
	id?: Maybe<Uuid_Comparison_Exp>
	location?: Maybe<Text_Comparison_Exp>
	name?: Maybe<Text_Comparison_Exp>
}

/** unique or primary key constraints on table "offices" */
export enum Offices_Constraint {
	/** unique or primary key constraint */
	OfficesNameKey = 'offices_name_key',
	/** unique or primary key constraint */
	OfficesPkey = 'offices_pkey',
}

/** input type for inserting data into table "offices" */
export type Offices_Insert_Input = {
	id?: Maybe<Scalars['uuid']>
	location?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export interface Offices_Max_Fields {
	__typename: 'offices_max_fields'
	location?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "offices" */
export type Offices_Max_Order_By = {
	location?: Maybe<Order_By>
	name?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface Offices_Min_Fields {
	__typename: 'offices_min_fields'
	location?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "offices" */
export type Offices_Min_Order_By = {
	location?: Maybe<Order_By>
	name?: Maybe<Order_By>
}

/** response of any mutation on the table "offices" */
export interface Offices_Mutation_Response {
	__typename: 'offices_mutation_response'
	/** number of affected rows by the mutation */
	affected_rows: Scalars['Int']
	/** data of the affected rows by the mutation */
	returning: Array<Offices>
}

/** input type for inserting object relation for remote table "offices" */
export type Offices_Obj_Rel_Insert_Input = {
	data: Offices_Insert_Input
	on_conflict?: Maybe<Offices_On_Conflict>
}

/** on conflict condition type for table "offices" */
export type Offices_On_Conflict = {
	constraint: Offices_Constraint
	update_columns: Array<Offices_Update_Column>
}

/** ordering options when selecting data from "offices" */
export type Offices_Order_By = {
	id?: Maybe<Order_By>
	location?: Maybe<Order_By>
	name?: Maybe<Order_By>
}

/** select columns of table "offices" */
export enum Offices_Select_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Location = 'location',
	/** column name */
	Name = 'name',
}

/** input type for updating data in table "offices" */
export type Offices_Set_Input = {
	id?: Maybe<Scalars['uuid']>
	location?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
}

/** update columns of table "offices" */
export enum Offices_Update_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Location = 'location',
	/** column name */
	Name = 'name',
}

/** column ordering options */
export enum Order_By {
	/** in the ascending order, nulls last */
	Asc = 'asc',
	/** in the ascending order, nulls first */
	AscNullsFirst = 'asc_nulls_first',
	/** in the ascending order, nulls last */
	AscNullsLast = 'asc_nulls_last',
	/** in the descending order, nulls first */
	Desc = 'desc',
	/** in the descending order, nulls first */
	DescNullsFirst = 'desc_nulls_first',
	/** in the descending order, nulls last */
	DescNullsLast = 'desc_nulls_last',
}

/** query root */
export interface Query_Root {
	__typename: 'query_root'
	/** fetch data from the table: "departments" */
	departments: Array<Departments>
	/** fetch aggregated fields from the table: "departments" */
	departments_aggregate: Departments_Aggregate
	/** fetch data from the table: "departments" using primary key columns */
	departments_by_pk?: Maybe<Departments>
	/** fetch data from the table: "employees" */
	employees: Array<Employees>
	/** fetch aggregated fields from the table: "employees" */
	employees_aggregate: Employees_Aggregate
	/** fetch data from the table: "employees" using primary key columns */
	employees_by_pk?: Maybe<Employees>
	/** fetch data from the table: "offices" */
	offices: Array<Offices>
	/** fetch aggregated fields from the table: "offices" */
	offices_aggregate: Offices_Aggregate
	/** fetch data from the table: "offices" using primary key columns */
	offices_by_pk?: Maybe<Offices>
}

/** query root */
export type Query_RootDepartmentsArgs = {
	distinct_on?: Maybe<Array<Departments_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Departments_Order_By>>
	where?: Maybe<Departments_Bool_Exp>
}

/** query root */
export type Query_RootDepartments_AggregateArgs = {
	distinct_on?: Maybe<Array<Departments_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Departments_Order_By>>
	where?: Maybe<Departments_Bool_Exp>
}

/** query root */
export type Query_RootDepartments_By_PkArgs = {
	id: Scalars['uuid']
}

/** query root */
export type Query_RootEmployeesArgs = {
	distinct_on?: Maybe<Array<Employees_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Employees_Order_By>>
	where?: Maybe<Employees_Bool_Exp>
}

/** query root */
export type Query_RootEmployees_AggregateArgs = {
	distinct_on?: Maybe<Array<Employees_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Employees_Order_By>>
	where?: Maybe<Employees_Bool_Exp>
}

/** query root */
export type Query_RootEmployees_By_PkArgs = {
	id: Scalars['uuid']
	username: Scalars['String']
}

/** query root */
export type Query_RootOfficesArgs = {
	distinct_on?: Maybe<Array<Offices_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Offices_Order_By>>
	where?: Maybe<Offices_Bool_Exp>
}

/** query root */
export type Query_RootOffices_AggregateArgs = {
	distinct_on?: Maybe<Array<Offices_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Offices_Order_By>>
	where?: Maybe<Offices_Bool_Exp>
}

/** query root */
export type Query_RootOffices_By_PkArgs = {
	id: Scalars['uuid']
}

/** subscription root */
export interface Subscription_Root {
	__typename: 'subscription_root'
	/** fetch data from the table: "departments" */
	departments: Array<Departments>
	/** fetch aggregated fields from the table: "departments" */
	departments_aggregate: Departments_Aggregate
	/** fetch data from the table: "departments" using primary key columns */
	departments_by_pk?: Maybe<Departments>
	/** fetch data from the table: "employees" */
	employees: Array<Employees>
	/** fetch aggregated fields from the table: "employees" */
	employees_aggregate: Employees_Aggregate
	/** fetch data from the table: "employees" using primary key columns */
	employees_by_pk?: Maybe<Employees>
	/** fetch data from the table: "offices" */
	offices: Array<Offices>
	/** fetch aggregated fields from the table: "offices" */
	offices_aggregate: Offices_Aggregate
	/** fetch data from the table: "offices" using primary key columns */
	offices_by_pk?: Maybe<Offices>
}

/** subscription root */
export type Subscription_RootDepartmentsArgs = {
	distinct_on?: Maybe<Array<Departments_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Departments_Order_By>>
	where?: Maybe<Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDepartments_AggregateArgs = {
	distinct_on?: Maybe<Array<Departments_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Departments_Order_By>>
	where?: Maybe<Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDepartments_By_PkArgs = {
	id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootEmployeesArgs = {
	distinct_on?: Maybe<Array<Employees_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Employees_Order_By>>
	where?: Maybe<Employees_Bool_Exp>
}

/** subscription root */
export type Subscription_RootEmployees_AggregateArgs = {
	distinct_on?: Maybe<Array<Employees_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Employees_Order_By>>
	where?: Maybe<Employees_Bool_Exp>
}

/** subscription root */
export type Subscription_RootEmployees_By_PkArgs = {
	id: Scalars['uuid']
	username: Scalars['String']
}

/** subscription root */
export type Subscription_RootOfficesArgs = {
	distinct_on?: Maybe<Array<Offices_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Offices_Order_By>>
	where?: Maybe<Offices_Bool_Exp>
}

/** subscription root */
export type Subscription_RootOffices_AggregateArgs = {
	distinct_on?: Maybe<Array<Offices_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<Offices_Order_By>>
	where?: Maybe<Offices_Bool_Exp>
}

/** subscription root */
export type Subscription_RootOffices_By_PkArgs = {
	id: Scalars['uuid']
}

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
	_eq?: Maybe<Scalars['String']>
	_gt?: Maybe<Scalars['String']>
	_gte?: Maybe<Scalars['String']>
	_ilike?: Maybe<Scalars['String']>
	_in?: Maybe<Array<Scalars['String']>>
	_is_null?: Maybe<Scalars['Boolean']>
	_like?: Maybe<Scalars['String']>
	_lt?: Maybe<Scalars['String']>
	_lte?: Maybe<Scalars['String']>
	_neq?: Maybe<Scalars['String']>
	_nilike?: Maybe<Scalars['String']>
	_nin?: Maybe<Array<Scalars['String']>>
	_nlike?: Maybe<Scalars['String']>
	_nsimilar?: Maybe<Scalars['String']>
	_similar?: Maybe<Scalars['String']>
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
	_eq?: Maybe<Scalars['uuid']>
	_gt?: Maybe<Scalars['uuid']>
	_gte?: Maybe<Scalars['uuid']>
	_in?: Maybe<Array<Scalars['uuid']>>
	_is_null?: Maybe<Scalars['Boolean']>
	_lt?: Maybe<Scalars['uuid']>
	_lte?: Maybe<Scalars['uuid']>
	_neq?: Maybe<Scalars['uuid']>
	_nin?: Maybe<Array<Scalars['uuid']>>
}
