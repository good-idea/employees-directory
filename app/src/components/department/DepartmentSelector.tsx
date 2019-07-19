import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { Selector } from '../Form'
import { DepartmentConnection } from '../../types'
import { departmentsQuery, DepartmentsQueryResponse } from '../../queries'

interface DepartmentSelectorProps {
	name: string
	required?: boolean
}

export const DepartmentSelector = ({
	name,
	required,
}: DepartmentSelectorProps) => {
	const [queryResponse] = useQuery<DepartmentsQueryResponse>({
		query: departmentsQuery,
	})
	const { data } = queryResponse
	const departments =
		data && data.departmentsConnection
			? unwindEdges(data.departmentsConnection)[0]
			: []

	/* Create options for the select menu */
	const departmentOptions = departments.map((d) => ({
		label: d.name,
		value: d.id,
	}))

	return (
		<Selector
			name={name}
			required={required}
			label="Department"
			placeholder="Select a Department"
			options={departmentOptions}
		/>
	)
}
