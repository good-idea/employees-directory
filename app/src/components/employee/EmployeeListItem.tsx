import * as React from 'react'
import { Employee } from 'Types'
import { Header4 } from '../Text'
import { ListItem } from '../List'

interface EmployeeListItemProps {
	employee: Employee
}

export const EmployeeListItem = ({ employee }: EmployeeListItemProps) => {
	const { firstName, lastName } = employee

	return (
		<ListItem>
			<Header4>
				{lastName}, {firstName}
			</Header4>
		</ListItem>
	)
}
