import React, {Fragment} from 'react'
import ChileComponent from './ChileComponent'
const TableHeader = () => {
  return (
    <Fragment>
        <tr>
            <th>name</th>
            <th>age</th>
        </tr>

        <ChileComponent/>
        <p>from header</p>
    </Fragment>
  )
}

export default TableHeader