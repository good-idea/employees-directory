import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { RouteViewProps } from '../../types'
import { employeesQuery, EmployeesQueryResponse } from '../../queries'
import { NewEmployeeForm, EmployeeList } from '../../components/employee'
import { useBossMode } from '../../providers/BossMode'

export const Employees = (props: RouteViewProps) => {
  const { bossMode } = useBossMode()
  const [response] = useQuery<EmployeesQueryResponse>({
    query: employeesQuery,
  })

  const employees =
    response.data && response.data.employeesConnection
      ? unwindEdges(response.data.employeesConnection)[0]
      : []

  return (
    <div>
      {bossMode ? <NewEmployeeForm /> : null}
      <EmployeeList employees={employees} />
    </div>
  )
}
