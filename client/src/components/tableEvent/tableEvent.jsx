import React from 'react'

import { Componentcontainer } from './tableEventStyles'

const TableEvent = ({name, time, teacher,diff, action, active}) => {
    return (
        <Componentcontainer active={active} width={diff}  >
            <p>{time}</p>
            <div onClick={() => action()}>
                <h1>{name}</h1>
                <p>{teacher}</p>
            </div>
        </Componentcontainer>
    )
}

export default TableEvent
