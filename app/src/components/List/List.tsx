import * as React from 'react'
import { path, sortBy } from 'ramda'
import { Header3 } from '../Text'
import { ListWrapper, ListHeader, ListContents } from './styled'

interface ListRenderProps {
	sort: <T>(array: T[]) => T[]
}

interface ColumnInfo {
	label: string
	key: string
}

interface ListProps {
	/* */
	title: string
	children: (props: ListRenderProps) => React.ReactNode
	columns: ColumnInfo[]
}

export const List = ({ title, children, columns }: ListProps) => {
	// TODO: Add sort column + asc/desc to state
	const sortByKey = columns[0].key

	const sort = sortBy(path(sortByKey.split('.')))

	const renderProps: ListRenderProps = {
		sort,
	}

	return (
		<ListWrapper>
			<ListHeader>
				<Header3>{title}</Header3>
			</ListHeader>
			<ListContents>{children(renderProps)}</ListContents>
		</ListWrapper>
	)
}
