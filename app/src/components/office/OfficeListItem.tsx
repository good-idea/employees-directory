import * as React from 'react'
import { Office } from 'Types'
import { Header4 } from '../Text'
import { ListItem } from '../List'

interface OfficeListItemProps {
	office: Office
}

export const OfficeListItem = ({ office }: OfficeListItemProps) => {
	const { name, location } = office

	return (
		<ListItem columnCount={3}>
			<Header4>{name}</Header4>
			<Header4>{location}</Header4>
		</ListItem>
	)
}
