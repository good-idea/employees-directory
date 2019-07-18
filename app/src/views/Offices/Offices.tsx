import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { RouteViewProps } from 'Types'
import { NewOfficeForm } from 'Components/office'
import { officesQuery, OfficesQueryResponse } from './queries'

interface OfficesProps extends RouteViewProps {
	/* */
}

interface CreateOfficeValues {
	title: string
	lead: string
}

export const Offices = (props: OfficesProps) => {
	const [response, refetchOffices] = useQuery<OfficesQueryResponse>({
		query: officesQuery,
	})

	const offices =
		response.data && response.data.officesConnection
			? unwindEdges(response.data.officesConnection)[0]
			: []
	return (
		<div>
			<h1>offices</h1>
			<NewOfficeForm />

			{offices.map((o) => (
				<p key={o.id}>{o.name}</p>
			))}
		</div>
	)
}
