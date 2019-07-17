import * as React from 'react'
import { RouteViewProps } from 'Types'
import { Form, Input } from 'Components/Form'

interface DepartmentsProps extends RouteViewProps {
	/* */
}

interface CreateDepartmentValues {
	title: string
	lead: string
}

export const Departments = (props: DepartmentsProps) => {
	const handleSubmit = (values, actions) => {
		console.log(values, actions)
	}
	return (
		<div>
			<h1>departments</h1>
			<Form<CreateDepartmentValues>
				label="Create Department"
				onSubmit={handleSubmit}
			>
				<Input name="title" label="Title" placeholder="Humans as Resources" />
				<Input name="lead" label="Department Lead" />
			</Form>
		</div>
	)
}
