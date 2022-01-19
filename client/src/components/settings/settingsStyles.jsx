import styled from "styled-components";
import {ReactComponent as Close} from '../../assets/close.svg'

export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${props => props.displayStatus ? '15' : '-1'};
    transition: 250ms ease-in-out;
`

export const ModalBackground = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 250ms ease-in-out;
    background: ${props => props.displayStatus ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,0)'};
`

export const OffToggle = styled(Close)`
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
`

export const ModalWindow = styled.div`
    padding: 16px 24px 32px;
    border-radius: 16px;
    color: #fff;
    margin: 0 auto;
    width: 420px;
    background: #121212;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: ${props => props.displayStatus ? '15%' : '-80%'};
    transition: 250ms ease-in-out;
    opacity: ${props => props.displayStatus ? 1 : 0};

    
    &>span{
        width: 90%;
        border-radius: 16px;
        height: 2px;
        background: rgba(255,255,255,.1);
        display: block;
        margin: 32px auto;
        content: '';
    }
    &>h2{
        width: 90%;
    }
    &>p:last-of-type{
        padding: 10px 16px;
        border-radius: 8px;
        width: 70%;
        background: #fff;
        text-align: center;
        box-sizing: border-box;
        color: ${props => props.link ? '#000' : 'rgba(0,0,0,.6)'};
        font-weight: bolder;
        cursor: ${props => props.link ? 'pointer' : 'not-allowed'};
        margin: 32px auto 0;
        opacity: ${props => props.link ? '1' : '0.6'}
        

    }
`