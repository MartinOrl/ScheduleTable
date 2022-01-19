import React from 'react'

import { ComponentContainer } from './sidebarEventStyles'

import {ReactComponent as Arrow} from '../../assets/arrow.svg'

const SidebarEvent = () => {
    return (
        <ComponentContainer>
            <div>
                <h1>UI/UX Interview</h1>
                <p>Thursday 10:00 am - 10:30 am</p>
            </div>
            <Arrow />
        </ComponentContainer>
    )
}

export default SidebarEvent
