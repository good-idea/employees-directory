import * as React from 'react'
import { useMutation } from 'urql'
import { Office, MutationDeleteOfficeArgs } from 'Types'
import { Header4 } from '../Text'
import { ListItem, FireButton } from '../List'
import { deleteOfficeMutation } from 'Queries'
import { Brimstone } from '../Brimstone'

interface OfficeListItemProps {
	office: Office
}

export const OfficeListItem = ({ office }: OfficeListItemProps) => {
	const { name, location } = office

	/* Burning State */
	const [isBurning, setIsBurning] = React.useState(false)

	/* Mutation */
	const [result, burn] = useMutation<Office, MutationDeleteOfficeArgs>(
		deleteOfficeMutation,
	)

	const handleClick = () => {
		setIsBurning(true)
		setTimeout(async () => {
			burn({ where: { id: office.id } })
		}, 5000)
	}

	return (
		<ListItem columnCount={3}>
			<div>
				<Header4>
					{name}

					{isBurning ? <Brimstone /> : null}
				</Header4>
			</div>
			<Header4>{location}</Header4>
			<FireButton onClick={handleClick} disabled={isBurning}>
				Burn
			</FireButton>
		</ListItem>
	)
}
