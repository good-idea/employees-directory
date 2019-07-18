import { officeFragment } from './fragments'
import { Office } from 'Types/generated'

export const createOffice = /* GraphQL */ `
	mutation CreateOffice($data: OfficeCreateInput!) {
		createOffice(data: $data) {
			...OfficeFragment
		}
	}

	${officeFragment}
`

export interface CreateOfficeResponse {
	createOffice: Office
}
