import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { RouteViewProps } from '../../types'
import { NewOfficeForm, OfficeList } from '../../components/office'
import { List } from '../../components/List'
import { officesQuery, OfficesQueryResponse } from '../../queries'
import { useBossMode } from '../../providers/BossMode'

export const Offices = (props: RouteViewProps) => {
  const { bossMode } = useBossMode()
  const [response, refetchOffices] = useQuery<OfficesQueryResponse>({
    query: officesQuery,
  })

  const offices =
    response.data && response.data.officesConnection
      ? unwindEdges(response.data.officesConnection)[0]
      : []

  return (
    <div>
      {bossMode ? <NewOfficeForm /> : null}
      <OfficeList offices={offices} />
    </div>
  )
}
