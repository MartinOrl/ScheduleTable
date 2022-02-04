import styled from "styled-components";

import {ReactComponent as Chevron} from '../../assets/chevron.svg'

export const MasterContainer = styled.div`
    color: #fff;
    padding-left: 96px;
    z-index: 4;
    position: relative;
    @media screen and (max-width: 768px){
        padding-left: 24px;
    }
`

export const ChevronToggle = styled(Chevron)`
    transform: ${props => props.collapse ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: 350ms ease-in-out;
    position: absolute;
    top: 16px;
    right: 16px;
    transform-origin: center;
    width: 24px;
    height: 24px;
`

export const Collapse = styled.div`
    max-height: ${props => props.collapse ? '480px' : '56px'};
    border: 1px solid white;
    border-radius: 8px;

    box-sizing: border-box;
    cursor: pointer;
    background: #000;
    transition: 400ms ease-in-out;
    overflow-y: hidden;
    position: relative;
    width: 256px;
    span{
        width: 90%;
        height: 2px;
        margin: 16px auto 12px;
        display: block;
        content: '';
        background: rgba(255,255,255,.15);
    }
    p{
        margin: 0;
        padding: 16px 24px;
        box-sizing: border-box;
        transition: 250ms ease-in-out;
        &:hover{
            background: rgba(255,255,255,.25);
        }
    }
`