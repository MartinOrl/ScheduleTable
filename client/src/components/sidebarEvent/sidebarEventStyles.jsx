import styled from 'styled-components'

export const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 32px 8px 16px;
    box-sizing: border-box;
    border-radius: 16px;
    background: #fff;
    box-shadow: 2px 3px 8px rgba(0,0,0,.12);
    transition: 250ms ease-in-out;
    margin-bottom: 16px;
    h1{
        color: #9470b5;
        font-size: 24px;
        margin: 0 0 8px;
    }
    p{
        opacity: 0.2;
        margin: 0;
        font-weight: bolder;
        font-size: 14px
    }
    div{
        margin-right: 48px;
    }
    svg{
        opacity: 0.5;
        transition: 250ms ease-in-out;
        width: 28px;
    }
    &:hover{
        background: #f1f1f1;
        cursor: pointer;
    }
`