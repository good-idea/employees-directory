import * as React from 'react'
import { Form, Input } from '../Form'
import { useMutation } from 'urql'
import { FormOnSubmit } from '../../types'
import { createOffice } from '../../queries'
import { Button } from '../Button'
import { generateOffice } from '../../utils/generators'

interface FormValues {
  name: string
  location: string
}

export const NewOfficeForm = () => {
  const [, mutate] = useMutation(createOffice)

  /* State */
  const [initialValues, setInitialValues] = React.useState<Partial<FormValues>>(
    {},
  )

  /* Handlers */
  const handleGenerateClick = () => {
    const generated = generateOffice()
    setInitialValues(generated)
  }

  const handleSubmit: FormOnSubmit<FormValues> = async (values, actions) => {
    await mutate({ data: values })
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmit}
      label="Spawn Office"
    >
      <Input name="name" label="Office Name" required={true} />
      <Input name="location" label="Location" required={true} />
      <Button onClick={handleGenerateClick} type="button">
        Generate
      </Button>
    </Form>
  )
}
