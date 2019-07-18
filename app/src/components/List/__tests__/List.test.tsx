import * as React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { List } from '../List'

const employees = [
	{ firstName: 'Alice', lastName: 'Zipper' },
	{ firstName: 'Bobby', lastName: 'Mittelman' },
	{ firstName: 'Zeb', lastName: 'Apple' },
]

const columns = [
	{ title: 'Last Name', sortByKey: 'lastName' },
	{ title: 'First Name', sortByKey: 'firstName' },
]

describe('List', () => {
	it('should sort its children by key, using the first column as the default', async () => {
		const { container } = render(
			<List title="Employees" columns={columns}>
				{({ sort }) =>
					sort(employees).map(({ firstName, lastName }) => (
						<li key={lastName}>
							{firstName} {lastName}
						</li>
					))
				}
			</List>,
		)

		const first = container.querySelector('li')
		expect(first.textContent).toBe('Zeb Apple')
	})

	it('should sort its children by key, using the `initialSortColumn` prop', async () => {
		const { container } = render(
			<List title="Employees" columns={columns} initialSortColumn={1}>
				{({ sort }) =>
					sort(employees).map(({ firstName, lastName }) => (
						<li key={lastName}>
							{firstName} {lastName}
						</li>
					))
				}
			</List>,
		)

		const first = container.querySelector('li')
		expect(first.textContent).toBe('Alice Zipper')
	})

	it('should update sort order when a header is clicked', async () => {
		const { container, getByText, debug } = render(
			<List title="Employees" columns={columns}>
				{({ sort }) =>
					sort(employees).map(({ firstName, lastName }) => (
						<li key={lastName}>
							{firstName} {lastName}
						</li>
					))
				}
			</List>,
		)

		const lastNameBtn = getByText('First Name')
		await fireEvent.click(lastNameBtn)
		const first = container.querySelector('li')

		expect(first.textContent).toBe('Alice Zipper')
	})
})
