import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { RouteViewProps } from 'Types'
import { NewOfficeForm, OfficeListItem } from 'Components/office'
import { officesQuery, OfficesQueryResponse } from 'Queries'
import { List } from 'Components/List'
import { useBossMode } from '../../providers/BossMode'

interface OfficesProps extends RouteViewProps {
	/* */
}

interface CreateOfficeValues {
	title: string
	lead: string
}

export const Offices = (props: OfficesProps) => {
	const { bossMode } = useBossMode()
	const [response, refetchOffices] = useQuery<OfficesQueryResponse>({
		query: officesQuery,
	})

	const offices =
		response.data && response.data.officesConnection
			? unwindEdges(response.data.officesConnection)[0]
			: []

	const officeColumns = [
		{ title: 'Name', sortByKey: 'name' },
		{ title: 'Location', sortByKey: 'location' },
	]
	return (
		<div>
			{bossMode ? <NewOfficeForm /> : null}
			<List title="Offices" columnCount={3} columns={officeColumns}>
				{({ sort }) =>
					sort(offices).map((o) => <OfficeListItem key={o.id} office={o} />)
				}
			</List>
		</div>
	)
}
