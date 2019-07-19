import * as React from 'react'
import { useMutation } from 'urql'
import { Employee, MutationDeleteEmployeeArgs } from 'Types'
import { Header4 } from '../Text'
import { ListItem, FireButton } from '../List'
import { deleteEmployeeMutation } from 'Queries'
import { Brimstone } from '../Brimstone'

interface EmployeeListItemProps {
	employee: Employee
}

export const EmployeeListItem = ({ employee }: EmployeeListItemProps) => {
	const [isBurning, setIsBurning] = React.useState(false)
	const [hidden, setHidden] = React.useState(false)
	const { firstName, lastName, department, office } = employee
	const [result, fire] = useMutation<Employee, MutationDeleteEmployeeArgs>(
		deleteEmployeeMutation,
	)

	const handleClick = () => {
		setIsBurning(true)
		setTimeout(async () => {
			fire({ where: { id: employee.id } })
		}, 5000)
	}

	return (
		<ListItem columnCount={3} isBurning={isBurning} hidden={hidden}>
			<span>
				<Header4>
					{lastName}, {firstName}
					{isBurning ? <Brimstone /> : null}
				</Header4>
			</span>
			<Header4 color={department && department.name ? '' : 'text.3'}>
				{department ? department.name : 'unassigned'}
			</Header4>
			<Header4 color={office && office.name ? '' : 'text.3'}>
				{office ? office.name : 'unassigned'}
			</Header4>
			<FireButton onClick={handleClick} disabled={isBurning}>
				Fire
			</FireButton>
		</ListItem>
	)
}
