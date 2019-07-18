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
	initialSortColumn?: number
}

export const List = ({
	title,
	children,
	columns,
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
			<ListColumnHeaders columnCount={columns.length}>
				{columns.map(({ sortByKey, title }, index) => (
					<ColumnHeader key={sortByKey} active={sortByKey === currentSort}>
						<button onClick={changeSort(sortByKey)}>{title}</button>
					</ColumnHeader>
				))}
			</ListColumnHeaders>
			<ListContents>{children(renderProps)}</ListContents>
		</ListWrapper>
	)
}
