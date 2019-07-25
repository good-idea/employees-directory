import * as React from 'react'
import { Department } from '../../types'
import { DepartmentListItem } from './DepartmentListItem'
import { List } from '../../components/List'

interface DepartmentListProps {
  /* */
  departments: Department[]
}

export const DepartmentList = ({ departments }: DepartmentListProps) => {
  const departmentColumns = [
    { title: 'Name', sortByKey: 'name' },
    { title: 'Lead', sortByKey: 'lead.lastName' },
  ]

  return (
    <List title="Departments" columnCount={3} columns={departmentColumns}>
      {({ sort, compareBySearchTerm }) =>
        sort(departments)
          .filter(({ name }) => compareBySearchTerm(name))
          .map((e) => <DepartmentListItem key={e.id} department={e} />)
      }
    </List>
  )
}
