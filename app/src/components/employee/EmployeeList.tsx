import * as React from 'react'
import { Employee } from '../../types'
import { EmployeeListItem } from './EmployeeListItem'
import { List } from '../../components/List'

interface EmployeeListProps {
  /* */
  employees: Employee[]
}

export const EmployeeList = ({ employees }: EmployeeListProps) => {
  const employeeColumns = [
    { title: 'Name', sortByKey: 'lastName' },
    { title: 'Department', sortByKey: 'department.name' },
    { title: 'Office', sortByKey: 'office.name' },
  ]
  return (
    <List title="Employees" columns={employeeColumns}>
      {({ sort, compareBySearchTerm }) =>
        sort(employees)
          .filter(({ firstName, lastName }) =>
            compareBySearchTerm(`${firstName} ${lastName}`),
          )
          .map((e) => <EmployeeListItem key={e.id} employee={e} />)
      }
    </List>
  )
}
