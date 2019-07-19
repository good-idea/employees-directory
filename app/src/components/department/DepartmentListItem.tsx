import * as React from 'react'
import { useMutation } from 'urql'
import { Department, MutationDeleteDepartmentArgs } from 'Types'
import { Header4 } from '../Text'
import { ListItem, FireButton } from '../List'
import { deleteDepartmentMutation } from 'Queries'
import { Brimstone } from '../Brimstone'
import { useBossMode } from 'Providers'

interface DepartmentListItemProps {
	department: Department
}

export const DepartmentListItem = ({ department }: DepartmentListItemProps) => {
	const { lead, name } = department

	/* Burning State */
	const [isBurning, setIsBurning] = React.useState(false)

	/* Mutation */
	const [result, burn] = useMutation<Department, MutationDeleteDepartmentArgs>(
		deleteDepartmentMutation,
	)

	const handleClick = () => {
		setIsBurning(true)
		setTimeout(async () => {
			burn({ where: { id: department.id } })
		}, 5000)
	}

	return (
		<ListItem columnCount={3} isBurning={isBurning}>
			<div>
				<Header4>
					{name}
					{isBurning ? <Brimstone /> : null}
				</Header4>
			</div>
			<Header4>{lead ? lead.firstName : ''}</Header4>
			<FireButton onClick={handleClick} disabled={isBurning}>
				Liquidate
			</FireButton>
		</ListItem>
	)
}
