import * as React from 'react'
import { useMutation } from 'urql'
import { Office, MutationDeleteOfficeArgs } from '../../types'
import { Header4 } from '../Text'
import { ListItem, FireButton } from '../List'
import { deleteOfficeMutation } from '../../queries'
import { Brimstone } from '../Brimstone'
import { useBossMode } from '../../providers/BossMode'

interface OfficeListItemProps {
  office: Office
}

export const OfficeListItem = ({ office }: OfficeListItemProps) => {
  const { bossMode } = useBossMode()
  const { name, location } = office

  /* Burning State */
  const [isBurning, setIsBurning] = React.useState(false)

  /* Mutation */
  const [, burn] = useMutation<Office, MutationDeleteOfficeArgs>(
    deleteOfficeMutation,
  )

  const handleClick = () => {
    setIsBurning(true)
    const submit = () => {
      burn({ where: { id: office.id } })
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
      <Header4>{location}</Header4>
      {bossMode ? (
        <FireButton onClick={handleClick} disabled={isBurning}>
          Burn
        </FireButton>
      ) : null}
    </ListItem>
  )
}
