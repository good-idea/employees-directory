import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { RouteViewProps } from '../../types'
import { departmentsQuery, DepartmentsQueryResponse } from '../../queries'
import { NewDepartmentForm, DepartmentList } from '../../components/department'
import { List } from '../../components/List'
import { useBossMode } from '../../providers/BossMode'

export const Departments = (props: RouteViewProps) => {
  const { bossMode } = useBossMode()
  const [response] = useQuery<DepartmentsQueryResponse>({
    query: departmentsQuery,
  })

  const departments =
    response.data && response.data.departmentsConnection
      ? unwindEdges(response.data.departmentsConnection)[0]
      : []

  return (
    <div>
      {bossMode ? <NewDepartmentForm /> : null}
      <DepartmentList departments={departments} />
    </div>
  )
}
