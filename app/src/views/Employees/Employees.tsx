import * as React from 'react'
import { RouteViewProps } from 'Types'
import { useQuery } from 'urql'
import { employeesQuery } from './queries'

interface EmployeesProps extends RouteViewProps {
	/* */
}

export const Employees = (props: EmployeesProps) => {
	const data = useQuery({ query: employeesQuery })
	console.log(data)
	return <div>...</div>
}
