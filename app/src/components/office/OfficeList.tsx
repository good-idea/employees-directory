import * as React from 'react'
import { Office } from '../../types'
import { OfficeListItem } from './OfficeListItem'
import { List } from '../../components/List'

interface OfficeListProps {
  /* */
  offices: Office[]
}

export const OfficeList = ({ offices }: OfficeListProps) => {
  const officeColumns = [
    { title: 'Name', sortByKey: 'name' },
    { title: 'Location', sortByKey: 'location' },
  ]
  return (
    <List title="Offices" columnCount={3} columns={officeColumns}>
      {({ sort, compareBySearchTerm }) =>
        sort(offices)
          .filter(
            ({ name, location }) =>
              compareBySearchTerm(name) || compareBySearchTerm(location),
          )
          .map((e) => <OfficeListItem key={e.id} office={e} />)
      }
    </List>
  )
}
