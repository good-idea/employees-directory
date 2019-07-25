import * as React from 'react'
import { path } from 'ramda'
import { Header3 } from '../Text'
import {
  ListWrapper,
  ListHeader,
  ListContents,
  ListColumnHeaders,
  ColumnHeader,
} from './styled'
import { compareSearchTerm } from '../../utils'

interface ListRenderProps {
  sort: <T>(array: T[]) => T[]
  compareBySearchTerm: (val: string) => boolean
}

interface ColumnInfo {
  title: string
  sortByKey: string
}

interface ListProps {
  /* */
  title: string
  children: (props: ListRenderProps) => React.ReactNode
  columns: ColumnInfo[]
  /* an optional column count for the css grid.
   * falls back to props.columns.length */
  columnCount?: number
  initialSortColumn?: number
}

const sortBy = (keyByPath) => (arr: any[]) => {
  return arr.sort((a, b) => {
    const propA = keyByPath(a)
    const propB = keyByPath(b)
    // These two rules will sort `undefined` to the bottom of the list
    if (!propA) return 0
    if (!propB) return -1
    // Standard A-Z sorting
    if (propA > propB) return 1
    if (propB < propA) return -1
    if (propA === propB) return 0
    return -1
  })
}

export const List = ({
  title,
  children,
  columns,
  columnCount,
  initialSortColumn,
}: ListProps) => {
  /**
   * State
   */

  const [searchTerm, setSearchTerm] = React.useState('')
  const [currentSort, setCurrentSort] = React.useState<string>(
    initialSortColumn
      ? columns[initialSortColumn].sortByKey
      : columns[0].sortByKey,
  )

  /**
   * Handlers
   */

  const changeSort = (key: string) => () => setCurrentSort(key)

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value)

  /**
   * Render Props
   */

  const sort = sortBy(path(currentSort.split('.')))

  const compareBySearchTerm =
    searchTerm.length === 0 ? () => true : compareSearchTerm(searchTerm)

  const renderProps: ListRenderProps = {
    sort,
    compareBySearchTerm,
  }

  return (
    <ListWrapper>
      <ListHeader>
        <Header3>{title}</Header3>
        <input placeholder="Search" onChange={handleSearchInput} />
      </ListHeader>
      <ListColumnHeaders columnCount={columnCount || columns.length}>
        {columns.map(({ sortByKey, title: columnTitle }, index) => (
          <ColumnHeader key={sortByKey} active={sortByKey === currentSort}>
            <button onClick={changeSort(sortByKey)}>{columnTitle}</button>
          </ColumnHeader>
        ))}
      </ListColumnHeaders>
      <ListContents>{children(renderProps)}</ListContents>
    </ListWrapper>
  )
}
