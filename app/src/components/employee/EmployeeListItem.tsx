import * as React from 'react'
import { Employee } from 'Types'
import { Header4 } from '../Text'
import { ListItem } from '../List'

interface EmployeeListItemProps {
	employee: Employee
}

export const EmployeeListItem = ({ employee }: EmployeeListItemProps) => {
	const { firstName, lastName, department, office } = employee
	console.log(employee)

	return (
		<ListItem columnCount={3}>
			<Header4>
				{lastName}, {firstName}
			</Header4>
			<Header4 color={department && department.name ? '' : 'text.3'}>
				{department ? department.name : 'unassigned'}
			</Header4>
			<Header4 color={office && office.name ? '' : 'text.3'}>
				{office ? office.name : 'unassigned'}
			</Header4>
		</ListItem>
	)
}
