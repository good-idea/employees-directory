import * as React from 'react'
import { path, sortBy } from 'ramda'
import { Header3 } from '../Text'
import {
  ListWrapper,
  ListHeader,
  ListContents,
  ListColumnHeaders,
  ColumnHeader,
} from './styled'

interface ListRenderProps {
  sort: <T>(array: T[]) => T[]
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

export const List = ({
  title,
  children,
  columns,
  columnCount,
  initialSortColumn,
}: ListProps) => {
  const [currentSort, setCurrentSort] = React.useState<string>(
    initialSortColumn
      ? columns[initialSortColumn].sortByKey
      : columns[0].sortByKey,
  )

  const sort = sortBy(path(currentSort.split('.')))

  const renderProps: ListRenderProps = {
    sort,
  }

  const changeSort = (key: string) => () => setCurrentSort(key)

  // TODO: add
  return (
    <ListWrapper>
      <ListHeader>
        <Header3>{title}</Header3>
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
