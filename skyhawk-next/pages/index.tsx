import type { NextPage } from 'next'
import { NavBarMain } from '../shared/shared-components/navbar'
import { IndexBody } from '../shared/index-components/body'

const RootHome: NextPage = () => {
  return (
    <div>
      <NavBarMain />
      <IndexBody />
    </div>
  )
}

export default RootHome
