import * as React from 'react'
import { useMutation } from 'urql'
import { Department, MutationDeleteDepartmentArgs } from '../../types'
import { Header4 } from '../Text'
import { ListItem, FireButton } from '../List'
import { deleteDepartmentMutation } from '../../queries'
import { Brimstone } from '../Brimstone'
import { useBossMode } from '../../providers/BossMode'

interface DepartmentListItemProps {
  department: Department
}

export const DepartmentListItem = ({ department }: DepartmentListItemProps) => {
  const { bossMode } = useBossMode()
  const { lead, name } = department

  /* Burning State */
  const [isBurning, setIsBurning] = React.useState(false)

  /* Mutation */
  const [result, burn] = useMutation<Department, MutationDeleteDepartmentArgs>(
    deleteDepartmentMutation,
  )

  const handleClick = () => {
    setIsBurning(true)
    const submit = () => {
      burn({ where: { id: department.id } })
    }
    setTimeout(submit, 5000)
  }

  return (
    <ListItem columnCount={3} isBurning={isBurning}>
      <div>
        <Header4>
          {name}
          {isBurning ? <Brimstone /> : null}
        </Header4>
      </div>
      <Header4>{lead ? lead.firstName : ''}</Header4>
      {bossMode ? (
        <FireButton onClick={handleClick} disabled={isBurning}>
          Liquidate
        </FireButton>
      ) : null}
    </ListItem>
  )
}
