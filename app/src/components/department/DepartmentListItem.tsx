import * as React from 'react'
import { Department } from 'Types'
import { Header4 } from '../Text'
import { ListItem } from '../List'

interface DepartmentListItemProps {
	department: Department
}

export const DepartmentListItem = ({ department }: DepartmentListItemProps) => {
	const { lead, name } = department
	console.log(department)

	return (
		<ListItem columnCount={3}>
			<Header4>{name}</Header4>
			<Header4>{lead ? lead.firstName : ''}</Header4>
			<Header4>
				<span />
			</Header4>
		</ListItem>
	)
}
