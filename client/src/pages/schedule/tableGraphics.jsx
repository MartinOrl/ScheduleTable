import React from 'react'
import styled from 'styled-components'

const Lines = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    left: 152px;
    z-index: -1;
`

const Line = styled.span`
    height: 100%;
    width: 2px;
    /* background: rgba(255,255,255,.05); */
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.05) 20%, rgba(255,255,255,.05) 80%, rgba(255,255,255,0) 100%);
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: ${props => props.width*98 + "px"};
`



const TableGraphics = () => {
    return (
        <Lines>
            <Line width={0} />
            <Line width={1} />
            <Line width={2} />
            <Line width={3} />
            <Line width={4} />
            <Line width={5} />
            <Line width={6} />
            <Line width={7} />
            <Line width={8} />
            <Line width={9} />
            <Line width={10} />
        </Lines>
    )
}

export default TableGraphics
