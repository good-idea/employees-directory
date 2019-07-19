import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Form, Input, Selector } from '../Form'
import { useQuery, useMutation } from 'urql'
import { FormOnSubmit, MutationCreateEmployeeArgs } from '../../types'
import {
  departmentsQuery,
  DepartmentsQueryResponse,
  officesQuery,
  OfficesQueryResponse,
  createEmployee,
} from '../../queries'
import { DepartmentSelector } from '../../components/department'
import { OfficeSelector } from '../../components/office'
import { generateEmployee } from '../../utils/generators'
import { Button } from '../../components/Button'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  departmentId: string
  officeId: string
}

export const NewEmployeeForm = () => {
  const [, mutate] = useMutation(createEmployee)

  const [officeResponse] = useQuery<OfficesQueryResponse>({
    query: officesQuery,
  })
  const [departmentsResponse] = useQuery<DepartmentsQueryResponse>({
    query: departmentsQuery,
  })

  const offices = officeResponse.data
    ? unwindEdges(officeResponse.data.officesConnection)[0]
    : []

  const departments = departmentsResponse.data
    ? unwindEdges(departmentsResponse.data.departmentsConnection)[0]
    : []

  /* State */
  const [initialValues, setInitialValues] = React.useState<Partial<FormValues>>(
    {},
  )

  /* Handlers */
  const handleGenerateClick = () => {
    const generated = generateEmployee(departments, offices)
    setInitialValues(generated)
  }

  const handleSubmit: FormOnSubmit<FormValues> = async (values, actions) => {
    const { departmentId, officeId, ...rest } = values
    const data = {
      /* only include the 'connect' object when the ID exists
       * GraphQL will complain if you try to connect to an undefined ID */
      department: departmentId
        ? {
            connect: {
              id: departmentId,
            },
          }
        : undefined,
      office: officeId
        ? {
            connect: {
              id: officeId,
            },
          }
        : undefined,
      ...rest,
    }
    await mutate({ data })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      label="Spawn Employee"
      initialValues={initialValues}
    >
      <Input name="firstName" label="First Name" required={true} />
      <Input name="lastName" label="Last Name" required={true} />
      <Input name="email" label="Email Address" type="email" />
      <DepartmentSelector name="departmentId" />
      <OfficeSelector name="officeId" />
      <Button onClick={handleGenerateClick} type="button">
        Generate
      </Button>
    </Form>
  )
}
