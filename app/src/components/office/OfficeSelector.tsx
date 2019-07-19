import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { Selector } from '../Form'
import { OfficeConnection } from 'Types'
import { officeFragment } from 'Queries'
import { officesQuery, OfficesQueryResponse } from 'Queries'

interface OfficeSelectorProps {
	name: string
	required?: boolean
}

export const OfficeSelector = ({ name, required }: OfficeSelectorProps) => {
	const [queryResponse] = useQuery<OfficesQueryResponse>({
		query: officesQuery,
	})
	const { data } = queryResponse
	const offices =
		data && data.officesConnection ? unwindEdges(data.officesConnection)[0] : []

	/* Create options for the select menu */
	const officeOptions = offices.map((d) => ({
		label: d.name,
		value: d.id,
	}))

	return (
		<Selector
			name={name}
			required={required}
			label="Office"
			placeholder="Select an Office"
			options={officeOptions}
		/>
	)
}
