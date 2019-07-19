import faker from 'faker'
import { head, prop, pipe } from 'ramda'
import { Department, Office, Employee } from 'Types'

const getFirstId = pipe(
	head,
	prop('id'),
)

export const generateEmployee = (
	departments: Department[] = [],
	offices: Office[] = [],
) => {
	const firstName = faker.name.firstName()
	const lastName = faker.name.lastName()
	const email = faker.internet.email(firstName).toLowerCase()
	const departmentId = getFirstId(faker.helpers.shuffle(departments))
	const officeId = getFirstId(faker.helpers.shuffle(offices))
	return {
		firstName,
		lastName,
		email,
		departmentId: departmentId as any,
		officeId: officeId as any,
	}
}
